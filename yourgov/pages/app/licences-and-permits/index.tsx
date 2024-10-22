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
import { StatusBadge } from '@ag.ds-next/react/status-badge';
import {
	TableWrapper,
	Table,
	TableHead,
	TableRow,
	TableHeader,
	TableBody,
	TableCell,
} from '@ag.ds-next/react/table';
import { H2 } from '@ag.ds-next/react/heading';
import { TextLink } from '@ag.ds-next/react/text-link';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { AppLayout } from '../../../components/Layout/AppLayout';
import { PageTitle } from '../../../components/PageTitle';
import { HelpCallout } from '../../../components/HelpCallout';
import type { NextPageWithLayout } from '../../_app';
import {
	mockApplicationHistory,
	mockCurrentApprovals,
} from '../../../data/mockLicencesAndPermits';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Manage permits" />
			<PageContent>
				<Stack gap={3}>
					<Breadcrumbs
						links={[
							{ label: 'Home', href: '/app' },
							{ label: 'Manage permits' },
						]}
					/>
					<PageTitle
						title="Manage permits"
						introduction="Stay compliant by registering for business licences and permits."
						callToAction={
							<CallToActionLink href="/app/licences-and-permits/apply/mobile-food-vendor-permit">
								Apply for a permit
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
								<Stack gap={1.5}>
									<H2 id="current-approvals-heading">Current approvals</H2>
									<TableWrapper>
										<Table aria-labelledby="current-approvals-heading">
											<TableHead>
												<TableRow>
													<TableHeader scope="col" width="25%">
														Approval number
													</TableHeader>
													<TableHeader scope="col" width="25%">
														Approval type
													</TableHeader>
													<TableHeader scope="col" width="25%">
														Approval status
													</TableHeader>
													<TableHeader scope="col" width="25%">
														Approved date
													</TableHeader>
												</TableRow>
											</TableHead>
											<TableBody>
												{mockCurrentApprovals.map((approval, index) => (
													<TableRow key={index}>
														<TableCell as="th" scope="row" fontWeight="bold">
															<TextLink href="/not-found">
																{approval.approvalNumber}
															</TextLink>
														</TableCell>
														<TableCell>{approval.type}</TableCell>
														<TableCell>
															<StatusBadge
																appearance="subtle"
																{...approval.status}
															/>
														</TableCell>
														<TableCell>{approval.approvedDate}</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableWrapper>
								</Stack>
							</TabPanel>
							<TabPanel>
								<Stack gap={1.5}>
									<H2 id="application-history-heading">Application history</H2>
									<TableWrapper>
										<Table aria-labelledby="application-history-heading">
											<TableHead>
												<TableRow>
													<TableHeader scope="col" width="25%">
														Reference number
													</TableHeader>
													<TableHeader scope="col" width="25%">
														Application type
													</TableHeader>
													<TableHeader scope="col" width="25%">
														Application status
													</TableHeader>
													<TableHeader
														scope="col"
														textAlign="right"
														width="25%"
													>
														Actions
													</TableHeader>
												</TableRow>
											</TableHead>
											<TableBody>
												{mockApplicationHistory.map((application, index) => (
													<TableRow key={index}>
														<TableCell as="th" scope="row" fontWeight="bold">
															<TextLink href="/not-found">
																{application.referenceNumber}
															</TextLink>
														</TableCell>
														<TableCell>{application.type}</TableCell>
														<TableCell>
															<StatusBadge
																appearance="subtle"
																{...application.status}
															/>
														</TableCell>
														<TableCell textAlign="right">
															<TextLink href="/not-found">View</TextLink>
														</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableWrapper>
								</Stack>
							</TabPanel>
						</TabPanels>
					</Tabs>

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
	return <AppLayout>{page}</AppLayout>;
};
