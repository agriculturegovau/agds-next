import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { TimeSelect } from './TimeSelect';
import type { TimeSelectProps } from './TimeSelect';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderTimeSelect(props?: Partial<TimeSelectProps>) {
	return render(<TimeSelect {...props} />);
}

describe('TimeSelect', () => {
	it('renders correctly', () => {
		const { container } = renderTimeSelect();
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderTimeSelect();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
