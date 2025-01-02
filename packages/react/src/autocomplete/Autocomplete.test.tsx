import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useRef } from 'react';
import userEvent from '@testing-library/user-event';
import {
	render,
	cleanup,
	act,
	renderHook,
	waitFor,
} from '../../../../test-utils';
import { STATE_OPTIONS, Option } from '../combobox/test-utils';
import { Autocomplete, AutocompleteProps } from './Autocomplete';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

const mockLoadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);

function renderAutocomplete(props?: Partial<AutocompleteProps<Option>>) {
	return render(
		<Autocomplete
			hint="Start typing to see results"
			label="Find your state"
			loadOptions={mockLoadOptions}
			{...props}
		/>
	);
}

describe('Autocomplete', () => {
	it('renders correctly', () => {
		const { container } = renderAutocomplete();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderAutocomplete();
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

	it('can load and clear async options', async () => {
		const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
		const { container } = renderAutocomplete({ loadOptions });

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('aria-expanded', 'false');
		if (!input) return;

		// Focus the input
		await act(async () => await input.focus());
		expect(input).toHaveFocus();
		expect(input).toHaveAttribute('aria-expanded', 'false');

		expect(loadOptions).not.toHaveBeenCalled();

		// Start typing a search term
		await userEvent.type(input, 'qld');

		// Loading state should be visible
		expect(container.querySelectorAll('li').length).toBe(1);
		expect(container.querySelectorAll('li')[0].textContent).toBe('Loading');

		// Only qld option should be visible
		await waitFor(() => {
			expect(container.querySelectorAll('li').length).toBe(1);
			expect(container.querySelectorAll('li')[0].textContent).toBe(
				'Queensland'
			);
			expect(loadOptions).toHaveBeenCalledTimes(1);
			expect(loadOptions).toHaveBeenCalledWith('qld');
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

		// Loading state should be visible
		expect(container.querySelectorAll('li').length).toBe(1);
		expect(container.querySelectorAll('li')[0].textContent).toBe('Loading');

		// Only qld option should be visible
		await waitFor(() => {
			expect(container.querySelectorAll('li').length).toBe(1);
			expect(container.querySelectorAll('li')[0].textContent).toBe(
				'Queensland'
			);
			expect(loadOptions).toHaveBeenCalledTimes(2);
			expect(loadOptions).toHaveBeenCalledWith('queensland');
		});

		// Press escape to close the menu
		await userEvent.keyboard('[Escape]');
		expect(input).toHaveAttribute('aria-expanded', 'false');
		expect(input).toHaveFocus();

		// Press the "Clear button"
		const clearButton = container.querySelector('button');
		expect(clearButton).toBeInTheDocument();
		expect(clearButton).toHaveAttribute('aria-label', 'Clear input');

		if (clearButton) await userEvent.click(clearButton);

		// Expect the input to be updated
		expect(input.value).toBe('');

		// No other calls to `loadOptions` should have been made
		expect(loadOptions).toHaveBeenCalledTimes(2);
		expect(loadOptions).toHaveBeenNthCalledWith(1, 'qld');
		expect(loadOptions).toHaveBeenNthCalledWith(2, 'queensland');
	});

	it('accepts `inputRef` prop', () => {
		const { result } = renderHook(() => useRef<HTMLInputElement>(null));
		const inputRef = result.current;
		const id = 'test-id';
		renderAutocomplete({ inputRef, id });
		expect(inputRef.current).toBeInTheDocument();
		expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
		expect(inputRef.current?.id).toBe(id);
	});
});
