import { Button, ButtonGroup } from '@ag.ds-next/button';
import { useTernaryState } from '@ag.ds-next/core';
import { Modal } from '@ag.ds-next/modal';
import { useFormExampleMultiStep } from './FormExampleMultiStep';
import { Text } from '@ag.ds-next/text';
import { FormStack } from '@ag.ds-next/form-stack';
import { Fragment } from 'react';
import { FormDivider } from '../FormDivider';

export const FormExampleMultiStepActions = () => {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	const { isSubmittingStep, saveAndExit, isSavingBeforeExiting, cancel } =
		useFormExampleMultiStep();

	return (
		<Fragment>
			<FormStack>
				<FormDivider />
				<ButtonGroup>
					<Button type="submit" variant="primary" loading={isSubmittingStep}>
						Continue
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
			</FormStack>
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
