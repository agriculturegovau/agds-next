import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { IndicatorDot, IndicatorDotProps } from './IndicatorDot';

afterEach(cleanup);

function renderIndicatorDot(props: IndicatorDotProps) {
	return render(<IndicatorDot {...props} />);
}

describe('IndicatorDot', () => {
	it('renders correctly', () => {
		const { container } = renderIndicatorDot({});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderIndicatorDot({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	it('supports aria-label', () => {
		const { container } = renderIndicatorDot({ 'aria-label': 'test' });
		expect(container.querySelector('div')).toHaveAttribute(
			'aria-label',
			'test'
		);
	});
});
