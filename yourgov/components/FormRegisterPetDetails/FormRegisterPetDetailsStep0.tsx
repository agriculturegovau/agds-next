import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/react/stack';
import { Radio } from '@ag.ds-next/react/radio';
import { ControlGroup } from '@ag.ds-next/react/control-group';
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
			.matches(/(Dog)/, 'You must select “Dog” to proceed'),
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
			callToAction={<FormRequiredFieldsMessage />}
			introduction="Domestic pets living in urban environments need to be registered."
			title="Type of pet"
		>
			<Stack as="form" gap={3} noValidate onSubmit={handleSubmit(onSubmit)}>
				<FormStack>
					<ControlGroup
						block
						id="checkbox"
						invalid={Boolean(errors.typeOfPet)}
						label="What type of animal are you registering?"
						message={errors.typeOfPet?.message}
						required
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
