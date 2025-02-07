import { Fragment } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Modal } from '@ag.ds-next/react/modal';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { useTernaryState } from '@ag.ds-next/react/core';
import { Divider } from '@ag.ds-next/react/divider';
import { useGlobalForm } from './GlobalFormProvider';

export function StepActions({
	editingCancel,
	hasSaveAndExit = true,
	submitText = 'Save and continue',
}: {
	editingCancel?: () => void;
	hasSaveAndExit?: boolean;
	submitText?: string;
}) {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	const { isSubmittingStep, saveAndExit, isSavingBeforeExiting, cancel } =
		useGlobalForm();

	const onCancel = () => {
		if (editingCancel) {
			editingCancel();
		}
		cancel();
	};

	return (
		<Fragment>
			<Stack gap={3}>
				<Divider />

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

					<Button onClick={openModal} type="button" variant="tertiary">
						Cancel
					</Button>
				</ButtonGroup>
			</Stack>

			<Modal
				actions={
					<ButtonGroup>
						<Button onClick={onCancel}>Yes, cancel</Button>

						<Button onClick={closeModal} variant="secondary">
							No, take me back
						</Button>
					</ButtonGroup>
				}
				isOpen={isModalOpen}
				onClose={closeModal}
				title="Are you sure you want to cancel?"
			>
				<Text as="p">
					If you cancel, you will lose all information entered.
				</Text>
			</Modal>
		</Fragment>
	);
}
