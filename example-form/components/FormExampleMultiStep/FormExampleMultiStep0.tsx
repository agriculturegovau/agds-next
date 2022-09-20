import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { FormStack } from '@ag.ds-next/form-stack';
import { TextInput } from '@ag.ds-next/text-input';
import { DatePicker } from '@ag.ds-next/date-picker';
import { H2 } from '@ag.ds-next/heading';
import { useToggleState } from '@ag.ds-next/core';
import {
	DefinitionDescription,
	DefinitionList,
	DefinitionListItem,
	DefinitionTerm,
} from '../DefinitionList';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';
import { useFormExampleMultiStep } from './FormExampleMultiStep';
import { Prose } from '@ag.ds-next/prose';

const formSchema = yup
	.object({
		firstName: yup.string().required('Enter your first name'),
		lastName: yup.string().required('Enter your first name'),
		email: yup
			.string()
			.email('Enter a valid email')
			.required('Enter your email'),
		dob: yup.date().required('Enter your date of birth'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleMultiStep0 = () => {
	const [isFormVisibile, toggleFormVisibilty] = useToggleState(false, true);
	const { next, stepFormState } = useFormExampleMultiStep();

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		next(data);
	};

	return (
		<FormExampleMultiStepContainer
			title="Personal details"
			introduction="Confirm if these prefilled details from your account are still correct."
		>
			<Stack gap={3} alignItems="flex-start">
				{isFormVisibile ? (
					<Stack gap={1.5}>
						<H2>Update personal details</H2>
						<Stack
							as="form"
							gap={3}
							onSubmit={handleSubmit(onSubmit)}
							noValidate
						>
							<FormStack>
								<TextInput
									label="First name"
									autoComplete="given-name"
									{...register('firstName')}
									id="firstName"
									invalid={Boolean(errors.firstName?.message)}
									message={errors.firstName?.message}
									required
								/>
								<TextInput
									label="Last name"
									autoComplete="family-name"
									{...register('lastName')}
									id="lastName"
									invalid={Boolean(errors.lastName?.message)}
									message={errors.lastName?.message}
									required
								/>
								<TextInput
									label="Email"
									autoComplete="email"
									{...register('email')}
									id="email"
									invalid={Boolean(errors.email?.message)}
									message={errors.email?.message}
									type="email"
									required
								/>
								<Controller
									control={control}
									name="dob"
									render={({
										field: { onChange, onBlur, value, name },
										fieldState: { invalid, error },
									}) => (
										<DatePicker
											label="Date of birth"
											value={value}
											onChange={onChange}
											onBlur={onBlur}
											name={name}
											invalid={invalid}
											message={error?.message}
											maxWidth="xl"
											required
										/>
									)}
								/>
								<FormExampleMultiStepActions />
							</FormStack>
						</Stack>
					</Stack>
				) : (
					<>
						{/** TODO replace with details/summary. */}
						<details>
							<summary>How were my details prefilled?</summary>
							<Prose>
								<p>
									We’re working hard to improve the way we do business with you.
									This includes making applications and registrations easier to
									use.
								</p>
								<p>
									If we already have some of the information you need to tell
									us, we’ll pre-fill it into your applications. This saves you
									entering all your details yourself.
								</p>
								<p>
									It’s important to check the pre-filled information in your
									report before you submit it.
								</p>
								<p>
									<a href="#">See your profile and account details</a>
								</p>
							</Prose>
						</details>
						<Stack gap={1.5} alignItems="flex-start" width="100%">
							<H2>Check personal details</H2>
							<DefinitionList>
								<DefinitionListItem>
									<DefinitionTerm>First name</DefinitionTerm>
									<DefinitionDescription>
										{stepFormState.firstName}
									</DefinitionDescription>
								</DefinitionListItem>
								<DefinitionListItem>
									<DefinitionTerm>Last name</DefinitionTerm>
									<DefinitionDescription>
										{stepFormState.lastName}
									</DefinitionDescription>
								</DefinitionListItem>
								<DefinitionListItem>
									<DefinitionTerm>Email</DefinitionTerm>
									<DefinitionDescription>
										{stepFormState.email}
									</DefinitionDescription>
								</DefinitionListItem>
								<DefinitionListItem>
									<DefinitionTerm>Date of birth</DefinitionTerm>
									<DefinitionDescription>
										{stepFormState.dob}
									</DefinitionDescription>
								</DefinitionListItem>
							</DefinitionList>
							<Button variant="text" onClick={() => toggleFormVisibilty()}>
								Change personal details
							</Button>
						</Stack>
					</>
				)}
			</Stack>
		</FormExampleMultiStepContainer>
	);
};
