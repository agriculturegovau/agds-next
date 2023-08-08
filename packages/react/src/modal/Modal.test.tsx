import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { useTernaryState } from '../core';
import { Button } from '../button';
import { Text } from '../text';
import { render, screen, cleanup } from '../../../../test-utils';
import { Modal } from './Modal';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderBaseModal() {
	return render(
		<Modal
			isOpen
			onDismiss={() => undefined}
			title="Modal title"
			actions={<Button>Close modal</Button>}
		>
			<Text as="p">This is the Modal Body paragraph.</Text>
		</Modal>
	);
}

function ModalExample() {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);
	return (
		<div>
			<Button onClick={openModal} data-testid="open-modal-button">
				Open modal
			</Button>
			<Modal
				isOpen={isModalOpen}
				onDismiss={closeModal}
				title="Modal title"
				actions={
					<Button onClick={closeModal} data-testid="close-modal-button">
						Close modal
					</Button>
				}
			>
				<Text as="p">This is the Modal Body paragraph.</Text>
			</Modal>
		</div>
	);
}

function renderModal() {
	return render(<ModalExample />);
}

describe('Modal', () => {
	it('renders correctly', () => {
		const { baseElement } = renderBaseModal();
		expect(baseElement).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { baseElement } = renderBaseModal();
		expect(baseElement).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(baseElement)).toHaveNoViolations();
	});

	it('focuses the correct elements when opening and closing', async () => {
		renderModal();
		// Open the modal by clicking the "Open modal" button
		await userEvent.click(await screen.getByTestId('open-modal-button'));
		expect(await screen.findByRole('dialog')).toBeInTheDocument();
		// Title should have focus
		expect(await screen.getByText('Modal title')).toHaveFocus();
		// Close the modal
		await userEvent.click(await screen.getByTestId('close-modal-button'));
		// After closing the modal, the "Open modal" button should be focused
		expect(await screen.getByTestId('open-modal-button')).toHaveFocus();
	});
});
