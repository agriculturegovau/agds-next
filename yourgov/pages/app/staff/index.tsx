import { Fragment, ReactElement, useRef } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
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
import { Text } from '@ag.ds-next/react/text';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Details } from '@ag.ds-next/react/details';
import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
import { Flex } from '@ag.ds-next/react/flex';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { AppLayout } from '../../../components/Layout/AppLayout';
import { PageTitle } from '../../../components/PageTitle';
import { HelpCallout } from '../../../components/HelpCallout';
import type { NextPageWithLayout } from '../../_app';
import { mockApplicationHistory } from '../../../data/mockLicencesAndPermits';
import { StaffMembersTable } from '../../../components/Staff/StaffMembersTable';
import {
	StaffProvider,
	useStaffGlobalState,
} from '../../../components/Staff/StaffProvider';

const Page: NextPageWithLayout = () => {
	const { accessRequestsGetState } = useStaffGlobalState();
	const accessRequests = accessRequestsGetState();

	const tableRef = useRef<HTMLTableElement>(null);

	return (
		<Fragment>
			<DocumentTitle title="Staff" />

			<PageContent>
				<Stack gap={3}>
					<PageTitle
						title="Staff"
						introduction={
							<>
								Manage who can act for{' '}
								<Text fontSize="md" fontWeight="bold">
									Walker‘s Frozen Food
								</Text>
								.
							</>
						}
						callToAction={
							<Stack gap={2} maxWidth="42rem">
								<Details label="Why should I invite a new staff member?">
									<Stack gap={1}>
										<Text as="p">
											Inviting individuals to join your staff can bring numerous
											benefits to your business and help streamline your
											operations.
										</Text>

										<TextLink>
											Learn more about inviting a staff member
										</TextLink>
									</Stack>
								</Details>

								<ButtonLink
									alignSelf="start"
									href="/app/staff/invite-staff-member"
								>
									Invite staff member
								</ButtonLink>
							</Stack>
						}
					/>
					<Tabs contained={false}>
						<TabList>
							<TabButton>Staff members</TabButton>

							<TabButton>
								<Flex gap={0.5}>
									Access requests{' '}
									{accessRequests.length > 0 && (
										<NotificationBadge
											tone="action"
											value={accessRequests.length}
										/>
									)}
								</Flex>
							</TabButton>
						</TabList>

						<TabPanels>
							<TabPanel>
								<Stack gap={3}>
									<H2 id="staff-members-heading">Staff members</H2>

									<StaffMembersTable selectable tableRef={tableRef} />
								</Stack>
							</TabPanel>

							<TabPanel>
								<Stack gap={1.5}>
									<H2 id="access-requests-heading">Access requests</H2>

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
	return (
		<AppLayout>
			<StaffProvider>{page}</StaffProvider>
		</AppLayout>
	);
};
