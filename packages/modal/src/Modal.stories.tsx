import { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { ModalButtonGroup } from './ModalButtonGroup';
import { ModalTitle } from './ModalTitle';
import { Button } from '@ag.ds-next/button';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

export default {
	title: 'content/Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>;

export const Light = () => {
	const [isOpen, setOpen] = useState(false);

	const onDismiss = () => setOpen(false);
	return (
		<div>
			<Button onClick={() => setOpen(!isOpen)}>
				{isOpen ? 'Close' : 'Open'}
			</Button>
			<Modal isOpen={isOpen} onDismiss={onDismiss}>
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
				</Stack>
				<ModalButtonGroup>
					<Button onClick={onDismiss}>Ok</Button>

					<Button variant="secondary" onClick={onDismiss}>
						Cancel
					</Button>

					<Button variant="tertiary" onClick={onDismiss}>
						Cancel
					</Button>
				</ModalButtonGroup>
			</Modal>
		</div>
	);
};
