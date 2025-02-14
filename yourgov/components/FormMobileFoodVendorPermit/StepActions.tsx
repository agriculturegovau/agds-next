import { Fragment } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Modal } from '@ag.ds-next/react/modal';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { useTernaryState } from '@ag.ds-next/react/core';
import { Divider } from '@ag.ds-next/react/divider';
import { useGlobalForm } from './GlobalFormProvider';
import { useWarnOnUnsavedChanges } from '../../lib/useWarnOnUnsavedChanges';

export function StepActions({
	bypassWarnOnUnsavedChanges,
	editingCancel,
	functionToCallWhenLeaving,
	hasSaveAndExit = true,
	// hasUnsavedChanges,
	// isSaving,
	submitText = 'Save and continue',
	warnOnUnsavedChanges,
}: {
	bypassWarnOnUnsavedChanges?: boolean;
	editingCancel?: () => void;
	functionToCallWhenLeaving?: () => void;
	hasSaveAndExit?: boolean;
	submitText?: string;
	warnOnUnsavedChanges?: boolean;
}) {
	const [isCancelModalOpen, openCancelModal, closeCancelModal] =
		useTernaryState(false);

	const { isSubmittingStep, saveAndExit, isSavingBeforeExiting, cancel } =
		useGlobalForm();

	const warnModal = useWarnOnUnsavedChanges({
		functionToCallWhenLeaving,
		shouldWarn: warnOnUnsavedChanges,
		shouldBypass: bypassWarnOnUnsavedChanges || isCancelModalOpen,
		WarnModal: ({ onCancel, onConfirm, showModal }) => (
			<Modal
				actions={
					<ButtonGroup>
						<Button onClick={onConfirm}>Yes, cancel</Button>

						<Button onClick={onCancel} variant="secondary">
							No, take me back
						</Button>
					</ButtonGroup>
				}
				isOpen={showModal}
				onClose={onCancel}
				title="You have unsaved changes2"
			>
				<Text as="p">
					If you cancel, you will lose all information entered.
				</Text>
			</Modal>
		),
	});

	console.log(`warnModal`, warnModal);

	const handleCancel = () => {
		if (editingCancel) {
			editingCancel();
		}
		cancel();
	};

	return (
		<Fragment>
			<Stack gap={3}>
				<Divider />
				{warnModal}

				<ButtonGroup>
					<Button loading={isSubmittingStep} type="submit" variant="primary">
						{submitText}
					</Button>

					{hasSaveAndExit && (
						<Button
							loading={isSavingBeforeExiting}
							onClick={saveAndExit}
							type="submit"
							variant="secondary"
						>
							Save and exit
						</Button>
					)}

					<Button
						onClick={warnOnUnsavedChanges ? openCancelModal : handleCancel}
						type="button"
						variant="tertiary"
					>
						Cancel
					</Button>
				</ButtonGroup>
			</Stack>

			<Modal
				actions={
					<ButtonGroup>
						<Button onClick={handleCancel}>Yes, cancel</Button>

						<Button onClick={closeCancelModal} variant="secondary">
							No, take me back
						</Button>
					</ButtonGroup>
				}
				isOpen={isCancelModalOpen}
				onClose={closeCancelModal}
				title="Are you sure you want to cancel?"
			>
				<Text as="p">
					If you cancel, you will lose all information entered.
				</Text>
			</Modal>
		</Fragment>
	);
}
