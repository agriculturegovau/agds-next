import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';
import {
	render,
	cleanup,
	renderHook,
	act,
	waitFor,
} from '../../../../test-utils';
import {
	ComboboxAsyncMulti,
	ComboboxAsyncMultiProps,
} from './ComboboxAsyncMulti';
import { STATE_OPTIONS, Option } from './test-utils';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

const mockLoadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);

function renderComboboxAsyncMulti(
	props?: Partial<ComboboxAsyncMultiProps<Option>>
) {
	return render(
		<ComboboxAsyncMulti
			label="Find your state"
			hint="Start typing to see results"
			loadOptions={mockLoadOptions}
			{...props}
		/>
	);
}

describe('ComboboxAsyncMulti', () => {
	it('renders correctly', () => {
		const { container } = renderComboboxAsyncMulti();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderComboboxAsyncMulti();
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

	it('can load async options', async () => {
		const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
		const { container } = renderComboboxAsyncMulti({ loadOptions });

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('aria-expanded', 'false');
		if (!input) return;

		// Click the input, which should focus the element
		await act(async () => await input.click());
		await waitFor(() => expect(input).toHaveFocus());
		expect(input).toHaveAttribute('aria-expanded', 'true');

		// Focusing the input should trigger `loadOptions`
		await waitFor(() => {
			expect(loadOptions).toHaveBeenCalledTimes(1);
			expect(loadOptions).toHaveBeenCalledWith('');
		});

		// All options should be visible
		expect(container.querySelectorAll('li').length).toBe(STATE_OPTIONS.length);

		// Start typing a search term
		await userEvent.type(input, 'qld');

		// Typing a search term should trigger `loadOptions` to be called
		await waitFor(() => {
			expect(loadOptions).toHaveBeenCalledTimes(2);
			expect(loadOptions).toHaveBeenCalledWith('qld');
			expect(container.querySelectorAll('li').length).toBe(1);
			expect(container.querySelectorAll('li')[0].textContent).toBe(
				'Queensland'
			);
		});

		// Select the QLD option
		const options = container.querySelectorAll('li');
		await userEvent.click(options[0]);

		// Expect the input to be updated
		expect(input.value).toBe('');
		expect(input).toHaveAttribute('aria-expanded', 'true');
		expect(input).toHaveFocus();

		// Since the input is focused, use the arrow down key to open the menu
		await userEvent.keyboard('[ArrowDown]');

		// All options should be cached and visible
		expect(container.querySelectorAll('li').length).toBe(
			STATE_OPTIONS.length - 1
		);

		// Press escape to close the menu
		await userEvent.keyboard('[Escape]');
		expect(input).toHaveAttribute('aria-expanded', 'false');
		expect(input).toHaveFocus();

		// No other calls to `loadOptions` should have been made
		expect(loadOptions).toHaveBeenCalledTimes(2);
		expect(loadOptions).toHaveBeenNthCalledWith(1, '');
		expect(loadOptions).toHaveBeenNthCalledWith(2, 'qld');
	});

	it('accepts `inputRef` prop', () => {
		const { result } = renderHook(() => useRef<HTMLInputElement>(null));
		const inputRef = result.current;
		const id = 'test-id';
		renderComboboxAsyncMulti({ inputRef, id });
		expect(inputRef.current).toBeInTheDocument();
		expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
		expect(inputRef.current?.id).toBe(id);
	});
});
