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
			isOpen={isOpen}
			onClose={onClose}
			title="Add tracking number"
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Add tracking number
					</Button>
					<Button variant="secondary" onClick={onClose}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			<FormStack>
				<Select
					label="How was it sent?"
					placeholder="Select option"
					required
					options={[
						{ value: 'aus-post', label: 'Express post' },
						{ value: 'fed-ex', label: 'Regular post' },
					]}
					block
				/>
				<TextInput label="Tracking number" required block />
				<DatePicker
					label="Date sent"
					value={date}
					onChange={setDate}
					required
					block
				/>
			</FormStack>
		</Drawer>
	);
}
