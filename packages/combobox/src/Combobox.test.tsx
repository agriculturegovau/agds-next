import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
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
});
