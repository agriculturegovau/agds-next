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
	taskStep7FormSchema,
	type TaskStep7FormSchema,
} from './FormTaskFormState';

export function FormTaskStep7() {
	const { formState, step7SetState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormTaskContext();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<TaskStep7FormSchema>({
		defaultValues: formState.task?.step7,
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(taskStep7FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<TaskStep7FormSchema>;

	const onSubmit: SubmitHandler<TaskStep7FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step7SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	return (
		<FormTaskContainer
			formTitle="Employees"
			formIntroduction="Add details of any employees who will be handling food."
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<Controller
					control={control}
					name="cuisine"
					render={({ field: { ref, ...field } }) => (
						<ComboboxMulti
							label="TODO"
							hint="TODO"
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

const cuisineOptions = [{ value: 'american', label: 'American' }];
