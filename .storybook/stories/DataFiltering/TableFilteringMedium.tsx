import { MouseEventHandler, useCallback, useRef, useState } from 'react';
import { Box } from '../../../packages/react/src/box';
import { Stack } from '../../../packages/react/src/stack';
import { Button, ButtonLink } from '../../../packages/react/src/button';
import {
	useTernaryState,
	useToggleState,
} from '../../../packages/react/src/core';
import {
	ChevronDownIcon,
	ChevronUpIcon,
	FilterIcon,
	PlusIcon,
} from '../../../packages/react/src/icon';
import { H2 } from '../../../packages/react/src/heading';
import {
	ButtonGroup,
	ControlGroup,
	Drawer,
	FormStack,
	Modal,
	Radio,
	SectionAlert,
	Text,
} from '../../../docs/components/designSystemComponents';
import { ActiveFilters } from './components/ActiveFilters';
import { FilterAccordion } from './components/FilterAccordion';
import { SortBySelect } from './components/SortBySelect';
import { DataTable } from './components/DataTable';
import { FilterSearchInput } from './components/FilterSearchInput';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';
import { DashboardPagination } from './components/DashboardPagination';
import { DataTableSelectAllCheckbox } from './components/DataTableSelectAllCheckbox';
import { assignees, BusinessForAudit } from './lib/generateBusinessData';
import { useDataContext } from './lib/contexts';

const headingId = 'table-heading';

