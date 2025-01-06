import { Fragment } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Modal } from '@ag.ds-next/react/modal';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { useTernaryState } from '@ag.ds-next/react/core';
import { Divider } from '@ag.ds-next/react/divider';
import { useFormExampleMultiStep } from './FormExampleMultiStep';

export const FormExampleMultiStepActions = () => {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	const {
		currentStep,
		isSubmittingStep,
		saveAndExit,
		isSavingBeforeExiting,
		cancel,
	} = useFormExampleMultiStep();

	return (
		<Fragment>
			<Stack gap={3}>
				<Divider />
				<ButtonGroup>
					<Button loading={isSubmittingStep} type="submit" variant="primary">
						{currentStep === 4 ? 'Submit form' : 'Save and continue'}
					</Button>
					<Button
						loading={isSavingBeforeExiting}
						onClick={saveAndExit}
						type="button"
						variant="secondary"
					>
						Save and exit
					</Button>
					<Button onClick={openModal} type="button" variant="tertiary">
						Cancel
					</Button>
				</ButtonGroup>
			</Stack>
			<Modal
				actions={
					<ButtonGroup>
						<Button onClick={cancel}>Yes, cancel</Button>
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
					This is the Modal Body paragraph, it provides detailed instruction and
					context for the the modal action. It can also span lines but long form
					content should be avoided.
				</Text>
			</Modal>
		</Fragment>
	);
};
