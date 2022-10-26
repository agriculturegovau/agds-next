import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import { SubNav, SubNavProps } from './SubNav';

afterEach(cleanup);

function renderSubNav(props: SubNavProps) {
	return render(<SubNav {...props} />);
}

describe('SubNav', () => {
	it('renders correctly', () => {
		const { container } = renderSubNav({
			activePath: '#code',
			links: [
				{ href: '#usage', label: 'Usage' },
				{ href: '#code', label: 'Code' },
				{ href: '#content', label: 'Content' },
				{ href: '#accessibility', label: 'Accessibility' },
			],
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderSubNav({
			activePath: '#code',
			links: [
				{ href: '#usage', label: 'Usage' },
				{ href: '#code', label: 'Code' },
				{ href: '#content', label: 'Content' },
				{ href: '#accessibility', label: 'Accessibility' },
			],
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
