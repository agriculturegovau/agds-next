import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@ag.ds-next/react/stack';
import { Combobox } from '@ag.ds-next/react/combobox';
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { FormActions } from '../FormActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormTask1Container } from './FormTask1Container';
import { useFormTask1Context } from './FormTask1Provider';
import {
	task1Step6FormSchema,
	Task1Step6FormSchema,
} from './FormTask1FormState';

export function FormTask1Step6() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Task1Step6FormSchema>({
		defaultValues: formState.task1?.step6,
		resolver: yupResolver(task1Step6FormSchema),
	});

	const onSubmit: SubmitHandler<Task1Step6FormSchema> = async (data) => {
		await submitStep();
		setFormState({
			...formState,
			task1: { ...formState.task1, step6: { ...data, completed: true } },
		});
	};

	return (
		<FormTask1Container
			formTitle="Food served"
			formIntroduction="What type of food will you be serving?"
			formCallToAction={<FormRequiredFieldsMessage />}
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<Controller
					control={control}
					name="cuisine"
					render={({ field: { ref, ...field } }) => (
						<Combobox
							label="Cuisine"
							hint="Start typing to see results"
							inputRef={ref}
							options={cuisineOptions}
							required
							{...field}
							id="cuisine"
							invalid={Boolean(errors.cuisine?.message)}
							message={errors.cuisine?.message}
						/>
					)}
				/>
				<FormActions />
			</Stack>
		</FormTask1Container>
	);
}

const cuisineOptions = [
	{ value: 'american', label: 'American' },
	{ value: 'brazilian', label: 'Brazilian' },
	{ value: 'caribbean', label: 'Caribbean' },
	{ value: 'chinese', label: 'Chinese' },
	{ value: 'ethiopian', label: 'Ethiopian' },
	{ value: 'filipino', label: 'Filipino' },
	{ value: 'french', label: 'French' },
	{ value: 'greek', label: 'Greek' },
	{ value: 'indian', label: 'Indian' },
	{ value: 'italian', label: 'Italian' },
	{ value: 'japanese', label: 'Japanese' },
	{ value: 'korean', label: 'Korean' },
	{ value: 'mediterranean', label: 'Mediterranean' },
	{ value: 'mexican', label: 'Mexican' },
	{ value: 'moroccan', label: 'Moroccan' },
	{ value: 'peruvian', label: 'Peruvian' },
	{ value: 'spanish', label: 'Spanish' },
	{ value: 'thai', label: 'Thai' },
	{ value: 'turkish', label: 'Turkish' },
	{ value: 'vietnamese', label: 'Vietnamese' },
];
