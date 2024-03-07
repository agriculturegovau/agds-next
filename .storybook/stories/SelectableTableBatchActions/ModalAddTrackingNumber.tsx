import { useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { Select } from '@ag.ds-next/react/select';
import { TextInput } from '@ag.ds-next/react/text-input';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Drawer } from '@ag.ds-next/react/drawer';
import { DatePicker } from '@ag.ds-next/react/date-picker';

export type ModalAddTrackingNumberProps = {
	isOpen: boolean;
	onConfirm: () => void;
	/** @deprecated use `onClose` instead */
	onDismiss?: () => void;
	onClose?: () => void;
};

export function ModalAddTrackingNumber({
	isOpen,
	onConfirm,
	onDismiss,
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
			onDismiss={onDismiss}
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
