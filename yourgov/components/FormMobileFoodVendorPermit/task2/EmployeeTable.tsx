import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { PlusIcon } from '@ag.ds-next/react/icon';
import { Stack } from '@ag.ds-next/react/stack';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Task2Step1EmployeeSchema } from './FormTask2FormState';

interface EmployeeTableProps {
	employeeList:
		| Array<Partial<Task2Step1EmployeeSchema> | undefined>
		| undefined;
	readOnly?: boolean;
	step1AddEmployeePath?: string;
	onRemoveEmployee?: (employee: Task2Step1EmployeeSchema) => void;
}

export function getFullEmployeeName(
	employee: Partial<Task2Step1EmployeeSchema> | undefined
) {
	return `${employee?.firstName} ${employee?.lastName}`;
}

export function EmployeeTable({
	readOnly,
	employeeList,
	step1AddEmployeePath,
	onRemoveEmployee,
}: EmployeeTableProps) {
	return (
		<TableWrapper>
			<Stack gap={1.5} alignItems="flex-start" width="100%">
				<Table>
					<TableHead>
						<TableRow>
							<TableHeader scope="col">Employee name</TableHeader>
							<TableHeader scope="col">Email address</TableHeader>
							{!readOnly && <TableHeader scope="col">Action</TableHeader>}
						</TableRow>
					</TableHead>
					<TableBody>
						{employeeList?.map((employee) => {
							const fullName = getFullEmployeeName(employee);
							return (
								<TableRow key={employee?.email}>
									<TableCell>
										{readOnly && fullName}
										{!readOnly && (
											<TextLink
												href={
													step1AddEmployeePath +
													'&employeeId=' +
													employee?.email
												}
											>
												{fullName}
											</TextLink>
										)}
									</TableCell>
									<TableCell>{employee?.email}</TableCell>
									{!readOnly && (
										<TableCell>
											<Button
												onClick={() => onRemoveEmployee?.(employee)}
												variant="text"
											>
												Remove
											</Button>
										</TableCell>
									)}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
				{!readOnly && (
					<ButtonLink
						href={step1AddEmployeePath}
						variant="secondary"
						size="sm"
						iconBefore={PlusIcon}
					>
						Add employee
					</ButtonLink>
				)}
			</Stack>
		</TableWrapper>
	);
}
