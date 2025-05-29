import '@testing-library/jest-dom';
import 'html-validate/jest';
import { useState } from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
} from '../../../../test-utils';
import { SearchBox } from './SearchBox';
import { SearchBoxInput, type SearchBoxInputProps } from './SearchBoxInput';
import { SearchBoxButton } from './SearchBoxButton';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

const searchInputLabel = 'Search this website';
const clearButtonLabel = 'Clear search';

function renderSearchBox({
	searchBoxInputProps,
}: {
	searchBoxInputProps?: SearchBoxInputProps;
}) {
	return render(
		<SearchBox>
			<SearchBoxInput {...searchBoxInputProps} />
			<SearchBoxButton>Search</SearchBoxButton>
		</SearchBox>
	);
}

const TestComponentWithState = ({
	searchBoxInputProps,
}: {
	searchBoxInputProps?: SearchBoxInputProps;
}) => {
	const [value, setValue] = useState(searchBoxInputProps?.value || '');

	return (
		<SearchBox>
			<SearchBoxInput
				{...searchBoxInputProps}
				onChange={(e) => {
					// Used to check that onChange function was called
					if (searchBoxInputProps?.onChange) {
						searchBoxInputProps.onChange(e);
					}
					setValue(e.target.value);
				}}
				value={value}
			/>
			<SearchBoxButton>Search</SearchBoxButton>
		</SearchBox>
	);
};

describe('SearchBox', () => {
	it('renders correctly', () => {
		const { container } = renderSearchBox({});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderSearchBox({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	// Check internal state (no `value` or `onChange` prop passed into the input component)
	it('updates the input state value when the input has changed (internal state)', async () => {
		renderSearchBox({
			searchBoxInputProps: { label: searchInputLabel },
		});

		const searchInputElement = screen.getByLabelText(searchInputLabel);
		expect(searchInputElement).toBeInTheDocument();
		await act(() => {
			fireEvent.change(searchInputElement, { target: { value: 'Orange' } });
		});

		expect(searchInputElement.getAttribute('value')).toBe('Orange');
	});

	// Check parent or store managed state state (when the prop `value` or `onChange` has been passed into the input component)
	it('executes the `onChange` function when the input has changes (parent state managed)', async () => {
		const mockOnChange = jest.fn();
		render(
			<TestComponentWithState
				searchBoxInputProps={{
					label: searchInputLabel,
					onChange: mockOnChange,
				}}
			/>
		);

		const searchInputElement = screen.getByLabelText(searchInputLabel);
		expect(searchInputElement).toBeInTheDocument();
		await act(() => {
			fireEvent.change(searchInputElement, { target: { value: 'Orange' } });
		});

		expect(mockOnChange).toHaveBeenCalledTimes(1);
		expect(searchInputElement.getAttribute('value')).toBe('Orange');
	});

	it('applies the default value to the input when the prop `defaultValue` is provided', () => {
		const defaultValue = 'Orange';
		renderSearchBox({
			searchBoxInputProps: {
				defaultValue,
				label: searchInputLabel,
			},
		});

		const searchInputElement = screen.getByLabelText(searchInputLabel);
		expect(searchInputElement).toBeInTheDocument();
		expect(searchInputElement.getAttribute('value')).toBe(defaultValue);
	});

	describe('SearchBoxInput clear button', () => {
		it('does not render a "clear input" button when the value is not truthy and string', () => {
			renderSearchBox({
				searchBoxInputProps: { value: undefined },
			});

			const clearButtonElement = screen.queryByLabelText(clearButtonLabel);
			expect(clearButtonElement).toBeNull();
		});

		it('renders a "clear input" button when the input has a valid value', () => {
			renderSearchBox({
				searchBoxInputProps: { value: 'Orange' },
			});

			const clearButtonElement = screen.getByLabelText(clearButtonLabel);
			expect(clearButtonElement).toBeInTheDocument();
		});

		it('clears and updates the field value when the "clear input" button is pressed (internal state)', async () => {
			renderSearchBox({
				searchBoxInputProps: {
					label: searchInputLabel,
				},
			});

			// Manage internal state value
			const searchInputElement = screen.getByLabelText(searchInputLabel);
			await act(() => {
				fireEvent.change(searchInputElement, { target: { value: 'Orange' } });
			});
			expect(searchInputElement.getAttribute('value')).toBe('Orange');

			const clearButtonElement = screen.getByLabelText(clearButtonLabel);
			await act(() => {
				fireEvent.click(clearButtonElement);
			});

			expect(searchInputElement.getAttribute('value')).toBe('');
		});

		it('clears and updates the field value when the "clear input" button is pressed (parent state managed)', async () => {
			const mockOnChange = jest.fn();
			render(
				<TestComponentWithState
					searchBoxInputProps={{
						label: searchInputLabel,
						onChange: mockOnChange,
						value: 'Orange',
					}}
				/>
			);

			// TestComponentWithState has a useState set using an initial value
			const clearButtonElement = screen.getByLabelText(clearButtonLabel);
			await act(() => {
				fireEvent.click(clearButtonElement);
			});

			const searchInputElement = screen.getByLabelText(searchInputLabel);
			expect(searchInputElement.getAttribute('value')).toBe('');
			expect(mockOnChange).toHaveBeenCalledTimes(1);

			// Check event and target are correct
			const event = mockOnChange.mock.calls[0][0];
			const { target, type } = event;
			expect(type).toBe('change');
			expect(target.nodeName).toBe('INPUT');
			expect(target.value).toBe('');
		});
	});
});
