import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render, screen } from '@testing-library/react';
import { Breadcrumbs } from './Breadcrumbs';
import type { BreadcrumbsProps } from './Breadcrumbs';

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

	it('renders a valid HTML structure', () => {
		const { container } = renderBreadcrumbs({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	it('renders a default aria-label', async () => {
		renderBreadcrumbs({});
		const navEl = await screen.getByRole('navigation');
		expect(navEl).toHaveAttribute('aria-label', 'breadcrumb');
	});

	it('announces "current page" to screen reader users', async () => {
		renderBreadcrumbs({});
		const el = await screen.getByText('Applications');
		expect(el.parentElement?.textContent).toBe('Applications (current page)');
	});
});
