import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Stack } from '@ag.ds-next/box';
import { TextInput } from '@ag.ds-next/text-input';
import { mapSpacing } from '@ag.ds-next/core';
import { ControlGroup, Radio } from '@ag.ds-next/control-input';
import { FormStack } from '@ag.ds-next/form-stack';
import { FormRegisterPetDetailsContainer } from './FormRegisterPetDetailsContainer';
import { FormRegisterPetDetailsActions } from './FormRegisterPetDetailsActions';
import { useFormExampleMultiStep } from './FormRegisterPetDetails';

const formSchema = yup
	.object({
		typeOfPet: yup
			.string()
			.typeError('Select an option')
			.required('Select an option'),
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
		next(data);
	};

	const showConditionalField = watch('typeOfPet') === 'other';

	return (
		<FormRegisterPetDetailsContainer
			title="Type of pet"
			introduction="Domestic pets living in urban environments need to be registered."
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<FormStack>
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
