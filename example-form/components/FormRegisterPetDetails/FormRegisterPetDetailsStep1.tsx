import { useEffect, useRef, useState } from 'react';
import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/box';
import { FormStack } from '@ag.ds-next/form-stack';
import { TextInput } from '@ag.ds-next/text-input';
import { DatePicker } from '@ag.ds-next/date-picker';
import { Select } from '@ag.ds-next/select';
import { ControlGroup, Radio } from '@ag.ds-next/control-input';
import { useScrollToField } from '@ag.ds-next/field';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Prose } from '@ag.ds-next/prose';
import { FormRegisterPetDetailsContainer } from './FormRegisterPetDetailsContainer';
import { FormRegisterPetDetailsActions } from './FormRegisterPetDetailsActions';
import { useFormExampleMultiStep } from './FormRegisterPetDetails';

const formSchema = yup
	.object({
		name: yup.string().required("Enter your pet's name"),
		breed: yup.string().required("Enter your pet's breed"),
		dob: yup.date().required("Enter your pet's date of birth"),
		sex: yup
			.string()
			.typeError("Select your pet's sex")
			.required("Select your pet's sex"),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormRegisterPetDetailsStep1 = () => {
	const { next, stepFormState } = useFormExampleMultiStep();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

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
		setFocusedError(false);
		next(data);
	};

	const onError: SubmitErrorHandler<FormSchema> = () => {
		setFocusedError(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	return (
		<FormRegisterPetDetailsContainer
			title="Pet details"
			introduction="Domestic pets living in urban environments need to be registered."
		>
			<Stack
				as="form"
				gap={3}
				onSubmit={handleSubmit(onSubmit, onError)}
				noValidate
			>
				<FormStack>
					{hasErrors && (
						<PageAlert
							ref={errorRef}
							tone="error"
							title="There is a problem"
							tabIndex={-1}
						>
							<Prose>
								<p>Please correct the following fields and try again</p>
								<ul>
									{Object.entries(errors).map(([key, value]) => (
										<li key={key}>
											<a href={`#${key}`} onClick={scrollToField}>
												{Array.isArray(value)
													? value[0].message
													: value.message}
											</a>
										</li>
									))}
								</ul>
							</Prose>
						</PageAlert>
					)}
					<TextInput
						label="Pet name"
						{...register('name')}
						id="petName"
						invalid={Boolean(errors.name?.message)}
						message={errors.name?.message}
						required
					/>
					<Select
						label="Breed"
						{...register('breed')}
						id="breed"
						invalid={Boolean(errors.breed?.message)}
						message={errors.breed?.message}
						required
						options={[{ label: 'Labradror', value: 'labrador' }]}
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
					<ControlGroup
						id="sex"
						label="Sex"
						invalid={Boolean(errors.sex)}
						message={errors.sex?.message}
						required
						block
					>
						<Radio {...register('sex')} value="male">
							Male
						</Radio>
						<Radio {...register('sex')} value="female">
							Female
						</Radio>
					</ControlGroup>
				</FormStack>
				<FormRegisterPetDetailsActions />
			</Stack>
		</FormRegisterPetDetailsContainer>
	);
};
