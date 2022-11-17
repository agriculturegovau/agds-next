import { Fragment } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { Modal } from '@ag.ds-next/modal';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { useTernaryState } from '@ag.ds-next/core';
import { FormDivider } from '../FormDivider';
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
				<FormDivider />
				<ButtonGroup>
					<Button type="submit" variant="primary" loading={isSubmittingStep}>
						{currentStep === 4 ? 'Submit form' : 'Save and continue'}
					</Button>
					<Button
						type="button"
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
				onDismiss={closeModal}
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
					This is the Modal Body paragraph, it provides detailed instruction and
					context for the the modal action. It can also span lines but long form
					content should be avoided.
				</Text>
			</Modal>
		</Fragment>
	);
};
