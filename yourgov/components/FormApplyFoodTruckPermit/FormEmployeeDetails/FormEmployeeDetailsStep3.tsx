import { FormEvent } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Button } from '@ag.ds-next/react/button';
import {
	FormDefinitionList,
	FormDefinitionListItem,
} from '../../FormDefinitionList';
import { FormApplyFoodTruckActions } from '../FormApplyFoodTruckActions';
import { useFormEmployeeDetails } from './FormEmployeeDetails';
import { FormEmployeeDetailsContainer } from './FormEmployeeDetailsContainer';
import { formatEmployeeName } from './types';

export const FormEmployeeDetailsStep6 = () => {
	const { formState, goToStep, next } = useFormEmployeeDetails();

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		next();
	};

	return (
		<FormEmployeeDetailsContainer
			title="Confirm and submit"
			introduction="Check and confirm all details on this page."
		>
			{/** Employees */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>Employees</H2>
				<FormDefinitionList>
					{formState[0]?.employees?.map((employee, idx) => (
						<FormDefinitionListItem
							key={idx}
							label={formatEmployeeName(employee)}
							value={employee.email}
						/>
					))}
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(0)}>
					Change employees
				</Button>
			</Stack>

			{/** Employee roles */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>Employee roles</H2>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Driver"
						value={formState[1]?.driver?.join(', ')}
					/>
					<FormDefinitionListItem
						label="Crowd control"
						value={formState[1]?.crowdControl?.join(', ')}
					/>
					<FormDefinitionListItem
						label="Operations manager"
						value={formState[1]?.operationsManager?.join(', ')}
					/>
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(1)}>
					Change employee roles
				</Button>
			</Stack>

			{/** Food safety supervisor */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>Food safety supervisor</H2>
				<FormDefinitionList>
					<FormDefinitionListItem
						label="Who is the appointed food safety supervisor for this business?"
						value={formState[2]?.foodSafetySupervisor?.join(', ')}
					/>
				</FormDefinitionList>
				<Button variant="text" onClick={() => goToStep(2)}>
					Change food safety supervisor
				</Button>
			</Stack>

			<form onSubmit={onSubmit}>
				<FormApplyFoodTruckActions />
			</form>
		</FormEmployeeDetailsContainer>
	);
};
