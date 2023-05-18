import { PropsWithChildren } from 'react';
import { BreadcrumbsProps } from '@ag.ds-next/react/breadcrumbs';
import { TOKEN_NAV_LINKS } from '../content/tokens';
import { SiteLayout } from './SiteLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';

type TokenLayoutProps = PropsWithChildren<{
	breadcrumbs?: BreadcrumbsProps['links'];
	editPath: string;
	title: string;
	description: string;
}>;

export const TokenLayout = ({
	breadcrumbs,
	editPath,
	children,
	title,
	description,
}: TokenLayoutProps) => {
	return (
		<SiteLayout applyMainElement={false}>
			<PageLayout
				applyMainElement={true}
				sideNav={{
					title: 'Tokens',
					titleLink: '/foundations/tokens',
					items: TOKEN_NAV_LINKS.map(({ label, href }) => ({
						href,
						label,
					})),
				}}
				editPath={editPath}
				breadcrumbs={breadcrumbs}
			>
				<PageTitle title={title} introduction={description} />
				{children}
			</PageLayout>
		</SiteLayout>
	);
};
