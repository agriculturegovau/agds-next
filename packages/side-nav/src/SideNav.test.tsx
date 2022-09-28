import '@testing-library/jest-dom';
import 'html-validate/jest';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen, cleanup } from '@testing-library/react';
import { SideNav, SideNavProps } from './SideNav';

const exampleProps = {
	title: 'Lodging your tax return',
	titleLink: '#',
	collapseTitle: 'In this section',
	items: [
		{
			href: '#welcome',
			label: 'Welcome',
		},
		{
			href: '#one',
			label: 'Do you need to lodge a tax return?',
		},
		{
			href: '#two',
			label: 'Lodge online',
			items: [
				{
					href: '#three',
					label: 'Pre-filling your online tax return',
				},
			],
		},
		{ href: '#four', label: "What's new for individuals" },
		{ href: '#five', label: 'Why you may receive a tax bill' },
		{
			href: '#in-detail',
			label: 'In detail',
			items: [
				{
					href: '#in-detail/record-keeping',
					label: 'Record keeping',
					items: [
						{
							href: '#in-detail/record-keeping/tax',
							label: 'Keeping your tax records',
						},
						{
							href: '#in-detail/record-keeping/incorrect-amounts',
							label: 'Incorrect amounts',
						},
					],
				},
				{
					href: '#ten',
					label: 'Tax receipt',
				},
				{
					href: '#eleven',
					label: 'Pre-fill availability',
				},
			],
		},
	],
	activePath: '#in-detail/record-keeping/incorrect-amounts',
};

afterEach(cleanup);

function renderSideNav(props: SideNavProps) {
	return render(<SideNav {...props} />);
}

describe('SideNav', () => {
	it('renders correctly', () => {
		const { container } = renderSideNav(exampleProps);
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = renderSideNav(exampleProps);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: { 'no-inline-style': 'off' },
		});
	});
	describe('renders the title correctly', () => {
		test('with link', () => {
			renderSideNav(exampleProps);
			const el = screen.getByText(exampleProps.title);
			expect(el.tagName).toBe('A');
			expect(el).toHaveAttribute('href', exampleProps.titleLink);
			expect(el).toHaveAccessibleName(exampleProps.title);
		});
		test('without link', () => {
			renderSideNav({ ...exampleProps, titleLink: undefined });
			const el = screen.getByText(exampleProps.title);
			expect(el.tagName).toBe('H2');
			expect(el).toHaveAccessibleName(exampleProps.title);
		});
	});
});
