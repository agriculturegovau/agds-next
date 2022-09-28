import { PropsWithChildren } from 'react';
import { AppLayout } from './AppLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';

export const navLinks = [
	{ href: '/tokens/color', label: 'Color' },
	{ href: '/tokens/breakpoints', label: 'Breakpoints' },
	{ href: '/tokens/border-radius', label: 'Border Radius' },
	{ href: '/tokens/border-width', label: 'Border Widths' },
	{ href: '/tokens/max-width', label: 'Max Width' },
	{ href: '/tokens/spacing', label: 'Spacing' },
	{ href: '/tokens/typography', label: 'Typography' },
];

type TokenLayoutProps = PropsWithChildren<{
	// breadcrumbs: {}
	editPath: string;
	title: string;
	description: string;
}>;

export const TokenLayout = ({
	// breadcrumbs,
	editPath,
	children,
	title,
	description,
}: TokenLayoutProps) => {
	return (
		<AppLayout>
			<PageLayout
				sideNav={{
					title: 'Tokens',
					titleLink: '/tokens',
					items: navLinks,
				}}
				editPath={editPath}
				// breadcrumbs={breadcrumbs}
			>
				<PageTitle title={title} introduction={description} />

				{children}
			</PageLayout>
		</AppLayout>
	);
};
