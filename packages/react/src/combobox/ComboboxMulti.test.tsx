import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { useRef } from 'react';
import { render, cleanup, renderHook, act } from '../../../../test-utils';
import { ComboboxMulti, ComboboxMultiProps } from './ComboboxMulti';
import { COUNTRY_OPTIONS } from './test-utils';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

type Option = (typeof COUNTRY_OPTIONS)[number];

function renderComboboxMulti(props?: Partial<ComboboxMultiProps<Option>>) {
	return render(
		<ComboboxMulti
			label="Find your state"
			hint="Start typing to see results"
			options={COUNTRY_OPTIONS}
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
});
