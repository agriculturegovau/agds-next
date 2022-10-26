import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import { SkipLinks, SkipLinksProps } from './SkipLinks';

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

	it('renders a valid HTML structure', () => {
		const { container } = renderSkipLinks({
			links: [
				{ href: '#main-content', label: 'Skip to main content' },
				{ href: '#main-nav', label: 'Skip to main navigation' },
			],
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
