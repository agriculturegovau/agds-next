import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { useTernaryState } from '../core';
import { Button } from '../button';
import { Text } from '../text';
import { render, screen, cleanup, waitFor, act } from '../../../../test-utils';
import { Drawer } from './Drawer';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderBaseDrawer() {
	return render(
		<Drawer
			actions={<Button>Example action</Button>}
			isOpen
			onClose={() => undefined}
			title="Drawer title"
		>
			<Text as="p">Example content.</Text>
		</Drawer>
	);
}

function DrawerExample() {
	const [isOpen, open, close] = useTernaryState(false);
	return (
		<div>
			<Button data-testid="open-button" onClick={open}>
				Open
			</Button>
			<Drawer
				actions={
					<Button data-testid="close-button" onClick={close}>
						Close
					</Button>
				}
				isOpen={isOpen}
				onClose={close}
				title="Drawer title"
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
			<Button data-testid="open-button" onClick={open}>
				Open
			</Button>
			<Drawer
				actions={
					<Button data-testid="close-button" onClick={close}>
						Close modal
					</Button>
				}
				isOpen={isOpen}
				onDismiss={close}
				title="Drawer title"
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
		await act(() => userEvent.click(screen.getByTestId('open-button')));
		expect(await screen.findByRole('dialog')).toBeInTheDocument();

		// Title should have focus
		expect(screen.getByText('Drawer title')).toHaveFocus();

		// Close the Drawer by clicking the "Close" button
		await act(() => userEvent.click(screen.getByTestId('close-button')));

		// After closing the Drawer, the "Open" button should be focused
		// Note: We need to wait for the closing animation
		await waitFor(() =>
			expect(screen.getByTestId('open-button')).toHaveFocus()
		);
	});

	it('onDismiss draw focuses the correct elements when opening and closing', async () => {
		renderOnDismissDrawer();

		// Open the Drawer by clicking the "Open" button
		await act(() => userEvent.click(screen.getByTestId('open-button')));
		expect(await screen.findByRole('dialog')).toBeInTheDocument();

		// Title should have focus
		expect(screen.getByText('Drawer title')).toHaveFocus();

		// Close the Drawer by clicking the "Close" button
		await act(() => userEvent.click(screen.getByTestId('close-button')));

		// After closing the Drawer, the "Open" button should be focused
		// Note: We need to wait for the closing animation
		await waitFor(() =>
			expect(screen.getByTestId('open-button')).toHaveFocus()
		);
	});
});
