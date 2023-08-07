import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup } from '../../../../test-utils';
import { SkeletonHeading, SkeletonHeadingProps } from './SkeletonHeading';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderSkeletonHeading(props: SkeletonHeadingProps) {
	return render(<SkeletonHeading {...props} />);
}

describe('SkeletonHeading', () => {
	it('renders correctly', () => {
		const { container } = renderSkeletonHeading({ type: 'h1', width: '100%' });
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderSkeletonHeading({ type: 'h1', width: '100%' });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
