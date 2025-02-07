import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Details } from '@ag.ds-next/react/details';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { TextInput } from '@ag.ds-next/react/text-input';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { useGlobalForm } from '../GlobalFormProvider';
import {
	stepOwnerDetailsChangeDetailsFormSchema,
	type StepOwnerDetailsChangeDetailsFormSchema,
} from './FormState';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import { Form } from './Form';
import { stepKeyToStepDataMap } from './stepsData';

export function StepOwnerDetailsForm() {
	const { stepOwnerDetailsGetState, stepOwnerDetailsReviewEditGetState } =
		useGlobalForm();

	const editingStep = useIsEditingFromReviewStep();
	const reviewEditState = stepOwnerDetailsReviewEditGetState();
	const stepState =
		editingStep?.match && reviewEditState?.edited
			? stepOwnerDetailsReviewEditGetState()
			: stepOwnerDetailsGetState();

	const { query } = useRouter();
	const isUpdated = query.success === 'true';
	const [isSuccessMessageVisible, setIsSuccessMessageVisible] =
		useState(isUpdated);

	const changeBusinessOwnerDetailsHref = stepKeyToStepDataMap.stepOwnerDetails
		?.items
		? stepKeyToStepDataMap.stepOwnerDetails.items[0][
				editingStep?.match ? 'changeHref' : 'href'
		  ]
		: undefined;

	useEffect(() => {
		setIsSuccessMessageVisible(isUpdated);
	}, [isUpdated]);

	return (
		<FormContainer
			formIntroduction="Confirm your name and contact details."
			formTitle={
				stepKeyToStepDataMap.stepOwnerDetails[
					editingStep?.match ? 'changeLabel' : 'label'
				]
			}
			shouldFocusTitle={!isSuccessMessageVisible}
		>
			<Stack gap={3}>
				<FormStack>
					<H2>Confirm business owner details</H2>
					<Details iconBefore label="How were my details prefilled?">
						<Prose>
							<p>
								We’re working hard to improve the way we do business with you.
								This includes making applications and registrations easier to
								use.
							</p>
							<p>
								If we already have some of the information you need to tell us,
								we’ll pre-fill it into your applications. This saves you
								entering all your details yourself.
							</p>
							<p>
								It’s important to check the pre-filled information in your
								report before you submit it.
							</p>
						</Prose>
					</Details>
					{isSuccessMessageVisible && (
						<SectionAlert
							focusOnMount
							onClose={() => setIsSuccessMessageVisible(false)}
							title="Business owner details have been updated"
							tone="success"
						/>
					)}
					<Stack gap={1.5}>
						<SummaryList>
							<SummaryListItem>
								<SummaryListItemTerm>First name</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepState?.firstName}
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Last name</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepState?.lastName}
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Email address</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepState?.email}
								</SummaryListItemDescription>
							</SummaryListItem>
						</SummaryList>

						<ButtonLink
							alignSelf="start"
							href={changeBusinessOwnerDetailsHref}
							variant="text"
						>
							Change business owner details
						</ButtonLink>
					</Stack>
				</FormStack>
				<AdditionalDetailsForm />
			</Stack>
		</FormContainer>
	);
}

function AdditionalDetailsForm() {
	const {
		isSavingBeforeExiting,
		stepOwnerDetailsGetState,
		stepOwnerDetailsSetState,
		stepOwnerDetailsReviewEditGetState,
	} = useGlobalForm();

	const editingStep = useIsEditingFromReviewStep();
	const reviewEditState = stepOwnerDetailsReviewEditGetState();
	const stepState =
		editingStep?.match && reviewEditState?.edited
			? stepOwnerDetailsReviewEditGetState()
			: stepOwnerDetailsGetState();

	const { submitStep } = useFormContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StepOwnerDetailsChangeDetailsFormSchema>({
		defaultValues: {
			contactPhoneNumber: stepOwnerDetailsGetState()?.contactPhoneNumber,
		},
		resolver: zodResolver(stepOwnerDetailsChangeDetailsFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<
		StepOwnerDetailsChangeDetailsFormSchema
	> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		stepOwnerDetailsSetState({
			...stepState,
			...data,
			completed: !isSavingBeforeExiting,
			edited: editingStep?.match ? true : undefined,
			started: true,
		});
	};

	return (
		<Form
			editingCancel={
				editingStep?.match
					? () => {
							stepOwnerDetailsGetState();
					  }
					: undefined
			}
			noValidate={false}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormStack>
				<H2>Additional details</H2>
				<TextInput
					{...register('contactPhoneNumber')}
					autoComplete="tel"
					hint="Any Australian mobile or landline. For example, 0444111222 or 02 9988 7766"
					id="contactPhoneNumber"
					invalid={Boolean(errors.contactPhoneNumber)}
					label="Contact phone number"
					message={errors.contactPhoneNumber?.message}
				/>
			</FormStack>
		</Form>
	);
}
