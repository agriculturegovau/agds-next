import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
import { FormTask1Container } from './FormTask1Container';
import {
	Task1Step1Part2FormSchema,
	task1Step1Part2FormSchema,
} from './FormTask1FormState';
import { useFormTask1Context } from './FormTask1Provider';

export function FormTask1Step1() {
	const { formState, typeSearchParm } = useGlobalForm();
	const stepFormState = formState.task1?.step1;
	const step1ChangeDetailsPath = `/app/licences-and-permits/apply/mobile-foodvendor-permit/form/task-1/step-1/change-details?type=${typeSearchParm}`;
	const { query } = useRouter();
	const isUpdated = query.success === 'true';
	const [isSuccessMessageVisible, setIsSuccessMessageVisible] =
		useState(isUpdated);

	useEffect(() => {
		setIsSuccessMessageVisible(isUpdated);
	}, [isUpdated]);

	return (
		<FormTask1Container
			formTitle="Owner details"
			formIntroduction="Confirm your name and contact details."
		>
			<Stack gap={3} alignItems="flex-start" width="100%">
				<Stack gap={1.5} width="100%">
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
								<SummaryListItemTerm>Email</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepFormState?.email}
								</SummaryListItemDescription>
							</SummaryListItem>
						</SummaryList>
						<ButtonLink href={step1ChangeDetailsPath} variant="text">
							Change business owner details
						</ButtonLink>
					</Stack>
				</Stack>
				<AdditionalDetailsForm />
			</Stack>
		</FormTask1Container>
	);
}

function AdditionalDetailsForm() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Task1Step1Part2FormSchema>({
		defaultValues: {
			contactPhoneNumber: formState.task1?.step1?.contactPhoneNumber,
		},
		resolver: zodResolver(task1Step1Part2FormSchema),
	});

	const onSubmit: SubmitHandler<Task1Step1Part2FormSchema> = async (data) => {
		await submitStep();
		setFormState({
			...formState,
			task1: {
				...formState.task1,
				step1: { ...formState.task1?.step1, ...data, completed: true },
			},
		});
	};

	return (
		<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)}>
			<Stack gap={1.5}>
				<H2>Additional details</H2>
				<TextInput
					label="Contact phone number"
					hint={
						'Any Australian mobile or landline, for example 0444111222 or 02 9988 7766'
					}
					id="contactPhoneNumber"
					{...register('contactPhoneNumber')}
					message={errors.contactPhoneNumber?.message}
				/>
			</Stack>
			<StepActions />
		</Stack>
	);
}
