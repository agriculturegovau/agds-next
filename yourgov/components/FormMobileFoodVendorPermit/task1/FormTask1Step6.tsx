import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComboboxMulti } from '@ag.ds-next/react/combobox';
import { Stack } from '@ag.ds-next/react/stack';
import { ShallowErrors } from '../FormState';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormTask1Container } from './FormTask1Container';
import { useFormTask1Context } from './FormTask1Provider';
import {
	task1Step6FormSchema,
	type Task1Step6FormSchema,
} from './FormTask1FormState';

export function FormTask1Step6() {
	const { formState, setFormState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Task1Step6FormSchema>({
		defaultValues: formState.task1?.step6,
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(task1Step6FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<Task1Step6FormSchema>;

	const onSubmit: SubmitHandler<Task1Step6FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		setFormState({
			...formState,
			task1: {
				...formState.task1,
				step6: {
					...data,
					completed: !isSavingBeforeExiting,
					started: true,
				},
				started: true,
			},
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
							invalid={Boolean(typeCorrectedErrors.cuisine?.message)}
							message={typeCorrectedErrors.cuisine?.message}
							maxWidth="xl"
							block={false}
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
