import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { TimePicker } from './TimePicker';
import type { TimePickerProps } from './TimePicker';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderTimePicker(props?: Partial<TimePickerProps>) {
	return render(<TimePicker {...props} />);
}

describe('TimePicker', () => {
	it('renders correctly', () => {
		const { container } = renderTimePicker();
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderTimePicker();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
