import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Modal } from '@ag.ds-next/react/modal';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { useTernaryState } from '@ag.ds-next/react/core';
import { Divider } from '@ag.ds-next/react/divider';
import { useGlobalForm } from './GlobalFormProvider';
import { useWarnOnUnsavedChanges } from '../../lib/useWarnOnUnsavedChanges';

export function SubStepActions({
	bypassWarnOnUnsavedChanges,
	cancelHref,
	submitText = 'Save changes',
	warnOnUnsavedChanges,
}: {
	bypassWarnOnUnsavedChanges?: boolean;
	cancelHref: string;
	isSaving?: boolean;
	submitText?: string;
	warnOnUnsavedChanges?: boolean;
}) {
	const [isCancelModalOpen, openCancelModal, closeCancelModal] =
		useTernaryState(false);
	const router = useRouter();

	const { isSubmittingStep } = useGlobalForm();

	const warnModal = useWarnOnUnsavedChanges({
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
				title="You have unsaved changes3"
			>
				<Text as="p">
					If you cancel, you will lose all information entered.
				</Text>
			</Modal>
		),
	});

	const handleCancel = () => {
		router.push(cancelHref);
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
