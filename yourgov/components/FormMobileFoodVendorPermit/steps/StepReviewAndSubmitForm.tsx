import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { H2 } from '@ag.ds-next/react/heading';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextLinkExternal } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';
import { CannotStartAlert } from '../CannotStartAlert';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import { ReviewAndSubmitStepsSummary } from './ReviewAndSubmitStepsSummary';
import {
	stepReviewAndSubmitFormSchema,
	StepReviewAndSubmitFormSchema,
} from './FormState';
import { Form } from './Form';
import { stepKeyToStepDataMap } from './stepsData';

export function StepReviewAndSubmitForm() {
	const { isSavingBeforeExiting, stepReviewAndSubmitSetState } =
		useGlobalForm();
	const { submitStep, canConfirmAndSubmit } = useFormContext();
	const { query } = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StepReviewAndSubmitFormSchema>({
		resolver: zodResolver(stepReviewAndSubmitFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<StepReviewAndSubmitFormSchema> = async (
		data
	) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		stepReviewAndSubmitSetState({
			...data,
			completed: true,
		});
	};

	const hasMultipleErrors = Object.keys(errors).length > 1;

	const shouldFocusTitle = ![
		'stepOwnerDetails',
		'stepBusinessDetails',
		'stepBusinessAddress',
		'stepVehicleRegistration',
		'stepTradingTime',
		'stepFoodServed',
		'stepEmployees',
		'stepUploadDocuments',
	].includes(typeof query.success === 'string' ? query.success : '');

	return (
		<FormContainer
			formIntroduction="Check and confirm all details on this page."
			formTitle={stepKeyToStepDataMap.stepReviewAndSubmit.label}
			hideRequiredFieldsMessage
			shouldFocusTitle={shouldFocusTitle}
		>
			{canConfirmAndSubmit ? (
				<Fragment>
					<ReviewAndSubmitStepsSummary />
					<Form
						onSubmit={handleSubmit(onSubmit)}
						submitText="Submit application"
					>
						<FormStack>
							<H2>Declaration</H2>
							<Text as="p">
								You must agree to the{' '}
								<TextLinkExternal href="/not-found">
									Terms of Use
								</TextLinkExternal>
								, the{' '}
								<TextLinkExternal href="/not-found">
									Privacy Policy
								</TextLinkExternal>{' '}
								and the{' '}
								<TextLinkExternal href="/not-found">
									Privacy Notice
								</TextLinkExternal>{' '}
								to continue.
							</Text>
							<ControlGroup
								block
								id="checkbox"
								invalid={
									hasMultipleErrors ||
									Boolean(
										errors.declaration1 ||
											errors.declaration2 ||
											errors.declaration3
									)
								}
								message={
									hasMultipleErrors
										? 'Accept all declarations to continue'
										: errors.declaration1?.message ||
										  errors.declaration2?.message ||
										  errors.declaration3?.message
								}
								required
							>
								<Checkbox {...register('declaration1')}>
									I have read, understood and agree to be bound by the Terms of
									Use, The Privacy Policy and the Privacy notice.
								</Checkbox>
								<Checkbox {...register('declaration2')}>
									I understand and agree that any information I provide to the
									Export Service may be used in relation to other Services in
									order to improve the Export Service experience.
								</Checkbox>
								<Checkbox {...register('declaration3')}>
									I understand and consent to the Department using the personal
									information, sensitive information, and/or relevant
									information (within the meaning of the Export Control Act 2020
									(Cth) and the Privacy Act 1988 (Cth)) I provide for the
									purposes of facilitating my access to, and ability to perform
									export activities in, the Export Service.
								</Checkbox>
							</ControlGroup>
						</FormStack>
					</Form>
				</Fragment>
			) : (
				<CannotStartAlert />
			)}
		</FormContainer>
	);
}
