import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, screen, cleanup } from '../../../../test-utils';
import { SideNav, SideNavProps } from './SideNav';
import { defaultTestingProps } from './test-utils';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderSideNav(props: SideNavProps) {
	return render(<SideNav {...props} />);
}

describe('SideNav', () => {
	it('renders correctly', () => {
		const { container } = renderSideNav(defaultTestingProps);
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderSideNav(defaultTestingProps);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('nav is accessibly labelled', () => {
		// Ensure that the nav is labelled with the title
		renderSideNav(defaultTestingProps);
		const el = screen.getByRole('navigation', { hidden: true });
		expect(el).toHaveAccessibleName(defaultTestingProps.title);
	});

	describe('renders the title correctly', () => {
		test('with link', () => {
			renderSideNav(defaultTestingProps);
			const el = screen.getByText(defaultTestingProps.title);
			expect(el.tagName).toBe('A');
			expect(el).toHaveAttribute('href', defaultTestingProps.titleLink);
			expect(el).toHaveAccessibleName(defaultTestingProps.title);
		});

		test('without link', () => {
			renderSideNav({ ...defaultTestingProps, titleLink: undefined });
			const el = screen.getByText(defaultTestingProps.title);
			expect(el.tagName).toBe('H2');
			expect(el).toHaveAccessibleName(defaultTestingProps.title);
		});
	});
});
