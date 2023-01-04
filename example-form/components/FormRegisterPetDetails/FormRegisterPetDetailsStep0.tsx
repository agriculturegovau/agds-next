import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/react/box';
import { ControlGroup, Radio } from '@ag.ds-next/react/control-input';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { FormRegisterPetDetailsContainer } from './FormRegisterPetDetailsContainer';
import { FormRegisterPetDetailsActions } from './FormRegisterPetDetailsActions';
import { useFormRegisterPetDetails } from './FormRegisterPetDetails';

export const formSchema = yup
	.object({
		typeOfPet: yup
			.string()
			.typeError('Select an option')
			.required('Select an option')
			.matches(/(Dog)/, 'You must select "Dog" to proceed'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormRegisterPetDetailsStep0 = () => {
	const { next, stepFormState } = useFormRegisterPetDetails();

	const {
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
		<FormRegisterPetDetailsContainer
			title="Type of pet"
			introduction="Domestic pets living in urban environments need to be registered."
			callToAction={<FormRequiredFieldsMessage />}
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
						<Radio {...register('typeOfPet')} value="Dog">
							Dog
						</Radio>
						<Radio {...register('typeOfPet')} value="Cat">
							Cat
						</Radio>
						<Radio {...register('typeOfPet')} value="Other">
							Other
						</Radio>
					</ControlGroup>
				</FormStack>
				<FormRegisterPetDetailsActions />
			</Stack>
		</FormRegisterPetDetailsContainer>
	);
};
