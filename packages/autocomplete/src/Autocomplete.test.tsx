import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { render, cleanup, waitFor } from '../../../test-utils';
import { Autocomplete } from './Autocomplete';

afterEach(cleanup);

function renderAutocomplete() {
	return render(
		<Autocomplete
			label="Find your state"
			hint="Start typing to see results"
			loadOptions={async function loadOptions(inputValue: string) {
				console.log({ inputValue });
				await new Promise((resolve) => setTimeout(resolve, 1000));
				return [
					{ label: 'Australian Capital Territory', value: 'act' },
					{ label: 'New South Wales', value: 'nsw' },
					{ label: 'Northern Territory', value: 'nt' },
					{ label: 'Queensland', value: 'qld' },
					{ label: 'South Australia', value: 'sa' },
					{ label: 'Tasmania', value: 'tas' },
					{ label: 'Victoria', value: 'vic' },
					{ label: 'Western Australia', value: 'wa' },
				];
			}}
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

	it.only('loads options', async () => {
		const { container, getByText } = renderAutocomplete();
		const input = container.querySelector('input');
		if (!input) return;

		input.focus();
		expect(input).toHaveFocus();
		await userEvent.type(input, 'qld');
		expect(input.value).toBe('qld');

		await waitFor(
			() => {
				expect(getByText('Queensland')).toBeInTheDocument();
			},
			{ timeout: 3000 }
		);

		const options = container.querySelectorAll('li');
		expect(options.length).toBe(1);
		expect(options[0].textContent).toBe('Queensland');
		await userEvent.click(options[0]);
		expect(input.value).toBe('Queensland');
	});
});
