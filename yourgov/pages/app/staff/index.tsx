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
import { H1, H2 } from '@ag.ds-next/react/heading';
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
import { HelpReference } from '../../../components/HelpReference';
import { StaffMembersTable } from '../../../components/Staff/StaffMembersTable';
import {
	StaffProvider,
	useStaffGlobalState,
} from '../../../components/Staff/StaffProvider';
import { AccessRequestsTable } from '../../../components/Staff/AccessRequestsTable/AccessRequestsTable';
import { useLinkedBusinesses } from '../../../lib/useLinkedBusinesses';

const Page: NextPageWithLayout = () => {
	const { selectedBusiness } = useLinkedBusinesses();
	const { accessRequestsGetState } = useStaffGlobalState();
	const accessRequests = accessRequestsGetState();

	const tableRef = useRef<HTMLTableElement>(null);

	return (
		<Fragment>
			<DocumentTitle
				title={`Staff${
					selectedBusiness?.name ? ` | ${selectedBusiness.name}` : ''
				}`}
			/>

			<PageContent>
				<Stack gap={3}>
					<PageTitle
						callToAction={
							<Stack gap={2} maxWidth="42rem">
								<Details label="Why should I invite a new staff member?">
									<Stack gap={1}>
										<Text as="p">
											Inviting individuals to join your staff can bring numerous
											benefits to your business and help streamline your
											operations.
										</Text>
										<HelpReference
											drawerContent={
												<Stack gap={2}>
													<H1>Learn more about inviting a staff member</H1>
													<Text as="p" color="muted" fontSize="lg">
														Inviting individuals to join your staff can bring
														numerous benefits to your business and help
														streamline your operations.
													</Text>
													<Text as="p" fontSize="md">
														As your business grows, you’ll need to scale your
														team accordingly. Inviting new staff members allows
														you to expand your workforce in line with your
														evolving needs.
													</Text>
													<Text as="p" fontSize="md">
														Below are a list of the types of roles available:
													</Text>
													<H2>Owner</H2>
													<Text as="p" fontSize="md">
														Owners have the highest level of access. They can
														add, edit and remove managers and staff members.
														They can set rosters, send an receive messages with
														owners, employees and other managers.
													</Text>
													<H2>Manager</H2>
													<Text as="p" fontSize="md">
														Managers can add, edit and remove staff members.
														They can set rosters, send an receive messages with
														owners, employees and other managers.
													</Text>
													<H2>Employee</H2>
													<Text as="p" fontSize="md">
														Employees can see their shifts, send an receive
														messages with managers and edit their personal and
														contact information.
													</Text>
													<HelpCallout />
												</Stack>
											}
											linkContent="Learn more about inviting a staff member"
											linkHref="https://exports.agriculture.gov.au/help/page/example-reference-article"
										/>
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
						introduction={
							<>
								Manage who can act for{' '}
								<Text fontSize="md" fontWeight="bold">
									Walker‘s Frozen Food
								</Text>
								.
							</>
						}
						title="Staff"
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

									<AccessRequestsTable />
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
