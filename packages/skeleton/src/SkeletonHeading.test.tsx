import '@testing-library/jest-dom';
import 'html-validate/jest';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../test-utils';
import { SkeletonHeading, SkeletonHeadingProps } from './SkeletonHeading';

afterEach(cleanup);

function renderSkeletonHeading(props: SkeletonHeadingProps) {
	return render(<SkeletonHeading {...props} />);
}

describe('SkeletonHeading', () => {
	it('renders correctly', () => {
		const { container } = renderSkeletonHeading({ type: 'h1', width: '100%' });
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderSkeletonHeading({ type: 'h1', width: '100%' });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: { 'no-inline-style': 'off' },
		});
	});
});
