import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ComboboxMulti } from '@ag.ds-next/react/combobox';
import { Stack } from '@ag.ds-next/react/stack';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormTask1Container } from './FormTask1Container';
import {
	Task1Step6FormSchema,
	task1Step6FormSchema,
} from './FormTask1FormState';
import { useFormTask1Context } from './FormTask1Provider';

export function FormTask1Step6() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Task1Step6FormSchema>({
		defaultValues: formState.task1?.step6,
		resolver: zodResolver(task1Step6FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
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
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<Controller
					control={control}
					name="cuisine"
					render={({ field: { ref, ...field } }) => (
						<ComboboxMulti
							label="Select food types"
							hint="Start typing to see results. You can add multiple selections."
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
				<StepActions />
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
