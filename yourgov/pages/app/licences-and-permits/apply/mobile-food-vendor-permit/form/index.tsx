import { Fragment, ReactElement } from 'react';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { TaskList } from '@ag.ds-next/react/task-list';
import { Text } from '@ag.ds-next/react/text';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { SiteLayout } from '../../../../../../components/Layout/SiteLayout';
import { DocumentTitle } from '../../../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../../../components/FormHelpCallout';
import { PageTitle } from '../../../../../../components/PageTitle';
import {
	useGlobalForm,
	GlobalFormProvider,
	globalFormTasks,
} from '../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../_app';

const Page: NextPageWithLayout = () => {
	const { formTitle, typeSearchParm, getTaskStatus } = useGlobalForm();
	return (
		<Fragment>
			<DocumentTitle title={formTitle} />
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<DirectionLink
								href="/app/licences-and-permits/apply"
								direction="left"
							>
								Back
							</DirectionLink>
							<PageTitle
								title={formTitle}
								introduction="Seek approval for your food truck to operate in our area."
								callToAction={
									<Text as="p" color="muted">
										Takes around 20 minutes.
									</Text>
								}
							/>
							<TaskList
								ordered={true}
								items={globalFormTasks.map(
									({ formStateKey, href, label, message }) => ({
										label,
										message,
										href: href + `?type=${typeSearchParm}`,
										status: getTaskStatus(formStateKey),
									})
								)}
							/>
							<FormHelpCallout />
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<SiteLayout focusMode>
			<GlobalFormProvider>{page}</GlobalFormProvider>
		</SiteLayout>
	);
};
