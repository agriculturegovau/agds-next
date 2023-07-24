import { useRef } from 'react';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render, cleanup, act } from '../../../../test-utils';
import { Combobox, ComboboxProps } from './Combobox';
import { STATE_OPTIONS, Option } from './test-utils';

afterEach(cleanup);

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

	it('renders a valid HTML structure', () => {
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
	});

	it('filters options', async () => {
		const { container } = renderCombobox();

		const input = container.querySelector('input');
		expect(input).toBeInTheDocument();
		if (!input) return;

		// Focus the input and start type a search term
		act(() => input.focus());
		expect(input).toHaveFocus();
		await userEvent.type(input, 'capital');
		expect(input.value).toBe('capital');

		// Select the ACT option
		const options = container.querySelectorAll('li');
		expect(options.length).toBe(1);
		expect(options[0].textContent).toBe('Australian Capital Territory');
		await userEvent.click(options[0]);
		expect(input.value).toBe('Australian Capital Territory');
	});

	it('accepts `inputRef` prop', () => {
		const { result } = renderHook(() => useRef<HTMLInputElement>(null));
		const inputRef = result.current;
		const id = 'test-id';
		renderCombobox({ inputRef, id });
		expect(inputRef.current).toBeInTheDocument();
		expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
		expect(inputRef.current?.id).toBe(id);
	});
});
