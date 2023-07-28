import '@testing-library/jest-dom';
import 'html-validate/jest';
import { useRef } from 'react';
import { render, cleanup, renderHook } from '../../../../test-utils';
import {
	ComboboxAsyncMulti,
	ComboboxAsyncMultiProps,
} from './ComboboxAsyncMulti';
import { STATE_OPTIONS, Option } from './test-utils';

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

	it('renders a valid HTML structure', () => {
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
