import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup, screen } from '../../../../test-utils';
import { LinkList, LinkListProps } from './LinkList';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderLinkList(props?: Partial<LinkListProps>) {
	return render(
		<LinkList
			links={[
				{ href: '#', label: 'Home' },
				{ href: '#', label: 'Establishments' },
				{ href: '#', label: 'Applications' },
				{
					href: 'https://design-system.agriculture.gov.au',
					label: 'External link',
					target: '_blank',
					rel: 'noopener',
				},
			]}
			{...props}
		/>
	);
}

describe('LinkList', () => {
	it('renders correctly', () => {
		const { container } = renderLinkList();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderLinkList();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('handles external links correctly', async () => {
		renderLinkList();
		const externalLink = await screen.queryByText('External link');
		expect(externalLink).toHaveAttribute('target', '_blank');
		expect(externalLink).toHaveAttribute('rel', 'noopener');
		expect(externalLink).toHaveTextContent('External link, opens in a new tab');
	});
});
