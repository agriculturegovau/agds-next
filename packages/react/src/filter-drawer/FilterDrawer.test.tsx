import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { useTernaryState } from '../core';
import { Button } from '../button';
import { Text } from '../text';
import { render, screen, cleanup } from '../../../../test-utils';
import { FilterDrawer } from './FilterDrawer';

afterEach(cleanup);

function renderBaseFilterDrawer() {
	return render(
		<FilterDrawer
			isOpen
			onDismiss={() => undefined}
			title="FilterDrawer title"
			actions={<Button>Close FilterDrawer</Button>}
		>
			<Text as="p">This is the FilterDrawer Body paragraph.</Text>
		</FilterDrawer>
	);
}

function FilterDrawerExample() {
	const [isFilterDrawerOpen, openFilterDrawer, closeFilterDrawer] =
		useTernaryState(false);
	return (
		<div>
			<Button onClick={openFilterDrawer} data-testid="open-FilterDrawer-button">
				Open FilterDrawer
			</Button>
			<FilterDrawer
				isOpen={isFilterDrawerOpen}
				onDismiss={closeFilterDrawer}
				title="FilterDrawer title"
				actions={
					<Button
						onClick={closeFilterDrawer}
						data-testid="close-FilterDrawer-button"
					>
						Close FilterDrawer
					</Button>
				}
			>
				<Text as="p">This is the FilterDrawer Body paragraph.</Text>
			</FilterDrawer>
		</div>
	);
}

function renderFilterDrawer() {
	return render(<FilterDrawerExample />);
}

describe('FilterDrawer', () => {
	it('renders correctly', () => {
		const { baseElement } = renderBaseFilterDrawer();
		expect(baseElement).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { baseElement } = renderBaseFilterDrawer();
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
		renderFilterDrawer();
		// Open the FilterDrawer by clicking the "Open FilterDrawer" button
		await userEvent.click(await screen.getByTestId('open-FilterDrawer-button'));
		expect(await screen.findByRole('dialog')).toBeInTheDocument();
		// Title should have focus
		expect(await screen.getByText('FilterDrawer title')).toHaveFocus();
		// Close the FilterDrawer
		await userEvent.click(
			await screen.getByTestId('close-FilterDrawer-button')
		);
		// After closing the FilterDrawer, the "Open FilterDrawer" button should be focused
		expect(await screen.getByTestId('open-FilterDrawer-button')).toHaveFocus();
	});
});
