import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { useTernaryState } from '../core';
import { Button } from '../button';
import { Text } from '../text';
import { render, screen, cleanup } from '../../../../test-utils';
import { SideDrawer } from './SideDrawer';

afterEach(cleanup);

function renderBaseSideDrawer() {
	return render(
		<SideDrawer
			isOpen
			onDismiss={() => undefined}
			title="SideDrawer title"
			actions={<Button>Close SideDrawer</Button>}
		>
			<Text as="p">This is the SideDrawer Body paragraph.</Text>
		</SideDrawer>
	);
}

function SideDrawerExample() {
	const [isSideDrawerOpen, openSideDrawer, closeSideDrawer] =
		useTernaryState(false);
	return (
		<div>
			<Button onClick={openSideDrawer} data-testid="open-SideDrawer-button">
				Open SideDrawer
			</Button>
			<SideDrawer
				isOpen={isSideDrawerOpen}
				onDismiss={closeSideDrawer}
				title="SideDrawer title"
				actions={
					<Button
						onClick={closeSideDrawer}
						data-testid="close-SideDrawer-button"
					>
						Close SideDrawer
					</Button>
				}
			>
				<Text as="p">This is the SideDrawer Body paragraph.</Text>
			</SideDrawer>
		</div>
	);
}

function renderSideDrawer() {
	return render(<SideDrawerExample />);
}

describe('SideDrawer', () => {
	it('renders correctly', () => {
		const { baseElement } = renderBaseSideDrawer();
		expect(baseElement).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { baseElement } = renderBaseSideDrawer();
		expect(baseElement).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});

	it('focuses the correct elements when opening and closing', async () => {
		renderSideDrawer();
		// Open the SideDrawer by clicking the "Open SideDrawer" button
		await userEvent.click(await screen.getByTestId('open-SideDrawer-button'));
		expect(await screen.findByRole('dialog')).toBeInTheDocument();
		// Title should have focus
		expect(await screen.getByText('SideDrawer title')).toHaveFocus();
		// Close the SideDrawer
		await userEvent.click(await screen.getByTestId('close-SideDrawer-button'));
		// After closing the SideDrawer, the "Open SideDrawer" button should be focused
		expect(await screen.getByTestId('open-SideDrawer-button')).toHaveFocus();
	});
});
