import '@testing-library/jest-dom';
import 'html-validate/jest';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../../test-utils';
import { SkeletonText, SkeletonTextProps } from './SkeletonText';

afterEach(cleanup);

function renderSkeletonText(props: SkeletonTextProps) {
	return render(<SkeletonText {...props} />);
}

describe('SkeletonText', () => {
	it('renders correctly', () => {
		const { container } = renderSkeletonText({ fontSize: 'sm', width: '100%' });
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderSkeletonText({ fontSize: 'sm', width: '100%' });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: { 'no-inline-style': 'off' },
		});
	});
});
