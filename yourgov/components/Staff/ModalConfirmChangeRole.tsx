import { useCallback, useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/src/button';
import { Drawer } from '@ag.ds-next/react/src/drawer';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Radio } from '@ag.ds-next/react/radio';
import { StaffMemberRole } from './lib/types';

export type ModalConfirmChangeRoleProps = {
	currentRole?: StaffMemberRole;
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
};

export const ModalConfirmChangeRole = ({
	currentRole,
	isOpen,
	onClose,
	onConfirm,
}: ModalConfirmChangeRoleProps) => {
	const [submitting, setSubmitting] = useState(false);
	const [role, setRole] = useState<StaffMemberRole | undefined>(currentRole);

	const handlerForKey = useCallback(
		(key: StaffMemberRole) => () => setRole(key),
		[]
	);
	const isChecked = (key: StaffMemberRole) => key === role;

	function onSubmit() {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			onConfirm();
		}, 1500);
	}

	return (
		<Drawer
			actions={
				<ButtonGroup>
					<Button
						form="change-role-drawer"
						loading={submitting}
						onClick={onSubmit}
					>
						Change role
					</Button>
					<Button onClick={onClose} variant="secondary">
						Cancel
					</Button>
				</ButtonGroup>
			}
			isOpen={isOpen}
			onClose={onClose}
			title="Change role"
		>
			<form id="change-role-drawer">
				<ControlGroup block label="Export service role" required>
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
