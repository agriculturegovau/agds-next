import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup, screen } from '../../../test-utils';
import { LinkList, LinkListProps } from './LinkList';

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

	it('renders a valid HTML structure', () => {
		const { container } = renderLinkList();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	it('handles external links correctly', async () => {
		renderLinkList();
		const externalLink = await screen.queryByText('External link');
		expect(externalLink).toHaveAttribute('target', '_blank');
		expect(externalLink).toHaveAttribute('rel', 'noopener');
		expect(externalLink).toHaveTextContent('External link, opens in a new tab');
	});
});
