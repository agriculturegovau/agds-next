import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@ag.ds-next/react/stack';
import { ButtonLink } from '@ag.ds-next/react/button';
import { TextInput } from '@ag.ds-next/react/text-input';
import { H2 } from '@ag.ds-next/react/heading';
import { Prose } from '@ag.ds-next/react/prose';
import { Details } from '@ag.ds-next/react/details';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormActions } from '../FormActions';
import { FormTask2Container } from './FormTask2Container';
import { useFormTask2Context } from './FormTask2Provider';
import {
	task2Step1Part2FormSchema,
	Task2Step1Part2FormSchema,
} from './FormTask2FormState';

export function FormTask2Step1() {
	const { formState, typeSearchParm } = useGlobalForm();
	const stepFormState = formState.task2?.step1;
	const step1ChangeDetailsPath = `/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-2/step-1/change-details?type=${typeSearchParm}`;
	return (
		<FormTask2Container
			formTitle="Owner details"
			formIntroduction="Confirm your name and contact details."
		>
			<Stack gap={3} alignItems="flex-start" width="100%">
				<Stack gap={1.5} alignItems="flex-start" width="100%">
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
						Change details
					</ButtonLink>
				</Stack>
				<AdditionalDetailsForm />
			</Stack>
		</FormTask2Container>
	);
}

function AdditionalDetailsForm() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep } = useFormTask2Context();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Task2Step1Part2FormSchema>({
		defaultValues: {
			contactPhoneNumber: formState.task2?.step1?.contactPhoneNumber,
		},
		resolver: yupResolver(task2Step1Part2FormSchema),
	});

	const onSubmit: SubmitHandler<Task2Step1Part2FormSchema> = async (data) => {
		await submitStep();
		setFormState({
			...formState,
			task2: {
				...formState.task2,
				step1: { ...formState.task2?.step1, ...data, completed: true },
			},
		});
	};

	return (
		<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
			<Stack gap={1.5}>
				<H2>Additional details</H2>
				<TextInput
					label="Contact phone number"
					hint="Any Australian mobile or landline, for example 0444111222 or 02 9988 7766"
					id="contactPhoneNumber"
					{...register('contactPhoneNumber')}
					invalid={Boolean(errors.contactPhoneNumber?.message)}
					message={errors.contactPhoneNumber?.message}
					required
				/>
			</Stack>
			<FormActions />
		</Stack>
	);
}
