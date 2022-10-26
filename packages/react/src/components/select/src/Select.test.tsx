import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import { Select, SelectProps } from './Select';

afterEach(cleanup);

function renderSelect(props: SelectProps) {
	return render(<Select {...props} />);
}

const basicOptions = [
	{ value: 'a', label: 'Option A' },
	{ value: 'b', label: 'Option B' },
	{ value: 'c', label: 'Option C' },
];

const groupedOptions = [
	{
		label: 'Group A',
		options: [
			{ value: 'a', label: 'Option A' },
			{ value: 'b', label: 'Option B' },
			{ value: 'c', label: 'Option C' },
		],
	},
	{
		label: 'Group B',
		options: [
			{ value: 'd', label: 'Option D' },
			{ value: 'e', label: 'Option E' },
			{ value: 'f', label: 'Option F' },
		],
	},
];

describe('Select', () => {
	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = renderSelect({
				label: 'Example',
				options: basicOptions,
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderSelect({
				label: 'Example',
				options: basicOptions,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});

	describe('Grouped options', () => {
		it('renders correctly', () => {
			const { container } = renderSelect({
				label: 'Example',
				options: groupedOptions,
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderSelect({
				label: 'Example',
				options: groupedOptions,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});

	describe('With hint', () => {
		it('renders correctly', () => {
			const { container } = renderSelect({
				label: 'Example',
				options: basicOptions,
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderSelect({
				label: 'Example',
				options: basicOptions,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});

	describe('Invalid', () => {
		it('renders correctly', () => {
			const { container } = renderSelect({
				label: 'Example',
				options: basicOptions,
				message: 'This field is required',
				invalid: true,
			});
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = renderSelect({
				label: 'Example',
				options: basicOptions,
				message: 'This field is required',
				invalid: true,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});
});
