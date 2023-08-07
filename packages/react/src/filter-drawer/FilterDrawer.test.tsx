import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { useTernaryState } from '../core';
import { Button } from '../button';
import { Text } from '../text';
import { render, screen, cleanup, waitFor } from '../../../../test-utils';
import { FilterDrawer } from './FilterDrawer';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderBaseFilterDrawer() {
	return render(
		<FilterDrawer
			isOpen
			onDismiss={() => undefined}
			title="Filter drawer title"
			actions={<Button>Example action</Button>}
		>
			<Text as="p">Example content.</Text>
		</FilterDrawer>
	);
}

function FilterDrawerExample() {
	const [isOpen, open, close] = useTernaryState(false);
	return (
		<div>
			<Button onClick={open} data-testid="open-button">
				Open
			</Button>
			<FilterDrawer
				isOpen={isOpen}
				onDismiss={close}
				title="Filter drawer title"
				actions={
					<Button onClick={close} data-testid="close-button">
						Close
					</Button>
				}
			>
				<Text as="p">This is the Filter drawer content.</Text>
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

	it('renders valid HTML with no a11y violations', async () => {
		const { baseElement } = renderBaseFilterDrawer();
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
		renderFilterDrawer();

		// Open the FilterDrawer by clicking the "Open" button
		await userEvent.click(screen.getByTestId('open-button'));
		expect(await screen.findByRole('dialog')).toBeInTheDocument();

		// Title should have focus
		expect(await screen.getByText('Filter drawer title')).toHaveFocus();

		// Close the FilterDrawer by clicking the "Close" button
		await userEvent.click(screen.getByTestId('close-button'));

		// After closing the FilterDrawer, the "Open" button should be focused
		// Note: We need to wait for the closing animation
		await waitFor(() =>
			expect(screen.getByTestId('open-button')).toHaveFocus()
		);
	});
});
