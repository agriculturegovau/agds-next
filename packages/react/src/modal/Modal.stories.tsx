import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '../button';
import { useTernaryState } from '../core';
import { Text } from '../text';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
	title: 'content/Modal',
	component: Modal,
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
					isOpen={isModalOpen}
					onDismiss={closeModal}
					title={props.title}
					actions={
						<ButtonGroup>
							<Button onClick={closeModal}>Primary button</Button>
							<Button variant="secondary" onClick={closeModal}>
								Secondary button
							</Button>
							<Button variant="tertiary" onClick={closeModal}>
								Tertiary button
							</Button>
						</ButtonGroup>
					}
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

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {};
