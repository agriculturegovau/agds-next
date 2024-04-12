import { ButtonLink } from '@ag.ds-next/react/button';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import {
	FormDefinitionList,
	FormDefinitionListItem,
} from '../../FormDefinitionList';
import { useGlobalForm } from '../GlobalFormProvider';
import { EmployeeTable, getFullEmployeeName } from './EmployeeTable';
import { task2FormSteps } from './FormTask2Provider';
import { Task2Step1EmployeeSchema } from './FormTask2FormState';

type FormTask2ReviewProps = {
	headingsLevel: 'h2' | 'h3';
};

const HEADINGS_MAP = {
	h2: H2,
	h3: H3,
} as const;

export function FormTask2Review({ headingsLevel }: FormTask2ReviewProps) {
	const { formState } = useGlobalForm();
	const HeadingComponent = HEADINGS_MAP[headingsLevel];
	const foodSafetySupervisor = JSON.parse(
		formState.task2?.step2?.foodSafetySupervisor || '{}'
	) as Partial<Task2Step1EmployeeSchema>;

	return (
		<Stack gap={3}>
			{/** Owner details */}
			<Stack gap={1.5}>
				<HeadingComponent>{task2FormSteps[0].label}</HeadingComponent>
				<EmployeeTable
					employeeList={formState.task2?.step1?.employeeList}
					readOnly
				/>
				<div>
					<ButtonLink variant="text" href={task2FormSteps[0].href}>
						Change employees
					</ButtonLink>
				</div>
			</Stack>
			{/** Business details */}
			<Stack gap={1.5} alignItems="flex-start">
				<HeadingComponent>{task2FormSteps[1].label}</HeadingComponent>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Food Safety Supervisor"
						value={getFullEmployeeName(foodSafetySupervisor)}
					/>
				</FormDefinitionList>
				<ButtonLink variant="text" href={task2FormSteps[1].href}>
					Change Food Safety Supervisor
				</ButtonLink>
			</Stack>
		</Stack>
	);
}
