import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Radio } from '@ag.ds-next/react/radio';
import { useGlobalForm } from '../GlobalFormProvider';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { FormContainer } from './FormContainer';
import { formSteps, useFormContext } from './FormProvider';
import { step8FormSchema, type Step8FormSchema } from './FormState';
import { Form } from './Form';

export function FormStep8() {
	const isEditingFromReviewStep = useIsEditingFromReviewStep();

	const {
		formState,
		step1GetState,
		step7GetState,
		step8SetState,
		isSavingBeforeExiting,
	} = useGlobalForm();
	const { submitStep } = useFormContext();

	const employees = [
		`${step1GetState()?.firstName} ${step1GetState()
			?.lastName} (Business owner)`,
		...(step7GetState()?.employee?.map(
			(employee) => `${employee?.firstName} ${employee?.lastName}`
		) || []),
	];

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Step8FormSchema>({
		defaultValues: formState.steps?.step8,
		resolver: isSavingBeforeExiting ? undefined : zodResolver(step8FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

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
			formIntroduction="Add your employee food safety supervisor."
			formTitle={
				isEditingFromReviewStep
					? formSteps[7].labelWhenChanging
					: formSteps[7].label
			}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<ControlGroup
					block
					invalid={Boolean(errors.supervisor)}
					label="Who is the appointed food safety supervisor for this business?"
					message={errors.supervisor?.message}
					required
				>
					{employees.map((employee) => (
						<Radio {...register('supervisor')} key={employee} value={employee}>
							{employee}
						</Radio>
					))}
				</ControlGroup>
			</Form>
		</FormContainer>
	);
}
