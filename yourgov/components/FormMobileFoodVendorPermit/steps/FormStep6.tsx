import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComboboxMulti } from '@ag.ds-next/react/combobox';
import { Stack } from '@ag.ds-next/react/stack';
import { ShallowErrors } from '../FormState';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import { step6FormSchema, type Step6FormSchema } from './FormState';

export function FormStep6() {
	const { formState, step6SetState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormContext();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Step6FormSchema>({
		defaultValues: formState.steps?.step6,
		resolver: isSavingBeforeExiting ? undefined : zodResolver(step6FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<Step6FormSchema>;

	const onSubmit: SubmitHandler<Step6FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step6SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	return (
		<FormContainer
			formTitle="Food served"
			formIntroduction="What type of food will you be serving?"
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<Controller
					control={control}
					name="foodServed"
					render={({ field: { ref, ...field } }) => (
						<ComboboxMulti
							label="Select food types"
							hint="Start typing to see results. You can add multiple selections."
							inputRef={ref}
							options={foodOptions}
							required
							{...field}
							id="foodServed"
							invalid={Boolean(typeCorrectedErrors.foodServed?.message)}
							message={typeCorrectedErrors.foodServed?.message}
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

const foodOptions = [
	{ value: 'asian noodle bowls', label: 'Asian Noodle Bowls' },
	{ value: 'bbq ribs', label: 'BBQ Ribs' },
	{ value: 'banh mi sandwiches', label: 'Banh Mi Sandwiches' },
	{ value: 'burgers', label: 'Burgers' },
	{ value: 'cake', label: 'Cake' },
	{ value: 'coffee', label: 'Coffee' },
	{ value: 'cookies', label: 'Cookies' },
	{ value: 'falafel pitas', label: 'Falafel Pitas' },
	{ value: 'fish and chips', label: 'Fish and Chips' },
	{ value: 'fried chicken', label: 'Fried Chicken' },
	{ value: 'fries', label: 'Fries' },
	{ value: 'grilled cheese sandwiches', label: 'Grilled Cheese Sandwiches' },
	{ value: 'ice cream', label: 'Ice Cream' },
	{ value: 'mexican', label: 'Mexican' },
	{ value: 'pasta', label: 'Pasta' },
	{ value: 'pulled pork', label: 'Pulled Pork' },
	{ value: 'veggie wraps', label: 'Veggie Wraps' },
];
