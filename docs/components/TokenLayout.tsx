import { PropsWithChildren } from 'react';
import { BreadcrumbsProps } from '@ag.ds-next/react/breadcrumbs';
import { TOKEN_NAV_LINKS } from '../content/tokens';
import { AppLayout } from './AppLayout';
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
		<AppLayout>
			<PageLayout
				sideNav={{
					title: 'Tokens',
					titleLink: '/tokens',
					items: TOKEN_NAV_LINKS,
				}}
				editPath={editPath}
				breadcrumbs={breadcrumbs}
			>
				<PageTitle title={title} introduction={description} />
				{children}
			</PageLayout>
		</AppLayout>
	);
};
