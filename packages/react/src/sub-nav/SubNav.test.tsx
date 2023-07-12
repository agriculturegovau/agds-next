import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { SubNav, SubNavProps } from './SubNav';

afterEach(cleanup);

function renderSubNav({
	activePath = '/code',
	links = [
		{ href: '/', label: 'Usage' },
		{ href: '/code', label: 'Code' },
		{ href: '/content', label: 'Content' },
		{ href: '/accessibility', label: 'Accessibility' },
	],
}: Partial<SubNavProps>) {
	return render(<SubNav activePath={activePath} links={links} />);
}

describe('SubNav', () => {
	it('renders correctly', () => {
		const { container } = renderSubNav({});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderSubNav({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	describe('Highlights the correct item based on the `activePath`', () => {
		test('matches basic path', () => {
			const { container } = renderSubNav({});
			const currentPage = container.querySelector("[aria-current='page']");
			expect(currentPage).toHaveTextContent('Code');
		});

		test('matches path with hash', () => {
			const { container } = renderSubNav({ activePath: '/code#heading-id' });
			const currentPage = container.querySelector("[aria-current='page']");
			expect(currentPage).toHaveTextContent('Code');
		});

		test('matches nested path', () => {
			const { container } = renderSubNav({ activePath: '/code/sub-path' });
			const currentPage = container.querySelector("[aria-current='page']");
			expect(currentPage).toHaveTextContent('Code');
		});
	});
});
