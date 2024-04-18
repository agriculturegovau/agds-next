import { Fragment } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Modal } from '@ag.ds-next/react/modal';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { useTernaryState } from '@ag.ds-next/react/core';
import { Divider } from '@ag.ds-next/react/divider';
import { useGlobalForm } from './GlobalFormProvider';

// add onClick handler that can be used to call `submitStep` function
export function StepActions() {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	const { isSubmittingStep, saveAndExit, isSavingBeforeExiting, cancel } =
		useGlobalForm();

	return (
		<Fragment>
			<Stack gap={3}>
				<Divider />
				<ButtonGroup>
					<Button type="submit" variant="primary" loading={isSubmittingStep}>
						Save and continue
					</Button>
					<Button
						type="submit"
						variant="secondary"
						loading={isSavingBeforeExiting}
						onClick={saveAndExit}
					>
						Save and exit
					</Button>
					<Button type="button" variant="tertiary" onClick={openModal}>
						Cancel
					</Button>
				</ButtonGroup>
			</Stack>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				title="Are you sure you want to cancel?"
				actions={
					<ButtonGroup>
						<Button onClick={cancel}>Yes, cancel</Button>
						<Button variant="secondary" onClick={closeModal}>
							No, take me back
						</Button>
					</ButtonGroup>
				}
			>
				<Text as="p">
					If you cancel, you will lose all information entered.
				</Text>
			</Modal>
		</Fragment>
	);
}
