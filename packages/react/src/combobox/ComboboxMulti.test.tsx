import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useRef } from 'react';
import {
	render,
	cleanup,
	renderHook,
	act,
	waitFor,
} from '../../../../test-utils';
import { ComboboxMulti, ComboboxMultiProps } from './ComboboxMulti';
import { STATE_OPTIONS } from './test-utils';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

type Option = (typeof STATE_OPTIONS)[number];

function renderComboboxMulti(props?: Partial<ComboboxMultiProps<Option>>) {
	return render(
		<ComboboxMulti
			label="Find your state"
			hint="Start typing to see results"
			options={STATE_OPTIONS}
			{...props}
		/>
	);
}

describe('ComboboxMulti', () => {
	it('renders correctly', () => {
		const { container } = renderComboboxMulti();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
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
		await act(async () => {
			expect(await axe(container)).toHaveNoViolations();
		});
	});

	it('accepts `inputRef` prop', () => {
		const { result } = renderHook(() => useRef<HTMLInputElement>(null));
		const inputRef = result.current;
		const id = 'test-id';
		renderComboboxMulti({ inputRef, id });
		expect(inputRef.current).toBeInTheDocument();
		expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
		expect(inputRef.current?.id).toBe(id);
	});

	it('filters options correctly', async () => {
		const { container } = renderComboboxMulti();

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('aria-expanded', 'false');
		if (!input) return;

		// Click the input, which should focus the element
		await act(async () => await input.click());
		await waitFor(() => expect(input).toHaveFocus());
		expect(input).toHaveAttribute('aria-expanded', 'true');

		// All options should be visible
		expect(container.querySelectorAll('li').length).toBe(STATE_OPTIONS.length);

		// Start typing a search term
		await act(async () => await userEvent.type(input, 'qld'));

		// Wait for the data to be loaded
		// When searching for 'qld', only 1 option should be visible
		expect(container.querySelectorAll('li').length).toBe(1);

		// Select the QLD option
		const options = container.querySelectorAll('li');
		await userEvent.click(options[0]);

		// After selecting an item, input should have focus
		expect(input).toHaveFocus();
		expect(input).toHaveAttribute('aria-expanded', 'true');

		// Selected items should be in the options list
		expect(container.querySelectorAll('li').length).toBe(
			STATE_OPTIONS.length - 1
		);
	});

	it('listBox is described by the label correctly', async () => {
		const { container } = renderComboboxMulti();
		const label = container.querySelector('label');
		const listBox = container.querySelector('[role="listbox"]');
		expect(label).toBeInTheDocument();
		expect(label).toHaveTextContent('Find your state (optional)');
		expect(listBox).toBeInTheDocument();
		expect(listBox).toHaveAttribute('aria-labelledby', label?.id);
	});

	it('accepts `onFocus` and `onBlur` props', async () => {
		const onFocus = jest.fn();
		const onBlur = jest.fn();
		const { container } = renderComboboxMulti({ onFocus, onBlur });

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		if (!input) return;

		// After focus of the input, check the events have been called correctly
		await act(async () => await input.focus());
		expect(onFocus).toHaveBeenCalledTimes(1);
		expect(onBlur).toHaveBeenCalledTimes(0);

		// After blur of the input, // check the events have been called correctly
		await act(async () => await input.blur());
		expect(input).not.toHaveAttribute('aria-expanded', 'true');
		expect(onFocus).toHaveBeenCalledTimes(1);
		expect(onBlur).toHaveBeenCalledTimes(1);
	});
});
