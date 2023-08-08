import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { SkipLinks, SkipLinksProps } from './SkipLinks';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderSkipLinks(props: SkipLinksProps) {
	return render(<SkipLinks {...props} />);
}

describe('SkipLinks', () => {
	it('renders correctly', () => {
		const { container } = renderSkipLinks({
			links: [
				{ href: '#main-content', label: 'Skip to main content' },
				{ href: '#main-nav', label: 'Skip to main navigation' },
			],
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderSkipLinks({
			links: [
				{ href: '#main-content', label: 'Skip to main content' },
				{ href: '#main-nav', label: 'Skip to main navigation' },
			],
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
