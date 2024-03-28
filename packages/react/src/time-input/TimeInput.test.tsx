import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import 'html-validate/jest';
import { useState } from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, screen } from '../../../../test-utils';
import { TimeInput, type TimeInputProps, type TimeValue } from './TimeInput';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

type ControlledTimeInputProps = Omit<TimeInputProps, 'label'>;

function renderTimeInput(props?: ControlledTimeInputProps) {
	return render(<ControlledTimeInput {...props} />);
}

function ControlledTimeInput({
	onChange: onChangeProp,
	value: valueProp,
	...props
}: ControlledTimeInputProps) {
	const [value, setValue] = useState<TimeValue | undefined>(valueProp);

	function onChange(value: TimeValue) {
		setValue(value);
		onChangeProp?.(value);
	}

	return (
		<TimeInput label="Time" onChange={onChange} value={value} {...props} />
	);
}

async function getInput() {
	const el = await screen.getByRole('textbox');
	expect(el).toBeInstanceOf(HTMLInputElement);
	expect(el).toBeInTheDocument();
	return el as HTMLInputElement;
}

async function getErrorMessage() {
	const el = await screen.findByText(errorMessage);
	expect(el).toBeInstanceOf(HTMLSpanElement);
	expect(el).toBeInTheDocument();
	return el as HTMLSpanElement;
}

const errorMessage = 'Enter a valid time';

describe('TimeInput', () => {
	it('renders correctly', () => {
		const { container } = renderTimeInput();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderTimeInput();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			// react 18s `useId` break this rule
			rules: { 'valid-id': 'off' },
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('updates correctly based on the `value` prop', async () => {
		const { container } = renderTimeInput({
			value: {
				raw: '2130',
			},
		});
		expect(container).toMatchSnapshot();

		expect(await getInput()).toHaveValue('9:30 pm');
	});

	it('can render an invalid state', async () => {
		renderTimeInput({
			invalid: true,
			message: errorMessage,
			value: { raw: 'a' },
		});
		expect(await getInput()).toHaveAttribute('aria-invalid', 'true');
		expect(await getErrorMessage()).toHaveTextContent(errorMessage);
	});

	it('emits the correct TimeValue in an `onChange` callback', async () => {
		const onChange = jest.fn();
		const user = userEvent.setup();

		renderTimeInput({
			onChange,
		});
		const input = await getInput();

		await user.type(input, '930');
		await user.keyboard('{Tab}');

		expect(onChange).toHaveBeenCalledWith({
			formatted: '9:30 am',
			raw: '09:30',
		});
	});

	it('formats valid time to the default time format (h:mm aaa) onBlur', async () => {
		const user = userEvent.setup();

		renderTimeInput();
		const input = await getInput();

		await user.type(input, '09:30');
		await user.keyboard('{Tab}');

		expect(input).toHaveValue('9:30 am');
	});

	it('formats valid time to the `timeFormat` prop onBlur', async () => {
		const user = userEvent.setup();

		renderTimeInput({
			timeFormat: 'HH:mm',
		});
		const input = await getInput();

		await user.type(input, '9:30 pm');
		await user.keyboard('{Tab}');

		expect(input).toHaveValue('21:30');
	});
});
