import { useState } from 'react';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { Select } from '@ag.ds-next/react/select';
import { TextInput } from '@ag.ds-next/react/text-input';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { FilterDrawer } from '@ag.ds-next/react/filter-drawer';
import { DatePicker } from '@ag.ds-next/react/date-picker';

export type ModalAddTrackingNumberProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onDismiss: () => void;
};

export function ModalAddTrackingNumber({
	isOpen,
	onConfirm,
	onDismiss,
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
		<FilterDrawer
			isOpen={isOpen}
			onDismiss={onDismiss}
			title="Add tracking number"
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Add tracking number
					</Button>
					<Button variant="secondary" onClick={onDismiss}>
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
		</FilterDrawer>
	);
}
