import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { cleanup, render } from '../../../../test-utils';
import { SearchInput, SearchInputProps } from './SearchInput';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderSearchInput(props: SearchInputProps) {
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

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderSearchInput({ label: 'Search' });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
			expect(await axe(container)).toHaveNoViolations();
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
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderSearchInput({
				label: 'Search',
				hint: 'Hint text',
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				// react 18s `useId` break this rule
				rules: { 'valid-id': 'off' },
			});
			expect(await axe(container)).toHaveNoViolations();
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

		it('renders valid HTML with no a11y violations', async () => {
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
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	it('Clears input when clear button is pressed', async () => {
		const onClear = jest.fn();
		renderSearchInput({ label: 'Search', onClear });

		const input = document.querySelector('input');
		let clearButton = document.querySelector('[role="button"]');

		expect(input).toHaveValue('');
		expect(clearButton).not.toBeInTheDocument();

		await input?.focus();
		await userEvent.keyboard('Hello world');

		clearButton = document.querySelector('[role="button"]');

		expect(input).toHaveValue('Hello world');
		expect(clearButton).toBeInTheDocument();
		expect(clearButton).toHaveAccessibleName('Clear search');

		if (clearButton) await userEvent.click(clearButton);

		expect(input).toHaveFocus();
		expect(input).toHaveValue('');
		expect(onClear).toHaveBeenCalledTimes(1);
	});

	it('Clears input when escape is pressed', async () => {
		const onClear = jest.fn();
		renderSearchInput({ label: 'Search', onClear });
		const input = document.querySelector('input');

		await input?.focus();
		await userEvent.keyboard('Hello world');
		expect(input).toHaveValue('Hello world');

		await input?.focus();
		await userEvent.keyboard('{Escape}');

		expect(input).toHaveFocus();
		expect(input).toHaveValue('');
		expect(onClear).toHaveBeenCalledTimes(1);
	});
});
