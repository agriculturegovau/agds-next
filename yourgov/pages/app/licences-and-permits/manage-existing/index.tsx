import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { AppLayout } from '../../../../components/Layout/AppLayout';
import { PageTitle } from '../../../../components/PageTitle';
import { HelpCallout } from '../../../../components/HelpCallout';
import type { NextPageWithLayout } from '../../../_app';
import { GlobalFormProvider } from '../../../../components/FormMobileFoodVendorPermit';
import { ApplicationHistory } from '../../../../components/FormMobileFoodVendorPermit/ApplicationHistory';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Manage existing permits" />
			<PageContent>
				<Stack gap={3}>
					<Breadcrumbs
						links={[
							{ label: 'Dashboard', href: '/app/dashboard' },
							{ label: 'Permits', href: '/app/licences-and-permits' },
							{ label: 'Manage existing permits' },
						]}
					/>
					<PageTitle
						title="Manage existing permits"
						introduction="Stay compliant by registering for business permits."
					/>
					<CallToActionLink href="/app/licences-and-permits/apply-for-new-permit">
						Apply for a permit
					</CallToActionLink>
					<ApplicationHistory />

					<Columns cols={{ xs: 1, sm: 4 }}>
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
	return (
		<AppLayout>
			<GlobalFormProvider>{page}</GlobalFormProvider>
		</AppLayout>
	);
};
