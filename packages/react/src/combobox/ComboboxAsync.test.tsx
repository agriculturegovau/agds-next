import { useRef } from 'react';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import {
	render,
	cleanup,
	act,
	renderHook,
	waitFor,
} from '../../../../test-utils';
import { ComboboxAsync, ComboboxAsyncProps } from './ComboboxAsync';
import { STATE_OPTIONS, Option } from './test-utils';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

const mockLoadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);

function renderComboboxAsync(props?: Partial<ComboboxAsyncProps<Option>>) {
	return render(
		<ComboboxAsync
			label="Find your state"
			hint="Start typing to see results"
			loadOptions={mockLoadOptions}
			{...props}
		/>
	);
}

describe('ComboboxAsync', () => {
	it('renders correctly', () => {
		const { container } = renderComboboxAsync();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderComboboxAsync();
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
		const { container } = renderComboboxAsync({ loadOptions });

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('aria-expanded', 'false');
		if (!input) return;

		// Focus the input
		await act(async () => await input.focus());
		expect(input).toHaveFocus();
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

		// Wait for the data to be loaded
		// When searching for 'qld', only 1 option should be visible
		await waitFor(() => {
			expect(loadOptions).toHaveBeenCalledTimes(2);
			expect(loadOptions).toHaveBeenCalledWith('qld');
			expect(container.querySelectorAll('li').length).toBe(1);
		});

		// Select the QLD option
		const options = container.querySelectorAll('li');
		await userEvent.click(options[0]);

		// Expect the input to be updated
		expect(input.value).toBe('Queensland');
		expect(input).toHaveAttribute('aria-expanded', 'false');
		expect(input).toHaveFocus();

		// Since the input is focused, use the arrow down key to open the menu
		await userEvent.keyboard('[ArrowDown]');

		// All options should be visible
		expect(container.querySelectorAll('li').length).toBe(1);

		// No other calls to `loadOptions` should have been made
		expect(loadOptions).toHaveBeenCalledTimes(2);
		expect(loadOptions).toHaveBeenCalledWith('qld');
	});

	it('accepts `inputRef` prop', () => {
		const { result } = renderHook(() => useRef<HTMLInputElement>(null));
		const inputRef = result.current;
		const id = 'test-id';
		renderComboboxAsync({ inputRef, id });
		expect(inputRef.current).toBeInTheDocument();
		expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
		expect(inputRef.current?.id).toBe(id);
	});
});
