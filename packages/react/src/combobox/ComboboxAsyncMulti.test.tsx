import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';
import { render, cleanup, renderHook, act } from '../../../../test-utils';
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
		const { container } = renderComboboxAsyncMulti();

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('aria-expanded', 'false');
		if (!input) return;

		// Focus the input
		await act(async () => await input.focus());
		expect(input).toHaveFocus();
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

		// Expect the options to be updated
		expect(input).toHaveFocus();
		expect(input).toHaveAttribute('aria-expanded', 'true');

		expect(container.querySelectorAll('li').length).toBe(
			STATE_OPTIONS.length - 1
		);
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
