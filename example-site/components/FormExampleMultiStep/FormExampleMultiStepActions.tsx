import { Fragment } from 'react';
import { Button } from '@ag.ds-next/button';
import { Flex } from '@ag.ds-next/box';
import { boxPalette, useTernaryState } from '@ag.ds-next/core';
import { Modal, ModalButtonGroup } from '@ag.ds-next/modal';
import { useFormExampleMultiStepProdiver } from './FormExampleMultiStep';
import { Text } from '@ag.ds-next/text';

export const FormExampleMultiStepActions = () => {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	const { submittingStep, saveAndExit, saving, cancel } =
		useFormExampleMultiStepProdiver();

	return (
		<Fragment>
			<hr
				aria-hidden="true"
				css={{
					boxSizing: 'content-box',
					height: 0,
					margin: 0,
					overflow: 'visible',
					border: 'none',
					borderTopWidth: 1,
					borderTopStyle: 'solid',
					borderColor: boxPalette.borderMuted,
					width: '100%',
				}}
			/>
			<Flex gap={1}>
				<Button type="submit" variant="primary" loading={submittingStep}>
					Continue
				</Button>
				<Button
					type="button"
					variant="secondary"
					loading={saving}
					onClick={saveAndExit}
				>
					Save and exit
				</Button>
				<Button type="button" variant="tertiary" onClick={openModal}>
					Cancel
				</Button>
			</Flex>
			<Modal
				isOpen={isModalOpen}
				onDismiss={closeModal}
				title="Are you sure you want to cancel?"
				actions={
					<ModalButtonGroup>
						<Button onClick={closeModal}>Yes, cancel</Button>
						<Button variant="secondary" onClick={closeModal}>
							No, take me back
						</Button>
					</ModalButtonGroup>
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
