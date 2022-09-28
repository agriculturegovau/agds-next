import '@testing-library/jest-dom';
import 'html-validate/jest';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, screen } from '@testing-library/react';
import { SideNav } from './SideNav';

function Example() {
	return (
		<SideNav
			title="Lodging your tax return"
			titleLink="#"
			collapseTitle="In this section"
			items={[
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
			]}
			activePath="#in-detail/record-keeping/incorrect-amounts"
		/>
	);
}

describe('SideNav', () => {
	it('renders a valid HTML structure', () => {
		const { container } = render(<Example />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: { 'no-inline-style': 'off' },
		});
	});
	it('renders the title link correctly', () => {
		render(<Example />);
		const el = screen.getByText('Lodging your tax return');
		expect(el.tagName).toBe('A');
		expect(el).toHaveAttribute('href', '#');
		expect(el).toHaveAccessibleName('Lodging your tax return');
	});
});
