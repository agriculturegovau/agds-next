import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import {
	Tabs,
	TabList,
	TabButton,
	TabPanels,
	TabPanel,
} from '@ag.ds-next/react/tabs';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { AppLayout } from '../../../components/Layout/AppLayout';
import type { NextPageWithLayout } from '../../_app';
import { PageTitle } from '../../../components/PageTitle';
import { HelpCallout } from '../../../components/HelpCallout';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Manage licences and permits" />
			<PageContent>
				<Stack gap={3}>
					<Breadcrumbs
						links={[
							{ label: 'Home', href: '/app' },
							{ label: 'Manage licences and permits' },
						]}
					/>
					<PageTitle
						title="Manage licences and permits"
						introduction="Stay compliant by registering for business licences and permits."
						callToAction={
							<CallToActionLink href="/app/licences-and-permits/apply">
								Apply for a new licence or permit
							</CallToActionLink>
						}
					/>

					<Tabs>
						<TabList>
							<TabButton>Current approvals</TabButton>
							<TabButton>Application history</TabButton>
						</TabList>
						<TabPanels>
							<TabPanel>
								<p>TODO</p>
							</TabPanel>
							<TabPanel>
								<p>TODO</p>
							</TabPanel>
						</TabPanels>
					</Tabs>

					<Columns as="ul" cols={{ xs: 1, sm: 4 }}>
						<Column columnSpan={{ xs: 1, sm: 3 }}>
							<HelpCallout />
						</Column>
					</Columns>
				</Stack>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>;
};
