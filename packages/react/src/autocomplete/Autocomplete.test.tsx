import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { render, cleanup, act, waitFor } from '../../../../test-utils';
import { Autocomplete } from './Autocomplete';

afterEach(cleanup);

const mockLoadOptions = jest.fn().mockResolvedValue([
	{ label: 'Australian Capital Territory', value: 'act' },
	{ label: 'New South Wales', value: 'nsw' },
	{ label: 'Northern Territory', value: 'nt' },
	{ label: 'Queensland', value: 'qld' },
	{ label: 'South Australia', value: 'sa' },
	{ label: 'Tasmania', value: 'tas' },
	{ label: 'Victoria', value: 'vic' },
	{ label: 'Western Australia', value: 'wa' },
]);

function renderAutocomplete() {
	return render(
		<Autocomplete
			label="Find your state"
			hint="Start typing to see results"
			loadOptions={mockLoadOptions}
		/>
	);
}

describe('Autocomplete', () => {
	it('renders correctly', () => {
		const { container } = renderAutocomplete();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderAutocomplete();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// Our HTML is based off downshift
				'prefer-native-element': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});

	it('can load and clear async options', async () => {
		const { container } = renderAutocomplete();

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		if (!input) return;

		// Focus the input and start typing a search term
		act(() => input.focus());
		await userEvent.type(input, 'qld');

		// Wait for the data to be loaded
		// When searching for 'qld', only 1 option should be visible
		await waitFor(() =>
			expect(container.querySelectorAll('li').length).toBe(1)
		);

		// Select the QLD option
		const options = container.querySelectorAll('li');
		await userEvent.click(options[0]);

		// Expect the input to be updated
		expect(input.value).toBe('Queensland');

		// Press the "Clear button"
		const clearButton = container.querySelector('button');
		expect(clearButton).toBeInTheDocument();
		expect(clearButton).toHaveAttribute('aria-label', 'Clear input');

		if (clearButton) await userEvent.click(clearButton);

		// Expect the input to be updated
		expect(input.value).toBe('');
	});
});
