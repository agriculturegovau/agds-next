import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { IndicatorDot, IndicatorDotProps } from './IndicatorDot';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderIndicatorDot(props: IndicatorDotProps) {
	return render(<IndicatorDot {...props} />);
}

describe('IndicatorDot', () => {
	it('renders correctly', () => {
		const { container } = renderIndicatorDot({});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderIndicatorDot({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('supports aria-label', () => {
		const { container } = renderIndicatorDot({ 'aria-label': 'test' });
		expect(container.querySelector('div')).toHaveAttribute(
			'aria-label',
			'test'
		);
	});
});
