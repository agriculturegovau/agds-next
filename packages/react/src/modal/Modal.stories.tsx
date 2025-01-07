import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '../button';
import { useTernaryState } from '../core';
import { Text } from '../text';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
	title: 'content/Modal',
	component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
	args: {
		title:
			'This is the title of the modal dialog, it can span lines but should not be too long.',
	},
	render: function Render(props) {
		const [isModalOpen, openModal, closeModal] = useTernaryState(false);
		return (
			<div>
				<Button onClick={openModal}>Open modal</Button>
				<Modal
					actions={
						<ButtonGroup>
							<Button onClick={closeModal}>Primary button</Button>
							<Button onClick={closeModal} variant="secondary">
								Secondary button
							</Button>
							<Button onClick={closeModal} variant="tertiary">
								Tertiary button
							</Button>
						</ButtonGroup>
					}
					isOpen={isModalOpen}
					onClose={closeModal}
					title={props.title}
				>
					<Text as="p">
						This is the Modal Body paragraph, it provides detailed instruction
						and context for the the modal action. It can also span lines but
						long form content should be avoided.
					</Text>
				</Modal>
			</div>
		);
	},
};

export const ConfirmingDestructiveAction: Story = {
	args: {
		title: 'Are you sure you want to delete this certificate?',
	},
	render: function Render(props) {
		const [isModalOpen, openModal, closeModal] = useTernaryState(false);
		return (
			<div>
				<Button onClick={openModal}>Open modal</Button>
				<Modal
					actions={
						<ButtonGroup>
							<Button onClick={closeModal}>Delete certificate</Button>
							<Button onClick={closeModal} variant="secondary">
								Cancel
							</Button>
						</ButtonGroup>
					}
					isOpen={isModalOpen}
					onClose={closeModal}
					title={props.title}
				>
					<Text as="p">
						Certificate <Text fontWeight="bold">CER-36476487</Text> will be
						deleted immediately. You can not undo this action.
					</Text>
				</Modal>
			</div>
		);
	},
};

export const ConfirmingFormCancellation: Story = {
	args: {
		title: 'Are you sure you want to cancel?',
	},
	render: function Render(props) {
		const [isModalOpen, openModal, closeModal] = useTernaryState(false);
		return (
			<div>
				<Button onClick={openModal}>Open modal</Button>
				<Modal
					actions={
						<ButtonGroup>
							<Button onClick={closeModal}>Yes, cancel</Button>
							<Button onClick={closeModal} variant="secondary">
								No, take me back
							</Button>
						</ButtonGroup>
					}
					isOpen={isModalOpen}
					onClose={closeModal}
					title={props.title}
				>
					<Text as="p">
						If you cancel, you will lose all information entered.
					</Text>
				</Modal>
			</div>
		);
	},
};

export const LeavingFormPage: Story = {
	args: {
		title: 'Are you sure you want to leave this page?',
	},
	render: function Render(props) {
		const [isModalOpen, openModal, closeModal] = useTernaryState(false);
		return (
			<div>
				<Button onClick={openModal}>Open modal</Button>
				<Modal
					actions={
						<ButtonGroup>
							<Button onClick={closeModal}>Leave this page</Button>
							<Button onClick={closeModal} variant="secondary">
								Stay on this page
							</Button>
						</ButtonGroup>
					}
					isOpen={isModalOpen}
					onClose={closeModal}
					title={props.title}
				>
					<Text as="p">
						You will lose all changes made since your last save.
					</Text>
				</Modal>
			</div>
		);
	},
};
