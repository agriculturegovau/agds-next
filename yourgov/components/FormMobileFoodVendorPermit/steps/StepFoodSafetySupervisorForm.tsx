import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Radio } from '@ag.ds-next/react/radio';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import {
	stepFoodSafetySupervisorFormSchema,
	type StepFoodSafetySupervisorFormSchema,
} from './FormState';
import { Form } from './Form';
import { stepKeyToStepDataMap } from './stepsData';

export function StepFoodSafetySupervisorForm() {
	const {
		formState,
		stepOwnerDetailsGetState,
		stepEmployeesGetState,
		stepFoodSafetySupervisorSetState,
		isSavingBeforeExiting,
	} = useGlobalForm();
	const { submitStep } = useFormContext();

	const editingStep = useIsEditingFromReviewStep();

	const employees = [
		`${stepOwnerDetailsGetState()?.firstName} ${stepOwnerDetailsGetState()
			?.lastName} (Business owner)`,
		...(stepEmployeesGetState()?.employee?.map(
			(employee) => `${employee?.firstName} ${employee?.lastName}`
		) || []),
	];

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StepFoodSafetySupervisorFormSchema>({
		defaultValues: formState.steps?.stepFoodSafetySupervisor,
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(stepFoodSafetySupervisorFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<StepFoodSafetySupervisorFormSchema> = async (
		data
	) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		stepFoodSafetySupervisorSetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	return (
		<FormContainer
			formIntroduction="Add your employee food safety supervisor."
			formTitle={
				stepKeyToStepDataMap.stepFoodSafetySupervisor[
					editingStep?.match ? 'changeLabel' : 'label'
				]
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
