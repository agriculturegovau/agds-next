import { Fragment } from 'react';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Modal } from '@ag.ds-next/react/modal';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { useTernaryState } from '@ag.ds-next/react/core';
import { Divider } from '@ag.ds-next/react/divider';
import { useGlobalForm } from './GlobalFormProvider';
// import { useFormRegisterPetDetails } from './FormRegisterPetDetails';

export function FormActions() {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	const {
		// currentStep,
		isSubmittingStep,
		// saveAndExit,
		// isSavingBeforeExiting,
		// cancel,
	} = useGlobalForm();

	return (
		<Fragment>
			<Stack gap={3}>
				<Divider />
				<ButtonGroup>
					<Button type="submit" variant="primary" loading={isSubmittingStep}>
						Save and continue
						{/* {currentStep === 4 ? 'Submit task' : 'Save and continue'} */}
					</Button>
					<Button
						type="button"
						variant="secondary"
						// loading={isSavingBeforeExiting}
						// onClick={saveAndExit}
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
						<Button
						// onClick={cancel}
						>
							Yes, cancel
						</Button>
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
