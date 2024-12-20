import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, screen } from '../../../../test-utils';
import { FeatureLinkList, FeatureLinkListProps } from './FeatureLinkList';

expect.extend(toHaveNoViolations);

function renderLinkList(props?: FeatureLinkListProps) {
	const { links, ...restProps } = props ?? {};
	return render(
		<FeatureLinkList
			links={
				links ?? [
					{
						label: 'Add a business with RAM',
						description:
							'Set up a business to act on behalf of it or invite others to. You can do this if you are responsible for this business in Relationship Authorisation Manager (RAM).',
						href: '#',
					},
					{
						label: 'Accept an invite',
						description:
							'Use an invite code from an email to act on behalf of a business.',
						href: '#',
					},
					{
						label: 'External link',
						description: 'This is an external link.',
						href: 'https://www.google.com',
						target: '_blank',
					},
				]
			}
			{...restProps}
		/>
	);
}

describe('FeatureLinkList', () => {
	it('renders correctly', () => {
		const { container } = renderLinkList({
			links: [
				{
					label: 'Add a business with RAM',
					description:
						'Set up a business to act on behalf of it or invite others to. You can do this if you are responsible for this business in Relationship Authorisation Manager (RAM).',
					href: '#',
				},
			],
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderLinkList();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('handles external links correctly', async () => {
		renderLinkList();
		const externalLink = await screen.getByRole('link', {
			name: 'External link , opens in a new tab',
		});
		expect(externalLink).toHaveAttribute('target', '_blank');
		expect(externalLink).toHaveAttribute('rel', 'noopener');
		expect(externalLink).toHaveTextContent('External link, opens in a new tab');
	});

	it('renders valid HTML with no a11y violations, when no description', async () => {
		const { container } = renderLinkList({
			links: [
				{
					label: 'Add a business with RAM',
					href: '#',
				},
				{
					label: 'Accept an invite',
					href: '#',
				},
			],
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
		expect(container).toMatchSnapshot();
	});
});