export const TableFilteringMedium = ({
	hasActionColumn,
	selectable,
}: {
	hasActionColumn?: boolean;
	selectable?: boolean;
}) => {
	const { updateData } = useDataContext();

	const sectionAlertRef = useRef(null);
	const [isOpen, toggleIsOpen] = useToggleState(false, true);

	const [currentItem, setCurrentItem] = useState<BusinessForAudit>();
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const [cancelModalOpen, setDeleteAuditModalOpen] = useState(false);

	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	const onSubmitForm: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();

		if (!currentItem) return;
		updateData?.({
			...currentItem,
			...(radioAssigneeValue && { assignee: radioAssigneeValue }),
		});

		setShowSuccessMessage(true);

		closeDrawer();
	};
	const onOpenDrawer = (newCurrentItem?: BusinessForAudit) => {
		openDrawer();
		setCurrentItem(newCurrentItem);
		setRadioAssigneeValue(newCurrentItem?.assignee);
	};

	const onClickMarkCompleted = (newCurrentItem?: BusinessForAudit) => {
		setShowSuccessMessage(true);
		setCurrentItem(newCurrentItem);

		if (!newCurrentItem) return;
		updateData?.({
			...newCurrentItem,
			status: 'completed',
		});
	};

	const onClickDelete = (newCurrentItem?: BusinessForAudit) => {
		setDeleteAuditModalOpen(true);
		setCurrentItem(newCurrentItem);
	};

	const onConfirmCancel = () => {
		setShowSuccessMessage(true);

		if (!currentItem) return;
		const isDeleted = true;
		updateData?.(currentItem, isDeleted);

		setDeleteAuditModalOpen(false);
	};

	const [radioAssigneeValue, setRadioAssigneeValue] = useState<string>();
	const handlerForKey = useCallback(
		(key: string) => () => setRadioAssigneeValue(key),
		[]
	);
	const isChecked = (key: string) => key === radioAssigneeValue;

	// IDs for accordion to ensure accessibility
	const buttonId = 'filter-button';
	const bodyId = 'filter-body';

	return (
		<Stack gap={1.5}>
			<H2 id={headingId}>Audits</H2>

			<Box css={showSuccessMessage ? undefined : { display: 'none' }}>
				<SectionAlert
					role="alert"
					id="section-alert"
					ref={sectionAlertRef}
					tabIndex={-1}
					title={`Your changes ${
						currentItem?.businessName ? 'to ' + currentItem.businessName : ''
					} have been saved`}
					tone="success"
					onClose={() => setShowSuccessMessage(false)}
				/>
			</Box>

			<div>
				<ButtonLink href="#new" iconBefore={PlusIcon}>
					Create request
				</ButtonLink>
			</div>

			<Stack gap={0}>
				<FilterRegion>
					<FilterBar>
						<FilterBarGroup>
							<Box
								display={{
									xs: 'block',
									lg: 'none',
								}}
							>
								<SortBySelect />
							</Box>
							<FilterSearchInput />
							<FilterStatusSelect />
							<Button
								onClick={toggleIsOpen}
								variant="secondary"
								iconBefore={FilterIcon}
								iconAfter={isOpen ? ChevronUpIcon : ChevronDownIcon}
								id={buttonId}
								aria-controls={bodyId}
								aria-expanded={isOpen}
							>
								{isOpen ? 'Hide filters' : 'Show filters'}
							</Button>
						</FilterBarGroup>

						<Box
							display={{
								xs: 'none',
								lg: 'block',
							}}
						>
							<SortBySelect />
						</Box>
					</FilterBar>
					<FilterAccordion
						id={bodyId}
						ariaLabelledBy={buttonId}
						isOpen={isOpen}
					/>
					<ActiveFilters />
				</FilterRegion>

				{selectable && (
					<Box paddingLeft={0.75} paddingY={0.75} borderBottom>
						<DataTableSelectAllCheckbox />
					</Box>
				)}

				<DataTable
					hasActionColumn={hasActionColumn}
					selectable={selectable}
					headingId={headingId}
					onOpenDrawer={onOpenDrawer}
					onClickMarkCompleted={onClickMarkCompleted}
					onClickDelete={onClickDelete}
				/>

				<Drawer
					actions={
						<ButtonGroup>
							<Button type="submit" form="form-id" onClick={onSubmitForm}>
								Save changes
							</Button>

							<Button
								variant="tertiary"
								onClick={() => {
									setShowSuccessMessage(false);
									closeDrawer();
								}}
							>
								Cancel
							</Button>
						</ButtonGroup>
					}
					isOpen={isDrawerOpen}
					onClose={() => {
						setShowSuccessMessage(false);
						closeDrawer();
					}}
					title={`Edit ${
						currentItem?.businessName ? currentItem.businessName : 'Business'
					}`}
				>
					<form id="form-id">
						<FormStack>
							<ControlGroup label="Assignee" block required>
								{assignees.map((assignee) => (
									<Radio
										key={assignee}
										name="assignee"
										checked={isChecked(assignee)}
										onChange={handlerForKey(assignee)}
									>
										{assignee}
									</Radio>
								))}
							</ControlGroup>
						</FormStack>
					</form>
				</Drawer>
			</Stack>

			<DashboardPagination />

			{currentItem && (
				<ModalConfirmDelete
					currentItem={currentItem}
					isOpen={cancelModalOpen}
					onClose={() => setDeleteAuditModalOpen(false)}
					onConfirm={onConfirmCancel}
				/>
			)}
		</Stack>
	);
};

export type ModalConfirmDeleteProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onClose: () => void;
	currentItem: BusinessForAudit;
};

export function ModalConfirmDelete({
	isOpen,
	onConfirm,
	onClose,
	currentItem,
}: ModalConfirmDeleteProps) {
	const [submitting, setSubmitting] = useState(false);

	function onSubmit() {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			onConfirm();
		}, 200);
	}

	const title = `Are you sure you want to delete the audit for ${currentItem.businessName}?`;
	const description = `Audit documents will be deleted immediately. You can not undo this action.`;

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={title}
			actions={
				<ButtonGroup>
					<Button loading={submitting} onClick={onSubmit}>
						Delete audit
					</Button>
					<Button variant="secondary" onClick={onClose}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			<Text as="p">{description}</Text>
		</Modal>
	);
}
