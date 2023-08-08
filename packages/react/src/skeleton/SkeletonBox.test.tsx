import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup } from '../../../../test-utils';
import { SkeletonBox, SkeletonBoxProps } from './SkeletonBox';

expect.extend(toHaveNoViolations);

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

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderSkeletonBox({
			width: '200px',
			height: '200px',
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
