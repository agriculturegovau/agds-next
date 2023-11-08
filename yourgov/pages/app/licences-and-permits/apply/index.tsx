import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { AppLayout } from '../../../../components/Layout/AppLayout';
import type { NextPageWithLayout } from '../../../_app';
import { PageTitle } from '../../../../components/PageTitle';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Manage licences and permits" />
			<PageContent>
				<Stack gap={3}>
					<Breadcrumbs
						links={[
							{ label: 'Home', href: '/app' },
							{
								label: 'Manage licences and permits',
								href: '/app/licences-and-permits',
							},
							{ label: 'Apply for a new licence or permit' },
						]}
					/>
					<PageTitle title="Apply for a new licence or permit" />

					<p>TODO</p>
				</Stack>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>;
};
