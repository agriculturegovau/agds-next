import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComboboxMulti } from '@ag.ds-next/react/combobox';
import { Stack } from '@ag.ds-next/react/stack';
import { ShallowErrors } from '../FormState';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import { step9FormSchema, type Step9FormSchema } from './FormState';

export function FormStep9() {
	const { formState, step9SetState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormContext();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Step9FormSchema>({
		defaultValues: formState.task?.step9,
		resolver: isSavingBeforeExiting ? undefined : zodResolver(step9FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<Step9FormSchema>;

	const onSubmit: SubmitHandler<Step9FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step9SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	return (
		<FormContainer
			formTitle="Upload documents"
			formIntroduction="Upload all documents listed in the table below."
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
