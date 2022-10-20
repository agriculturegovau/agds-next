import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { Select, SelectProps } from './Select';

afterEach(cleanup);

function renderSelect(props: SelectProps) {
	return render(<Select {...props} />);
}

describe('Select', () => {
	it('renders correctly', () => {
		const { container } = renderSelect({
			label: 'Name',
			placeholder: 'Select an option',
			options: [
				{ value: 'a', label: 'Option A' },
				{ value: 'b', label: 'Option B' },
				{ value: 'c', label: 'Option C' },
			],
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderSelect({
			label: 'Name',
			placeholder: 'Select an option',
			options: [
				{ value: 'a', label: 'Option A' },
				{ value: 'b', label: 'Option B' },
				{ value: 'c', label: 'Option C' },
			],
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});
