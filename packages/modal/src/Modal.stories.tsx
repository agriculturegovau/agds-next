import { ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { ModalButtonGroup } from './ModalButtonGroup';
import { ModalTitle } from './ModalTitle';
import { Button } from '@ag.ds-next/button';
import { Stack } from '@ag.ds-next/box';
import { useTernaryState } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';

export default {
	title: 'content/Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>;

export const Basic = () => {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	return (
		<div>
			<Button onClick={openModal}>Open modal</Button>
			<Modal
				isOpen={isModalOpen}
				onDismiss={closeModal}
				title="This is the title of the modal dialogue, it can span lines but should not be too long."
			>
				<Stack gap={2}>
					<Text as="p">
						This is the Modal Body paragraph, it provides detailed instruction
						and context for the the modal action. It can also span lines but
						long form content should be avoided.
					</Text>
					<ModalButtonGroup>
						<Button onClick={closeModal}>Primary button</Button>
						<Button variant="secondary" onClick={closeModal}>
							Secondary button
						</Button>
						<Button variant="tertiary" onClick={closeModal}>
							Tertiary button
						</Button>
					</ModalButtonGroup>
				</Stack>
			</Modal>
		</div>
	);
};

export const Modular = () => {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	return (
		<div>
			<Button onClick={openModal}>Open modal</Button>
			<Modal isOpen={isModalOpen} onDismiss={closeModal}>
				<Stack gap={2}>
					<Stack gap={1}>
						<ModalTitle>
							This is the title of the modal dialogue, it can span lines but
							should not be too long.
						</ModalTitle>
						<Text as="p">
							This is the Modal Body paragraph, it provides detailed instruction
							and context for the the modal action. It can also span lines but
							long form content should be avoided.
						</Text>

						<Text as="p">
							This is the Modal Body paragraph, it provides detailed instruction
							and context for the the modal action. It can also span lines but
							long form content should be avoided.
						</Text>
					</Stack>
					<ModalButtonGroup>
						<Button onClick={closeModal}>Ok</Button>

						<Button variant="secondary" onClick={closeModal}>
							Cancel
						</Button>

						<Button variant="tertiary" onClick={closeModal}>
							Cancel
						</Button>
					</ModalButtonGroup>
				</Stack>
			</Modal>
		</div>
	);
};
