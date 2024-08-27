import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';
import { act, waitFor } from '@testing-library/react';
import { render, renderHook, screen } from '../../../../test-utils';
import {
	ComboboxAsyncMulti,
	ComboboxAsyncMultiProps,
} from './ComboboxAsyncMulti';
import { STATE_OPTIONS, Option } from './test-utils';

expect.extend(toHaveNoViolations);

function renderComboboxAsyncMulti(
	props?: Partial<ComboboxAsyncMultiProps<Option>>
) {
	const mockLoadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);

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

	describe('when the input is pressed', () => {
		test('then the menu is displayed', async () => {
			const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
			render(
				<ComboboxAsyncMulti
					label="Find your state"
					hint="Start typing to see results"
					loadOptions={loadOptions}
				/>
			);

			const input = screen.getByRole('combobox', {
				name: 'Find your state (optional)',
			});
			const user = userEvent.setup();
			await user.click(input);

			const menu = screen.getByRole('listbox', {
				name: 'Find your state (optional)',
			});

			expect(menu).toBeVisible();
		});

		test('then the menu contains a loading indicator', async () => {
			const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
			render(
				<ComboboxAsyncMulti
					label="Find your state"
					hint="Start typing to see results"
					loadOptions={loadOptions}
				/>
			);

			const input = screen.getByRole('combobox', {
				name: 'Find your state (optional)',
			});
			const user = userEvent.setup();
			await user.click(input);

			const listItem = screen.getByRole('listitem');

			expect(listItem).toHaveTextContent('Loading');
		});

		test('then the loadOptions prop is called', async () => {
			const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
			render(
				<ComboboxAsyncMulti
					label="Find your state"
					hint="Start typing to see results"
					loadOptions={loadOptions}
				/>
			);

			const input = screen.getByRole('combobox', {
				name: 'Find your state (optional)',
			});
			const user = userEvent.setup();
			await user.click(input);

			// Focusing the input should trigger `loadOptions`
			await waitFor(() => {
				expect(loadOptions).toHaveBeenCalledTimes(1);
				expect(loadOptions).toHaveBeenCalledWith('');
			});
		});

		test('then the options are rendered', async () => {
			const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
			render(
				<ComboboxAsyncMulti
					label="Find your state"
					hint="Start typing to see results"
					loadOptions={loadOptions}
				/>
			);

			const input = screen.getByRole('combobox', {
				name: 'Find your state (optional)',
			});
			const user = userEvent.setup();
			await user.click(input);

			const stateOptionsText = STATE_OPTIONS.map((option) => option.label);
			const optionsText = (await screen.findAllByRole('option')).map(
				(option) => option.textContent
			);

			expect(optionsText).toEqual(stateOptionsText);
		});
	});

	describe('when a search term is entered', () => {
		test('then the loadOptions prop is called with the input value', async () => {
			const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
			render(
				<ComboboxAsyncMulti
					label="Find your state"
					hint="Start typing to see results"
					loadOptions={loadOptions}
				/>
			);

			const input = screen.getByRole('combobox', {
				name: 'Find your state (optional)',
			});
			const user = userEvent.setup();
			user.click(input);

			user.type(input, 'qld');

			await waitFor(() => {
				expect(loadOptions).toHaveBeenCalledTimes(1);
				expect(loadOptions).toHaveBeenCalledWith('qld');
			});
		});

		test('then a filtered list of options is displayed', async () => {
			const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
			render(
				<ComboboxAsyncMulti
					label="Find your state"
					hint="Start typing to see results"
					loadOptions={loadOptions}
				/>
			);

			const input = screen.getByRole('combobox', {
				name: 'Find your state (optional)',
			});
			const user = userEvent.setup();
			user.click(input);
			await user.type(input, 'qld');

			const options = (await screen.findAllByRole('option')).map(
				(option) => option.textContent
			);

			expect(options).toEqual(['Queensland']);
		});
	});

	describe('when an item is selected', () => {
		test('then the selected item is added as a tag', async () => {
			const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
			render(
				<ComboboxAsyncMulti
					label="Find your state"
					hint="Start typing to see results"
					loadOptions={loadOptions}
				/>
			);

			const input = screen.getByRole('combobox', {
				name: 'Find your state (optional)',
			});
			const user = userEvent.setup();
			user.click(input);
			await user.type(input, 'qld');

			const option = await screen.findByRole('option', {
				name: 'Q u e e n s l a n d',
			});
			option.click();

			const tag = await screen.findByText('Queensland');
			expect(tag).toBeVisible();
		});

		test('then the menu no longer contains the selected item', async () => {
			const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
			render(
				<ComboboxAsyncMulti
					label="Find your state"
					hint="Start typing to see results"
					loadOptions={loadOptions}
				/>
			);

			const input = screen.getByRole('combobox', {
				name: 'Find your state (optional)',
			});
			const user = userEvent.setup();
			user.click(input);
			await user.type(input, 'qld');

			const option = await screen.findByRole('option', {
				name: 'Q u e e n s l a n d',
			});
			await user.click(option);

			const updatedOptions = (await screen.findAllByRole('option')).map(
				(option) => option.textContent
			);
			const stateOptionsWithoutSelected = STATE_OPTIONS.map(
				({ label }) => label
			).filter((label) => label !== 'Queensland');

			expect(updatedOptions).toEqual(stateOptionsWithoutSelected);
		});
	});

	describe('when a keyboard is used to interact with the component', () => {
		test('then the menu opens via the keybaord', async () => {
			const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
			render(
				<ComboboxAsyncMulti
					label="Find your state"
					hint="Start typing to see results"
					loadOptions={loadOptions}
				/>
			);

			const user = userEvent.setup();
			await user.tab();
			await user.keyboard('[ArrowDown]');

			const options = (await screen.findAllByRole('option')).map(
				(option) => option.textContent
			);
			const stateOptionLabels = STATE_OPTIONS.map(({ label }) => label);

			expect(options).toEqual(stateOptionLabels);
		});

		test('then the menu closes via the keybaord', async () => {
			const loadOptions = jest.fn().mockResolvedValue(STATE_OPTIONS);
			render(
				<ComboboxAsyncMulti
					label="Find your state"
					hint="Start typing to see results"
					loadOptions={loadOptions}
				/>
			);

			const user = userEvent.setup();
			await user.tab();
			await userEvent.keyboard('[Escape]');

			expect(screen.getByRole('listbox', { hidden: true })).not.toBeVisible();
		});
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

	it('accepts `onFocus` and `onBlur` props', async () => {
		const onFocus = jest.fn();
		const onBlur = jest.fn();
		const { container } = renderComboboxAsyncMulti({ onFocus, onBlur });

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
