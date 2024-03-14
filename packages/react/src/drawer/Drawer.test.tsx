import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { useTernaryState } from '../core';
import { Button } from '../button';
import { Text } from '../text';
import { render, screen, cleanup, waitFor } from '../../../../test-utils';
import { closeHandlerErrorMessage } from '../getCloseHandler';
import { Drawer } from './Drawer';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderBaseDrawer() {
	return render(
		<Drawer
			isOpen
			onClose={() => undefined}
			title="Drawer title"
			actions={<Button>Example action</Button>}
		>
			<Text as="p">Example content.</Text>
		</Drawer>
	);
}

function DrawerExample() {
	const [isOpen, open, close] = useTernaryState(false);
	return (
		<div>
			<Button onClick={open} data-testid="open-button">
				Open
			</Button>
			<Drawer
				isOpen={isOpen}
				onClose={close}
				title="Drawer title"
				actions={
					<Button onClick={close} data-testid="close-button">
						Close
					</Button>
				}
			>
				<Text as="p">This is the Drawer content.</Text>
			</Drawer>
		</div>
	);
}
function OnDismissDrawerExample() {
	const [isOpen, open, close] = useTernaryState(false);
	return (
		<div>
			<Button onClick={open} data-testid="open-button">
				Open
			</Button>
			<Drawer
				isOpen={isOpen}
				onDismiss={close}
				title="Drawer title"
				actions={
					<Button onClick={close} data-testid="close-button">
						Close modal
					</Button>
				}
			>
				<Text as="p">This is the Drawer content.</Text>
			</Drawer>
		</div>
	);
}

function renderDrawer() {
	return render(<DrawerExample />);
}
function renderOnDismissDrawer() {
	return render(<OnDismissDrawerExample />);
}

describe('Drawer', () => {
	it('renders correctly', () => {
		const { baseElement } = renderBaseDrawer();
		expect(baseElement).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { baseElement } = renderBaseDrawer();
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
		renderDrawer();

		// Open the Drawer by clicking the "Open" button
		await userEvent.click(screen.getByTestId('open-button'));
		expect(await screen.findByRole('dialog')).toBeInTheDocument();

		// Title should have focus
		expect(await screen.getByText('Drawer title')).toHaveFocus();

		// Close the Drawer by clicking the "Close" button
		await userEvent.click(screen.getByTestId('close-button'));

		// After closing the Drawer, the "Open" button should be focused
		// Note: We need to wait for the closing animation
		await waitFor(() =>
			expect(screen.getByTestId('open-button')).toHaveFocus()
		);
	});
	it('onDismiss draw focuses the correct elements when opening and closing', async () => {
		renderOnDismissDrawer();

		// Open the Drawer by clicking the "Open" button
		await userEvent.click(screen.getByTestId('open-button'));
		expect(await screen.findByRole('dialog')).toBeInTheDocument();

		// Title should have focus
		expect(await screen.getByText('Drawer title')).toHaveFocus();

		// Close the Drawer by clicking the "Close" button
		await userEvent.click(screen.getByTestId('close-button'));

		// After closing the Drawer, the "Open" button should be focused
		// Note: We need to wait for the closing animation
		await waitFor(() =>
			expect(screen.getByTestId('open-button')).toHaveFocus()
		);
	});
	it('errors if provided both onClose and onDismiss', () => {
		expect(() =>
			render(
				<Drawer
					isOpen
					onClose={jest.fn}
					onDismiss={jest.fn}
					title="Draw title"
				/>
			)
		).toThrow(closeHandlerErrorMessage);
	});
});
