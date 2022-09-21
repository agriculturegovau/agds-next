import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Stack } from '@ag.ds-next/box';
import { TextInput } from '@ag.ds-next/text-input';
import { mapSpacing } from '@ag.ds-next/core';
import { ControlGroup, Radio } from '@ag.ds-next/control-input';
import { FormStack } from '@ag.ds-next/form-stack';
import { useScrollToField } from '@ag.ds-next/field';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Prose } from '@ag.ds-next/prose';
import { FormRegisterPetDetailsContainer } from './FormRegisterPetDetailsContainer';
import { FormRegisterPetDetailsActions } from './FormRegisterPetDetailsActions';
import { useFormExampleMultiStep } from './FormRegisterPetDetails';

const formSchema = yup
	.object({
		typeOfPet: yup.string().required('Enter your first name'),
		otherDetails: yup.string().when('typeOfPet', (value, schema) => {
			if (value === 'other') {
				return schema.required('Enter details');
			}
			return schema;
		}),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormRegisterPetDetailsStep0 = () => {
	const { next, stepFormState } = useFormExampleMultiStep();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		watch,
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

	const showConditionalField = watch('typeOfPet') === 'other';

	return (
		<FormRegisterPetDetailsContainer
			title="Type of pet"
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
					<ControlGroup
						id="checkbox"
						label="What type of animal are you registering?"
						invalid={Boolean(errors.typeOfPet)}
						message={errors.typeOfPet?.message}
						required
						block
					>
						<Radio {...register('typeOfPet')} value="dog">
							Dog
						</Radio>
						<Radio {...register('typeOfPet')} value="cat">
							Cat
						</Radio>
						<Radio {...register('typeOfPet')} value="other">
							Other
						</Radio>
						{showConditionalField ? (
							<Box
								borderLeft
								borderLeftWidth="xl"
								paddingLeft={1.5}
								css={{ marginLeft: mapSpacing(1) }}
							>
								<TextInput
									id="otherDetails"
									label="Provide details"
									{...register('otherDetails')}
									invalid={Boolean(errors.otherDetails?.message)}
									message={errors.otherDetails?.message}
									required
								/>
							</Box>
						) : null}
					</ControlGroup>
				</FormStack>
				<FormRegisterPetDetailsActions />
			</Stack>
		</FormRegisterPetDetailsContainer>
	);
};
