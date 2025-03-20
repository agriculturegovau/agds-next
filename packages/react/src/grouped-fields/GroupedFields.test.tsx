import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, screen } from '../../../../test-utils';
import { Select } from '../select';
import { TextInput } from '../text-input';
import { GroupedFields } from './GroupedFields';
import type { GroupedFieldsProps } from './GroupedFields';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderGroupedFields(props?: Partial<GroupedFieldsProps>) {
	return render(
		<GroupedFields legend="Grouped fields" {...props}>
			{({ field1Props, field2Props }) => (
				<>
					<TextInput label="TextInput" {...field1Props} />
					<Select
						label="Select"
						options={[
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						]}
						placeholder="Please select"
						{...field2Props}
					/>
				</>
			)}
		</GroupedFields>
	);
}

const errorMessage = 'Enter a valid value';

async function getField1() {
	const inputs = screen.getAllByRole('textbox');
	const el = inputs[0];
	expect(el).toBeInstanceOf(HTMLInputElement);
	expect(el).toBeInTheDocument();
	return el as HTMLInputElement;
}

async function getField2() {
	const inputs = screen.getAllByRole('combobox');
	const el = inputs[0];
	expect(el).toBeInstanceOf(HTMLSelectElement);
	expect(el).toBeInTheDocument();
	return el as HTMLSelectElement;
}

async function getErrorMessage(message = errorMessage) {
	const el = await screen.findByText(message);
	expect(el).toBeInstanceOf(HTMLSpanElement);
	expect(el).toBeInTheDocument();
	return el as HTMLSpanElement;
}

describe('GroupedFields', () => {
	it('renders correctly', () => {
		const { container } = renderGroupedFields();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderGroupedFields();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('invalid: can render an invalid state when both fields are invalid', async () => {
		const { container } = renderGroupedFields({
			field1Invalid: true,
			field2Invalid: true,
			message: errorMessage,
		});
		expect(container).toMatchSnapshot();
		expect(await getField1()).toHaveAttribute('aria-invalid', 'true');
		expect(await getField2()).toHaveAttribute('aria-invalid', 'true');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});

	it('invalid: can render an invalid state when only from is invalid', async () => {
		renderGroupedFields({
			field1Invalid: true,
			field2Invalid: false,
			message: errorMessage,
		});
		expect(await getField1()).toHaveAttribute('aria-invalid', 'true');
		expect(await getField2()).toHaveAttribute('aria-invalid', 'false');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});

	it('invalid: can render an invalid state when only to is invalid', async () => {
		renderGroupedFields({
			field1Invalid: false,
			field2Invalid: true,
			message: errorMessage,
		});
		expect(await getField1()).toHaveAttribute('aria-invalid', 'false');
		expect(await getField2()).toHaveAttribute('aria-invalid', 'true');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});
});
