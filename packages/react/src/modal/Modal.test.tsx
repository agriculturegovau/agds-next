import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { useTernaryState } from '../core';
import { Button } from '../button';
import { Text } from '../text';
import { act, cleanup, render, screen } from '../../../../test-utils';
import { Modal } from './Modal';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderBaseModal() {
	return render(
		<Modal
			actions={<Button>Close modal</Button>}
			isOpen
			onClose={() => undefined}
			title="Modal title"
		>
			<Text as="p">This is the Modal Body paragraph.</Text>
		</Modal>
	);
}

function ModalExample() {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);
	return (
		<div>
			<Button data-testid="open-modal-button" onClick={openModal}>
				Open modal
			</Button>
			<Modal
				actions={
					<Button data-testid="close-modal-button" onClick={closeModal}>
						Close modal
					</Button>
				}
				isOpen={isModalOpen}
				onClose={closeModal}
				title="Modal title"
			>
				<Text as="p">This is the Modal Body paragraph.</Text>
			</Modal>
		</div>
	);
}

function OnDismissExample() {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);
	return (
		<div>
			<Button data-testid="open-modal-button" onClick={openModal}>
				Open modal
			</Button>
			<Modal
				actions={
					<Button data-testid="close-modal-button" onClick={closeModal}>
						Close modal
					</Button>
				}
				isOpen={isModalOpen}
				onDismiss={closeModal}
				title="Modal title"
			/>
		</div>
	);
}

function renderModal() {
	return render(<ModalExample />);
}
function renderDismissModal() {
	return render(<OnDismissExample />);
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
		await act(() => userEvent.click(screen.getByTestId('open-modal-button')));
		expect(await screen.findByRole('dialog')).toBeInTheDocument();
		// Title should have focus
		expect(screen.getByText('Modal title')).toHaveFocus();
		// Close the modal
		await act(() => userEvent.click(screen.getByTestId('close-modal-button')));
		// After closing the modal, the "Open modal" button should be focused
		expect(screen.getByTestId('open-modal-button')).toHaveFocus();
	});
	it('onDismiss modal focuses the correct elements when opening and closing', async () => {
		renderDismissModal();
		// Open the modal by clicking the "Open modal" button
		await act(() => userEvent.click(screen.getByTestId('open-modal-button')));
		expect(await screen.findByRole('dialog')).toBeInTheDocument();
		// Title should have focus
		expect(screen.getByText('Modal title')).toHaveFocus();
		// Close the modal
		await act(() => userEvent.click(screen.getByTestId('close-modal-button')));
		// After closing the modal, the "Open modal" button should be focused
		expect(screen.getByTestId('open-modal-button')).toHaveFocus();
	});
});
