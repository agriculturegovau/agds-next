import { Fragment } from 'react';
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
import { formSteps, useFormContext } from './FormProvider';
import { FormStep10Review } from './FormStep10Review';
import { step10FormSchema, Step10FormSchema } from './FormState';
import { Form } from './Form';

export function FormStep10() {
	const { isSavingBeforeExiting, step10SetState } = useGlobalForm();
	const { submitStep, canConfirmAndSubmit } = useFormContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Step10FormSchema>({
		resolver: zodResolver(step10FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Step10FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step10SetState({
			...data,
			completed: true,
		});
	};

	const hasMultipleErrors = Object.keys(errors).length > 1;

	return (
		<FormContainer
			formIntroduction="Check and confirm all details on this page."
			formTitle={formSteps[9].label}
			hideRequiredFieldsMessage
		>
			{canConfirmAndSubmit ? (
				<Fragment>
					<FormStep10Review />
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
