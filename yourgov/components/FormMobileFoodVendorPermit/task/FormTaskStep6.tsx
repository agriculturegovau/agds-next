import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComboboxMulti } from '@ag.ds-next/react/combobox';
import { Stack } from '@ag.ds-next/react/stack';
import { ShallowErrors } from '../FormState';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormTaskContainer } from './FormTaskContainer';
import { useFormTaskContext } from './FormTaskProvider';
import {
	taskStep6FormSchema,
	type TaskStep6FormSchema,
} from './FormTaskFormState';

export function FormTaskStep6() {
	const { formState, setFormState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormTaskContext();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<TaskStep6FormSchema>({
		defaultValues: formState.task?.step6,
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(taskStep6FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<TaskStep6FormSchema>;

	const onSubmit: SubmitHandler<TaskStep6FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		setFormState({
			...formState,
			task: {
				...formState.task,
				step6: {
					...data,
					completed: !isSavingBeforeExiting,
					started: true,
				},
			},
		});
	};

	return (
		<FormTaskContainer
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
		</FormTaskContainer>
	);
}

const cuisineOptions = [
	{ value: 'american', label: 'American' },
	{ value: 'brazilian', label: 'Brazilian' },
	{ value: 'caribbean', label: 'Caribbean' },
	{ value: 'chinese', label: 'Chinese' },
	{ value: 'dessert', label: 'Dessert' },
	{ value: 'ethiopian', label: 'Ethiopian' },
	{ value: 'filipino', label: 'Filipino' },
	{ value: 'french', label: 'French' },
	{ value: 'gelato', label: 'Gelato' },
	{ value: 'greek', label: 'Greek' },
	{ value: 'ice cream', label: 'Ice cream' },
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
