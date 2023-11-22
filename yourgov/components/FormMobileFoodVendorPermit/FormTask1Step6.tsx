import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/react/stack';
import { Combobox } from '@ag.ds-next/react/combobox';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { FormActions } from './FormActions';
import { FormTask1Container } from './FormTask1Container';
import { useGlobalForm } from './GlobalFormProvider';
import { useFormTask1Context } from './FormTask1Provider';

export const formSchema = yup
	.object({
		cuisine: yup
			.object()
			.shape({ label: yup.string().required(), value: yup.string().required() })
			.typeError('Cuisine is required')
			.default(null),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export function FormTask1Step6() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: formState.task1?.step6,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFormState({
			...formState,
			task1: { ...formState.task1, step6: { ...data, completed: true } },
		});
		submitStep();
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
							label="Cuisines"
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
