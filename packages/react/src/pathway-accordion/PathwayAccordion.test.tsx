import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { PathwayAccordion } from './PathwayAccordion';
import type { PathwayAccordionProps } from './PathwayAccordion';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderPathwayAccordion(props?: Partial<PathwayAccordionProps>) {
	return render(<PathwayAccordion {...props} />);
}

describe('PathwayAccordion', () => {
	it('renders correctly', () => {
		const { container } = renderPathwayAccordion();
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderPathwayAccordion();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
