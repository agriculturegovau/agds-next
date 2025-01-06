import { useState } from 'react';
import { ButtonGroup, Button } from '../../../packages/react/src/button';
import { Select } from '../../../packages/react/src/select';
import { TextInput } from '../../../packages/react/src/text-input';
import { FormStack } from '../../../packages/react/src/form-stack';
import { Drawer } from '../../../packages/react/src/drawer';
import { DatePicker } from '../../../packages/react/src/date-picker';

export type ModalAddTrackingNumberProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onClose: () => void;
};

export function ModalAddTrackingNumber({
	isOpen,
	onConfirm,
	onClose,
}: ModalAddTrackingNumberProps) {
	const [date, setDate] = useState<Date | string>();
	const [submitting, setSubmitting] = useState(false);

	function onSubmit() {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			onConfirm();
		}, 2000);
	}

	return (
		<Drawer
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Add tracking number
					</Button>
					<Button onClick={onClose} variant="secondary">
						Cancel
					</Button>
				</ButtonGroup>
			}
			isOpen={isOpen}
			onClose={onClose}
			title="Add tracking number"
		>
			<FormStack>
				<Select
					block
					label="How was it sent?"
					options={[
						{ value: 'aus-post', label: 'Express post' },
						{ value: 'fed-ex', label: 'Regular post' },
					]}
					placeholder="Select option"
					required
				/>
				<TextInput block label="Tracking number" required />
				<DatePicker
					block
					label="Date sent"
					onChange={setDate}
					required
					value={date}
				/>
			</FormStack>
		</Drawer>
	);
}
