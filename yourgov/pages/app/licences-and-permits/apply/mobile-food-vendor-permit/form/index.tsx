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
	useFormMobileFoodVendorPermit,
	FormMobileFoodVendorPermit,
} from '../../../../../../components/FormMobileFoodVendorPermit/Context';
import type { NextPageWithLayout } from '../../../../../_app';

const TASKS = [
	{
		label: 'Provide business details',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1/step-1',
		message: 'Confirm your business details',
	},
	{
		label: 'Provide employee details',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-2/step-1',
		message: 'Provide employee names and email addresses',
	},
	{
		label: 'Upload documents',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-3/step-1',
		message: 'Provide the documents required for your application',
	},
	{
		label: 'Review and submit',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-4/step-1',
		message: 'Check all details and submit your application',
	},
];

const Page: NextPageWithLayout = () => {
	const { formTitle, typeSearchParm, getTaskStatus } =
		useFormMobileFoodVendorPermit();
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
								introduction="Seek approval for your food van or truck to operate in our area."
								callToAction={
									<Text as="p" color="muted">
										Takes around 20 minutes.
									</Text>
								}
							/>
							<TaskList
								ordered={true}
								items={TASKS.map((task, idx) => ({
									...task,
									href: task.href + `?type=${typeSearchParm}`,
									status: getTaskStatus(idx),
								}))}
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
			<FormMobileFoodVendorPermit>{page}</FormMobileFoodVendorPermit>
		</SiteLayout>
	);
};
