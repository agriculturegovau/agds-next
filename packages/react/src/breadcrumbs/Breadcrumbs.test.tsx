import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, screen } from '../../../../test-utils';
import { Breadcrumbs } from './Breadcrumbs';
import type { BreadcrumbsProps } from './Breadcrumbs';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderBreadcrumbs({
	links = [
		{ href: '#home', label: 'Home' },
		{ href: '#establishments', label: 'Establishments' },
		{ label: 'Applications' },
	],
	...props
}: Partial<BreadcrumbsProps>) {
	return render(<Breadcrumbs links={links} {...props} />);
}

describe('Breadcrumbs', () => {
	it('renders correctly', () => {
		const { container } = renderBreadcrumbs({});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderBreadcrumbs({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders a default aria-label', async () => {
		renderBreadcrumbs({});
		const navEl = await screen.getByRole('navigation');
		expect(navEl).toHaveAttribute('aria-label', 'breadcrumb');
	});

	it('announces "current page" to screen reader users', async () => {
		renderBreadcrumbs({});
		const el = await screen.getByText('Applications');
		expect(el.textContent).toBe('Applications (current page)');
	});
});
