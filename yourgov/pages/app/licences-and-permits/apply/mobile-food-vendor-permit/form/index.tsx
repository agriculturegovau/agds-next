import { Fragment, ReactElement } from 'react';
import { useSearchParams } from 'next/navigation';
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
// import {
// 	FormApplyFoodTruckPermitContext,
// 	useFormApplyFoodTruckPermit,
// } from '../../../../../../components/FormApplyFoodTruckPermit';
import type { NextPageWithLayout } from '../../../../../_app';

const TASKS = [
	{
		label: 'Provide business details',
		message: 'Confirm your business details',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1',
	},
	{
		label: 'Provide employee details',
		message: 'Provide employee names and email addresses',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-2',
	},
	{
		label: 'Upload documents',
		message: 'Provide the documents required for your application',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-3',
	},
	{
		label: 'Review and submit',
		message: 'Check all details and submit your application',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-4',
	},
];

const Page: NextPageWithLayout = () => {
	const { title, getTaskStatus } = useFormApplyFoodTruckPermit();
	const type = useSearchParams().get('type');
	return (
		<Fragment>
			<DocumentTitle title={title} />
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
								title={title}
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
									href: task.href + `?type=${type}`,
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
			<FormApplyFoodTruckPermitContext>{page}</FormApplyFoodTruckPermitContext>
		</SiteLayout>
	);
};
