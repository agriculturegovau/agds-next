import '@testing-library/jest-dom';
import 'html-validate/jest';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../../test-utils';
import { SkeletonBox, SkeletonBoxProps } from './SkeletonBox';

afterEach(cleanup);

function renderSkeletonBox(props: SkeletonBoxProps) {
	return render(<SkeletonBox {...props} />);
}

describe('SkeletonBox', () => {
	it('renders correctly', () => {
		const { container } = renderSkeletonBox({
			width: '200px',
			height: '200px',
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderSkeletonBox({
			width: '200px',
			height: '200px',
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: { 'no-inline-style': 'off' },
		});
	});
});
