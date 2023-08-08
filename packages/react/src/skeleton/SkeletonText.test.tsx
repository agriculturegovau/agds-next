import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup } from '../../../../test-utils';
import { SkeletonText, SkeletonTextProps } from './SkeletonText';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderSkeletonText(props: SkeletonTextProps) {
	return render(<SkeletonText {...props} />);
}

describe('SkeletonText', () => {
	it('renders correctly', () => {
		const { container } = renderSkeletonText({ fontSize: 'sm', width: '100%' });
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderSkeletonText({ fontSize: 'sm', width: '100%' });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
