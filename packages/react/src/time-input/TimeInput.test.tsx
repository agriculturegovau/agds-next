import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { TimeInput } from './TimeInput';
import type { TimeInputProps } from './TimeInput';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderTimeInput(props?: Partial<TimeInputProps>) {
	return render(<TimeInput label="Example" {...props} />);
}

describe('TimeInput', () => {
	it('renders correctly', () => {
		const { container } = renderTimeInput();
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderTimeInput();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
