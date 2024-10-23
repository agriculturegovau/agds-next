import { useCallback, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/src/button';
import { Drawer } from '@ag.ds-next/react/src/drawer';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Radio } from '@ag.ds-next/react/radio';
import { StaffMemberRole } from './lib/types';

export type ModalConfirmChangeRoleProps = {
	currentRole: StaffMemberRole;
	isOpen: boolean;
	onConfirm: () => void;
	onClose: () => void;
};

export const ModalConfirmChangeRole = ({
	currentRole,
	isOpen,
	onConfirm,
	onClose,
}: ModalConfirmChangeRoleProps) => {
	const [submitting, setSubmitting] = useState(false);
	const [value, setValue] = useState<StaffMemberRole>(currentRole);

	const handlerForKey = useCallback(
		(key: StaffMemberRole) => () => setValue(key),
		[]
	);
	const isChecked = (key: StaffMemberRole) => key === value;

	function onSubmit() {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			onConfirm();
		}, 2000);
	}

	return (
		<Drawer
			isOpen={isOpen}
			onClose={onClose}
			title="Change role"
			actions={
				<ButtonGroup>
					<Button
						form="change-role-drawer"
						loading={submitting}
						onClick={onSubmit}
					>
						Change role
					</Button>
					<Button variant="secondary" onClick={onClose}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			<form id="change-role-drawer">
				<ControlGroup
					block
					label="Export service role"
					hint="Select a role to view what a person can do if assigned that role."
					required
				>
					<Radio
						checked={isChecked('Manager')}
						onChange={handlerForKey('Manager')}
					>
						Manager
						{currentRole === 'Manager' && ' (current role)'}
					</Radio>

					<Radio
						checked={isChecked('Employee')}
						onChange={handlerForKey('Employee')}
					>
						Employee
						{currentRole === 'Employee' && ' (current role)'}
					</Radio>

					<Radio
						checked={isChecked('Trainee')}
						onChange={handlerForKey('Trainee')}
					>
						Trainee
						{currentRole === 'Trainee' && ' (current role)'}
					</Radio>
				</ControlGroup>
			</form>
		</Drawer>
	);
};
