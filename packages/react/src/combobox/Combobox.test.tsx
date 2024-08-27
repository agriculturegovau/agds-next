import { useRef } from 'react';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { render, act, screen } from '../../../../test-utils';
import { Combobox, ComboboxProps } from './Combobox';
import { STATE_OPTIONS, Option } from './test-utils';

expect.extend(toHaveNoViolations);

function renderCombobox(props?: Partial<ComboboxProps<Option>>) {
	return render(
		<Combobox
			label="Find your state"
			hint="Start typing to see results"
			options={STATE_OPTIONS}
			{...props}
		/>
	);
}

describe('Combobox', () => {
	it('renders correctly', () => {
		const { container } = renderCombobox();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderCombobox();
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

	describe('when an option is selected', () => {
		test('then the input should display the selected value', async () => {
			render(
				<Combobox
					label="Find your state"
					hint="Start typing to see results"
					options={STATE_OPTIONS}
				/>
			);
			const input = screen.getByRole('combobox');

			const user = userEvent.setup();
			await user.click(input);
			user.type(input, 'capital');

			const option = screen.getByRole('option', {
				name: 'A u s t r a l i a n C a p i t a l T e r r i t o r y',
			});

			// userEvent.click(option) does not fire the change event in downshift - using direct click method on the option as a workaround
			option.click();
			const updatedInput = await screen.findByRole('combobox');

			expect(updatedInput).toHaveValue('Australian Capital Territory');
		});
	});

	describe('when an inputRef is defined', () => {
		test('the input element should be able to be updated via the inputRef', () => {
			const ComboboxWithInputRef = () => {
				const inputRef = useRef<HTMLInputElement>(null);

				// On the second render, the ref will be applied and we'll directly update the input
				if (inputRef.current) {
					inputRef.current.disabled = true;
				}

				return (
					<Combobox
						label="Find your state"
						hint="Start typing to see results"
						options={STATE_OPTIONS}
						inputRef={inputRef}
						disabled={false} // Definitely start in an enabled state
					/>
				);
			};
			const { rerender } = render(<ComboboxWithInputRef />);

			// Rerender to apply the ref
			rerender(<ComboboxWithInputRef />);

			// Checking that the ref allows us to update the input
			expect(screen.getByRole('combobox')).toBeDisabled();
		});
	});

	it('accepts `onFocus` and `onBlur` props', async () => {
		const onFocus = jest.fn();
		const onBlur = jest.fn();
		const { container } = renderCombobox({ onFocus, onBlur });

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

	it('listBox is described by the label correctly', async () => {
		const { container } = renderCombobox();
		const label = container.querySelector('label');
		const listBox = container.querySelector('[role="listbox"]');
		expect(label).toBeInTheDocument();
		expect(label).toHaveTextContent('Find your state (optional)');
		expect(listBox).toBeInTheDocument();
		expect(listBox).toHaveAttribute('aria-labelledby', label?.id);
	});
});
