import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Drawer } from '@ag.ds-next/react/drawer';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { Employee, formatEmployeeName } from './types';

const sideDrawerFormSchema = yup.object({
	employee: yup
		.array()
		.of(yup.string().required())
		.typeError('Select at least 1 employee'),
});

type SideDrawerFormSchema = yup.InferType<typeof sideDrawerFormSchema>;

export type FormEmployeeDetailsStep1DrawerProps = {
	employees: Employee[];
	isOpen: boolean;
	closeDrawer: () => void;
	onSubmit: (data: SideDrawerFormSchema) => void;
};

export function FormEmployeeDetailsStep1Drawer({
	employees,
	isOpen,
	closeDrawer,
	onSubmit: onSubmitProp,
}: FormEmployeeDetailsStep1DrawerProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SideDrawerFormSchema>({
		defaultValues: {},
		resolver: yupResolver(sideDrawerFormSchema),
	});

	const onSubmit: SubmitHandler<SideDrawerFormSchema> = (data) => {
		onSubmitProp(data);
		reset();
	};

	return (
		<Drawer
			isOpen={isOpen}
			onDismiss={closeDrawer}
			title="Drawer title"
			actions={
				<ButtonGroup>
					<Button type="submit" onClick={handleSubmit(onSubmit, console.log)}>
						Save roles
					</Button>
					<Button variant="secondary" onClick={closeDrawer}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<ControlGroup
					id="checkbox"
					label="Who is the appointed Food Safety Supervisor for this business?"
					hint="You may choose more than one"
					invalid={Boolean(errors.employee)}
					message={errors.employee?.message}
					required
					block
				>
					{employees?.map((employee, idx) => (
						<Checkbox
							key={idx}
							{...register('employee')}
							value={formatEmployeeName(employee)}
						>
							{formatEmployeeName(employee)}
						</Checkbox>
					))}
				</ControlGroup>
			</form>
		</Drawer>
	);
}
