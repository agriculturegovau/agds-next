import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
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
});
