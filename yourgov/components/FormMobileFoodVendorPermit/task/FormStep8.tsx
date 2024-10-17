import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComboboxMulti } from '@ag.ds-next/react/combobox';
import { Stack } from '@ag.ds-next/react/stack';
import { ShallowErrors } from '../FormState';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import { step8FormSchema, type Step8FormSchema } from './FormState';

export function FormStep8() {
	const { formState, step8SetState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormContext();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Step8FormSchema>({
		defaultValues: formState.task?.step8,
		resolver: isSavingBeforeExiting ? undefined : zodResolver(step8FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<Step8FormSchema>;

	const onSubmit: SubmitHandler<Step8FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step8SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	return (
		<FormContainer
			formTitle="Food safety supervisor"
			formIntroduction="Add your employee food safety supervisor."
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
		</FormContainer>
	);
}

const cuisineOptions = [{ value: 'american', label: 'American' }];
