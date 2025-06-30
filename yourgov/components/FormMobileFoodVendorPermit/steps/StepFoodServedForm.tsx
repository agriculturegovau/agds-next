import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComboboxMulti } from '@ag.ds-next/react/combobox';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { ShallowErrors } from '../FormState';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import {
	stepFoodServedFormSchema,
	type StepFoodServedFormSchema,
} from './FormState';
import { Form } from './Form';
import { stepKeyToStepDataMap } from './stepsData';

export function StepFoodServedForm() {
	const { formState, stepFoodServedSetState, isSavingBeforeExiting } =
		useGlobalForm();
	const { submitStep } = useFormContext();

	const editingStep = useIsEditingFromReviewStep();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<StepFoodServedFormSchema>({
		defaultValues: formState.steps?.stepFoodServed,
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(stepFoodServedFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<StepFoodServedFormSchema>;

	const onSubmit: SubmitHandler<StepFoodServedFormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		stepFoodServedSetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	return (
		<FormContainer
			formIntroduction="What type of food will you be serving?"
			formTitle={
				stepKeyToStepDataMap.stepFoodServed[
					editingStep?.match ? 'changeLabel' : 'label'
				]
			}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name="foodServed"
					render={({ field: { ref, ...field } }) => (
						<ComboboxMulti
							{...field}
							block={false}
							hint="Start typing to see results. You can add multiple selections."
							id="foodServed"
							inputRef={ref}
							invalid={Boolean(typeCorrectedErrors.foodServed?.message)}
							label="Select food types"
							maxWidth="xl"
							message={typeCorrectedErrors.foodServed?.message}
							options={foodOptions}
							required
						/>
					)}
				/>
			</Form>
		</FormContainer>
	);
}

const foodOptions = [
	{ value: 'asian noodle bowls', label: 'Asian noodle bowls' },
	{ value: 'banh mi sandwiches', label: 'Banh mi sandwiches' },
	{ value: 'bbq ribs', label: 'BBQ ribs' },
	{ value: 'burgers', label: 'Burgers' },
	{ value: 'cake', label: 'Cake' },
	{ value: 'coffee', label: 'Coffee' },
	{ value: 'cookies', label: 'Cookies' },
	{ value: 'falafel pitas', label: 'Falafel pitas' },
	{ value: 'fish and chips', label: 'Fish and chips' },
	{ value: 'fried chicken', label: 'Fried chicken' },
	{ value: 'fries', label: 'Fries' },
	{ value: 'grilled cheese sandwiches', label: 'Grilled cheese sandwiches' },
	{ value: 'ice cream', label: 'Ice cream' },
	{ value: 'mexican', label: 'Mexican' },
	{ value: 'pasta', label: 'Pasta' },
	{ value: 'pulled pork', label: 'Pulled pork' },
	{ value: 'soft drinks', label: 'Soft drinks' },
	{ value: 'veggie wraps', label: 'Veggie wraps' },
];
