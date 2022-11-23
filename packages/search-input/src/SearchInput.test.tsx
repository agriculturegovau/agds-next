import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { SearchInput, SearchInputProps } from './SearchInput';

afterEach(cleanup);

function renderSearchInput(props: Partial<SearchInputProps>) {
	return render(<SearchInput {...props} />);
}

describe('SearchInput', () => {
	describe('Basic', () => {
		it('renders correctly', () => {
			const { container } = renderSearchInput({
				label: 'Search',
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderSearchInput({ label: 'Search' });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
		});
	});

	describe('With hint', () => {
		it('renders correctly', () => {
			const { container } = renderSearchInput({
				label: 'Search',
				hint: 'Hint text',
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderSearchInput({
				label: 'Search',
				hint: 'Hint text',
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
			const { container } = renderSearchInput({
				label: 'Search',
				message: 'A search term is required to see results',
				invalid: true,
			});
			expect(container).toMatchSnapshot();
		});

		it('renders a valid HTML structure', () => {
			const { container } = renderSearchInput({
				label: 'Name',
				message: 'A search term is required to see results',
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
