import { Stack } from '@ag.ds-next/react/box';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { PageContent } from '@ag.ds-next/react/content';
import { H1 } from '@ag.ds-next/react/heading';

export const DashboardPageTitle = () => {
	return (
		<PageContent background="bodyAlt">
			<Stack gap={1}>
				<Breadcrumbs
					links={[
						{ href: '#', label: 'Home' },
						{ href: '#', label: 'Data and insights' },
						{ label: 'Applications' },
					]}
				/>
				<H1>Establishments for audit</H1>
			</Stack>
		</PageContent>
	);
};
