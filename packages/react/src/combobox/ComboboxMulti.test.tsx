import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../../test-utils';
import { ComboboxMulti } from './ComboboxMulti';
import { COUNTRIES } from './test-utils';

afterEach(cleanup);

function renderComboboxMulti() {
	const onChange = jest.fn();
	return render(
		<ComboboxMulti
			label="Find your state"
			hint="Start typing to see results"
			options={COUNTRIES}
			value={null}
			onChange={onChange}
		/>
	);
}

describe('ComboboxMulti', () => {
	it('renders correctly', () => {
		const { container } = renderComboboxMulti();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderComboboxMulti();
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
