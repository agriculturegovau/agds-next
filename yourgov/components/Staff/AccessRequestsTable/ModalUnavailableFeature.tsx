import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Modal } from '@ag.ds-next/react/modal';
import { Text } from '@ag.ds-next/react/text';

export type ModalUnavailableFeatureProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onClose: () => void;
};

export const ModalUnavailableFeature = ({
	isOpen,
	onConfirm,
	onClose,
}: ModalUnavailableFeatureProps) => {
	return (
		<Modal
			actions={
				<ButtonGroup>
					<Button onClick={onConfirm}>Okay</Button>
				</ButtonGroup>
			}
			isOpen={isOpen}
			onClose={onClose}
			title="This feature is not yet available."
		>
			<Text as="p">
				Note: the yourGov app is for demonstration purposes only.
			</Text>
		</Modal>
	);
};
