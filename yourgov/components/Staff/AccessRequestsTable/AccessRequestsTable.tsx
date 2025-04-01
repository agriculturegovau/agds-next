import { useEffect, useMemo, useRef, useState } from 'react';
import {
	Table,
	TableBatchActionsBar,
	TableBatchActionsTitle,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { TextLink } from '@ag.ds-next/react/text-link';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Flex } from '@ag.ds-next/react/flex';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import { Stack } from '@ag.ds-next/react/stack';
import { Box } from '@ag.ds-next/react/box';
import { mapSpacing, useTernaryState } from '@ag.ds-next/react/core';
import { Divider } from '@ag.ds-next/react/divider';
import { AvatarIcon } from '@ag.ds-next/react/icon';
import { Heading } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import { plural } from '../lib/utils';
import { useStaffGlobalState } from '../StaffProvider';
import { StaffMemberAccessRequest } from '../lib/accessRequests';
import { ModalConfirmApproveAccess } from './ModalConfirmApproveAccess';
import { ModalConfirmRejectAccess } from './ModalConfirmRejectAccess';
import { ModalUnavailableFeature } from './ModalUnavailableFeature';

export const AccessRequestsTable = () => {
	const pageAlertRef = useRef<HTMLDivElement>(null);

	const { accessRequestsDelete, accessRequestsGetState, accessRequestsUpdate } =
		useStaffGlobalState();
	const [rowSelections, setRowSelections] = useState<
		StaffMemberAccessRequest['id'][]
	>([]);
	const [itemWithActiveAction, setItemWithActiveAction] =
		useState<StaffMemberAccessRequest>();

	const [isApproveModalOpen, openApproveModal, closeApproveModal] =
		useTernaryState(false);
	const [isRejectModalOpen, openRejectModal, closeRejectModal] =
		useTernaryState(false);
	const [isUnavailableModalOpen, openUnavailableModal, closeUnavailableModal] =
		useTernaryState(false);

	const [successMessageContent, setSuccessMessageContent] = useState<
		StaffMemberAccessRequest | StaffMemberAccessRequest[]
	>();
	const [successMessageType, setSuccessMessageType] = useState<
		'approved' | 'rejected'
	>();

	const accessRequests = accessRequestsGetState();

	const staffIdToStaffMemberMap = useMemo(
		() =>
			accessRequests.reduce<
				Record<StaffMemberAccessRequest['id'], StaffMemberAccessRequest>
			>(
				(acc, staffMember) =>
					staffMember?.firstName
						? {
								...acc,
								[staffMember.id]: staffMember,
						  }
						: acc,
				{}
			),
		[accessRequests]
	);

	const items = rowSelections.map((staffMemberId) => {
		return staffIdToStaffMemberMap[staffMemberId];
	});

	const clearRowSelections = () => setRowSelections([]);

	const onConfirmApprove = () => {
		setSuccessMessageType('approved');
		setSuccessMessageContent(itemWithActiveAction || items);
		clearRowSelections();
		accessRequestsUpdate({
			accessRequestsToUpdate: itemWithActiveAction || items,
			updates: {
				status: 'Active',
			},
		});
		setItemWithActiveAction(undefined);
		closeApproveModal();
	};

	const onConfirmReject = () => {
		setSuccessMessageType('rejected');
		setSuccessMessageContent(itemWithActiveAction || items);
		clearRowSelections();
		accessRequestsDelete(itemWithActiveAction || items);
		setItemWithActiveAction(undefined);
		closeRejectModal();
	};

	const isSelectAllCheckboxChecked =
		rowSelections.length === accessRequests.length;
	const isSelectAllCheckboxIndeterminate =
		rowSelections.length > 0 && !isSelectAllCheckboxChecked;
	const onChangeSelectAllRows = () => {
		if (isSelectAllCheckboxChecked) {
			clearRowSelections();
		} else {
			setRowSelections(accessRequests.map(({ id }) => id));
		}
	};

	useEffect(() => {
		if (successMessageContent && successMessageType) {
			setTimeout(() => {
				pageAlertRef.current?.focus();
			}, 500);
		}
	}, [successMessageContent, successMessageType]);

	return (
		<>
			<Box
				css={{
					display:
						successMessageContent && successMessageType ? 'block' : 'none',
				}}
				focusRingFor="all"
				ref={pageAlertRef}
				tabIndex={-1}
			>
				<SectionAlert
					onClose={() => {
						setSuccessMessageContent(undefined);
					}}
					title={`Access request for ${
						Array.isArray(successMessageContent)
							? successMessageContent.length
							: `${successMessageContent?.firstName} ${successMessageContent?.lastName}`
					} ${plural(
						Array.isArray(successMessageContent)
							? successMessageContent.length
							: 1,
						'person has',
						'people have'
					)} been ${successMessageType}`}
					tone="success"
				>
					<Text as="p">
						Staff members will receive an email letting them know that their
						request has been {successMessageType}.
					</Text>
				</SectionAlert>
			</Box>
			<Stack gap={0.5}>
				{accessRequests.length === 0 ? (
					<Stack alignItems="flex-start" gap={2} paddingY={1} role="status">
						<Stack gap={1}>
							<AvatarIcon color="muted" size="lg" />

							<Heading fontSize="lg" type="h3">
								There are no access requests
							</Heading>

							<Text>All access requests have been actioned.</Text>
						</Stack>
					</Stack>
				) : (
					<>
						<Box css={{ marginLeft: mapSpacing(0.75) }}>
							<Checkbox
								checked={isSelectAllCheckboxChecked}
								indeterminate={isSelectAllCheckboxIndeterminate}
								onChange={onChangeSelectAllRows}
								size="sm"
							>
								Select all rows
							</Checkbox>
						</Box>

						<Divider />

						<TableWrapper>
							<Table aria-labelledby="access-requests-heading">
								<TableHead>
									<TableRow>
										<TableHeader scope="col" width="5rem">
											Select
										</TableHeader>

										<TableHeader scope="col">Name</TableHeader>

										<TableHeader scope="col">Role</TableHeader>

										<TableHeader scope="col">Status</TableHeader>

										<TableHeader scope="col" width="5rem">
											Actions
										</TableHeader>
									</TableRow>
								</TableHead>

								<TableBody>
									{accessRequests.map((staffMember) => {
										const name = `${staffMember.firstName} ${staffMember.lastName}`;
										return (
											<TableRow
												key={staffMember.id}
												selected={rowSelections.includes(staffMember.id)}
											>
												<TableCell>
													<Checkbox
														checked={rowSelections.includes(staffMember.id)}
														onChange={() =>
															setRowSelections((prevrowSelections) => {
																const isChecked = prevrowSelections.includes(
																	staffMember.id
																);

																return isChecked
																	? prevrowSelections.filter(
																			(id) => id !== staffMember.id
																	  )
																	: [...prevrowSelections, staffMember.id];
															})
														}
														size="sm"
													>
														<VisuallyHidden>{`Select ${name}`}</VisuallyHidden>
													</Checkbox>
												</TableCell>

												<TableCell
													as="th"
													fontWeight="bold"
													id={`${staffMember.id}-name`}
													scope="row"
												>
													<TextLink
														href="/not-found"
														onClick={(event) => {
															event.preventDefault();
															openUnavailableModal();
														}}
													>
														{name}
													</TextLink>
												</TableCell>

												<TableCell>{staffMember.role}</TableCell>

												<TableCell>
													<StatusBadge
														appearance="subtle"
														label={staffMember.status}
														tone="infoMedium"
													/>
												</TableCell>

												<TableCell>
													<Flex gap={1}>
														<Button
															aria-describedby={`${staffMember.id}-name`}
															onClick={() => {
																setItemWithActiveAction(staffMember);
																openApproveModal();
															}}
															variant="text"
														>
															Approve
														</Button>

														<Button
															aria-describedby={`${staffMember.id}-name`}
															onClick={() => {
																setItemWithActiveAction(staffMember);
																openRejectModal();
															}}
															variant="text"
														>
															Reject
														</Button>
													</Flex>
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</TableWrapper>
					</>
				)}

				{rowSelections.length > 0 && (
					<TableBatchActionsBar>
						<TableBatchActionsTitle>
							Apply action to {rowSelections.length}{' '}
							{plural(rowSelections.length, 'item', 'items')}
						</TableBatchActionsTitle>

						<ButtonGroup>
							<Button onClick={openApproveModal} size="sm" variant="secondary">
								Approve access
							</Button>

							<Button onClick={openRejectModal} size="sm" variant="secondary">
								Reject access
							</Button>

							<Button onClick={clearRowSelections} size="sm" variant="tertiary">
								Cancel
							</Button>
						</ButtonGroup>
					</TableBatchActionsBar>
				)}

				<ModalConfirmApproveAccess
					isOpen={isApproveModalOpen}
					itemsToApprove={itemWithActiveAction || items}
					onClose={() => {
						closeApproveModal();
						setItemWithActiveAction(undefined);
					}}
					onConfirm={onConfirmApprove}
				/>

				<ModalConfirmRejectAccess
					isOpen={isRejectModalOpen}
					itemsToReject={itemWithActiveAction || items}
					onClose={() => {
						closeRejectModal();
						setItemWithActiveAction(undefined);
					}}
					onConfirm={onConfirmReject}
				/>

				<ModalUnavailableFeature
					isOpen={isUnavailableModalOpen}
					onClose={closeUnavailableModal}
					onConfirm={closeUnavailableModal}
				/>
			</Stack>
		</>
	);
};
