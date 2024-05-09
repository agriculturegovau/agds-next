import { Fragment, ReactElement } from 'react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { Details } from '@ag.ds-next/react/details';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { TaskList } from '@ag.ds-next/react/task-list';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/react/button';
import { DocumentTitle } from '../../../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../../../components/FormHelpCallout';
import {
	GlobalFormProvider,
	globalFormTasks,
	useGlobalForm,
} from '../../../../../../components/FormMobileFoodVendorPermit';
import { SiteLayout } from '../../../../../../components/Layout/SiteLayout';
import { PageTitle } from '../../../../../../components/PageTitle';
import type { NextPageWithLayout } from '../../../../../_app';

const Page: NextPageWithLayout = () => {
	const { formTitle, getTaskStatus } = useGlobalForm();
	return (
		<Fragment>
			<DocumentTitle title={formTitle} />
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<DirectionLink href="/app/licences-and-permits" direction="left">
								Back
							</DirectionLink>
							<PageTitle
								title={formTitle}
								introduction="Seek approval for your food truck to operate in our area."
								callToAction={
									<>
										<Details
											label="What you need to apply for a permit"
											iconBefore
										>
											<Prose>
												<p>
													To complete this application you will need to provide:
												</p>
												<ul>
													<li>
														vehicle registration details and vehicle plans
													</li>
													<li>operational plan of management</li>
													<li>food safety supervisor certificate</li>
													<li>
														names of any employees who will be handling food.
													</li>
													<li>
														once you have confirmed business and employee
														details we will provide a checklist of required
														documents
													</li>
												</ul>
												<p>
													<TextLink href="#not-sure-where-to-link-to">
														Learn more about applying for a permit
													</TextLink>
												</p>
											</Prose>
										</Details>
										<Text as="p" color="muted">
											Takes around 20 minutes.
										</Text>
									</>
								}
							/>
							<TaskList
								ordered={true}
								items={globalFormTasks.map(
									({ formStateKey, href, label, message }) => ({
										label,
										message,
										href,
										status: getTaskStatus(formStateKey),
									})
								)}
							/>
							<ButtonGroup>
								<ButtonLink
									variant="secondary"
									href="/app/licences-and-permits"
								>
									Save and exit
								</ButtonLink>
								<ButtonLink variant="tertiary" href="/app/licences-and-permits">
									Cancel
								</ButtonLink>
							</ButtonGroup>
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
