import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { render, cleanup, act } from '../../../test-utils';
import { ComboboxAsync } from './ComboboxAsync';

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

function renderComboboxAsync() {
	return render(
		<ComboboxAsync
			label="Find your state"
			hint="Start typing to see results"
			loadOptions={mockLoadOptions}
		/>
	);
}

describe('ComboboxAsync', () => {
	it('renders correctly', () => {
		const { container } = renderComboboxAsync();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderComboboxAsync();
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

	it('can load async options', async () => {
		const { container } = renderComboboxAsync();

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		if (!input) return;

		// Focus the input and start typing a search term
		input.focus();
		userEvent.type(input, 'qld');

		// Wait for 500ms so options can be loaded
		await act(async () => await new Promise((res) => setTimeout(res, 500)));

		// Select the QLD option
		const options = container.querySelectorAll('li');
		expect(options.length).toBe(1);
		expect(options[0].textContent).toBe('Queensland');
		await userEvent.click(options[0]);

		// Expect the input to be updated
		expect(input.value).toBe('Queensland');
	});
});
