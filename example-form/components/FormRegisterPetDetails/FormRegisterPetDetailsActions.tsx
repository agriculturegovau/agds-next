import { Fragment } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { Modal } from '@ag.ds-next/modal';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { useTernaryState } from '@ag.ds-next/core';
import { FormDivider } from '../FormDivider';
import { useFormRegisterPetDetails } from './FormRegisterPetDetails';

export const FormRegisterPetDetailsActions = () => {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	const {
		currentStep,
		isSubmittingStep,
		saveAndExit,
		isSavingBeforeExiting,
		cancel,
	} = useFormRegisterPetDetails();

	return (
		<Fragment>
			<Stack gap={3}>
				<FormDivider />
				<ButtonGroup>
					<Button type="submit" variant="primary" loading={isSubmittingStep}>
						{currentStep === 4 ? 'Submit form' : 'Continue'}
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
					If you cancel, you will lose all information entered.
				</Text>
			</Modal>
		</Fragment>
	);
};
