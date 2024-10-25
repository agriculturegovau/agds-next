import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Details } from '@ag.ds-next/react/details';
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
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { step1Part2FormSchema, type Step1Part2FormSchema } from './FormState';
import { FormContainer } from './FormContainer';
import { taskFormSteps, useFormContext } from './FormProvider';

export function FormStep1() {
	const { formState } = useGlobalForm();
	const stepFormState = formState.steps?.step1;
	const { query } = useRouter();
	const isUpdated = query.success === 'true';
	const [isSuccessMessageVisible, setIsSuccessMessageVisible] =
		useState(isUpdated);

	useEffect(() => {
		setIsSuccessMessageVisible(isUpdated);
	}, [isUpdated]);

	return (
		<FormContainer
			formTitle="Owner details"
			formIntroduction="Confirm your name and contact details."
			shouldFocusTitle={!isSuccessMessageVisible}
		>
			<Stack gap={3}>
				<Stack gap={1.5}>
					<H2>Confirm business owner details</H2>
					<Details label="How were my details prefilled?" iconBefore>
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
							title="Business owner details have been updated"
							tone="success"
							onClose={() => setIsSuccessMessageVisible(false)}
						/>
					)}
					<Stack gap={1.5} alignItems="flex-start">
						<SummaryList>
							<SummaryListItem>
								<SummaryListItemTerm>First name</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepFormState?.firstName}
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Last name</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepFormState?.lastName}
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Email address</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepFormState?.email}
								</SummaryListItemDescription>
							</SummaryListItem>
						</SummaryList>
						<ButtonLink
							href={taskFormSteps[0].items && taskFormSteps[0].items[0].href}
							variant="text"
						>
							Change business owner details
						</ButtonLink>
					</Stack>
				</Stack>
				<AdditionalDetailsForm />
			</Stack>
		</FormContainer>
	);
}

function AdditionalDetailsForm() {
	const { formState, step1SetState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Step1Part2FormSchema>({
		defaultValues: {
			contactPhoneNumber: formState.steps?.step1?.contactPhoneNumber,
		},
		resolver: zodResolver(step1Part2FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Step1Part2FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step1SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	return (
		<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)}>
			<Stack gap={1.5}>
				<H2>Additional details</H2>
				<TextInput
					label="Contact phone number"
					hint="Any Australian mobile or landline. For example, 0444111222 or 02 9988 7766"
					id="contactPhoneNumber"
					{...register('contactPhoneNumber')}
					message={errors.contactPhoneNumber?.message}
					invalid={Boolean(errors.contactPhoneNumber)}
				/>
			</Stack>
			<StepActions />
		</Stack>
	);
}
