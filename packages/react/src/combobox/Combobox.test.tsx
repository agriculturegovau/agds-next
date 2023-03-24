import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { render, cleanup, act } from '../../../../test-utils';
import { Combobox } from './Combobox';

afterEach(cleanup);

function renderCombobox() {
	return render(
		<Combobox
			label="Find your state"
			hint="Start typing to see results"
			options={[
				{ label: 'Australian Capital Territory', value: 'act' },
				{ label: 'New South Wales', value: 'nsw' },
				{ label: 'Northern Territory', value: 'nt' },
				{ label: 'Queensland', value: 'qld' },
				{ label: 'South Australia', value: 'sa' },
				{ label: 'Tasmania', value: 'tas' },
				{ label: 'Victoria', value: 'vic' },
				{ label: 'Western Australia', value: 'wa' },
			]}
		/>
	);
}

describe('Combobox', () => {
	it('renders correctly', () => {
		const { container } = renderCombobox();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderCombobox();
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

	it('filters options', async () => {
		const { container } = renderCombobox();

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		if (!input) return;

		// Focus the input and start type a search term
		act(() => input.focus());
		expect(input).toHaveFocus();
		await userEvent.type(input, 'capital');
		expect(input.value).toBe('capital');

		// Select the ACT option
		const options = container.querySelectorAll('li');
		expect(options.length).toBe(1);
		expect(options[0].textContent).toBe('Australian Capital Territory');
		await userEvent.click(options[0]);
		expect(input.value).toBe('Australian Capital Territory');
	});
});
