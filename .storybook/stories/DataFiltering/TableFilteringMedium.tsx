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
import {
	DashboardPagination,
	defaultActiveColumns,
} from './components/DashboardPagination';
import { assignees, BusinessForAudit } from './lib/generateBusinessData';
import { useDataContext, useSortAndFilterContext } from './lib/contexts';

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

	const [activeColumns, setActiveColumns] = useState(defaultActiveColumns);

	const [currentItem, setCurrentItem] = useState<BusinessForAudit>();
	const [batchItems, setBatchItems] = useState<string[]>();
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const showAccessibleSuccessMessage = () => {
		// Hide it then show it to ensure it's always announced even if the content was the same
		setShowSuccessMessage(false);
		setShowSuccessMessage(true);
	};

	const [cancelModalOpen, setDeleteAuditModalOpen] = useState(false);

	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);

	const { clearRowSelections } = useSortAndFilterContext();

	const onSubmitForm: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();

		if (!currentItem) return;
		updateData?.({
			newItemData: {
				...currentItem,
				...(radioAssigneeValue && { assignee: radioAssigneeValue }),
			},
		});

		showAccessibleSuccessMessage();

		closeDrawer();
	};
	const onOpenDrawer = (newCurrentItem?: BusinessForAudit) => {
		openDrawer();
		setCurrentItem(newCurrentItem);
		setRadioAssigneeValue(newCurrentItem?.assignee);
	};

	const onClickMarkCompleted = (newCurrentItem?: BusinessForAudit) => {
		showAccessibleSuccessMessage();
		setCurrentItem(newCurrentItem);
		setBatchItems(undefined);

		if (!newCurrentItem) return;
		updateData?.({
			newItemData: {
				...newCurrentItem,
				status: 'completed',
			},
		});
	};

	const onClickMarkCompletedBatch = (batchItems: string[]) => {
		showAccessibleSuccessMessage();
		setBatchItems(batchItems);
		setCurrentItem(undefined);
		updateData?.({ batchItems });
	};

	const onClickDelete = (newCurrentItem?: BusinessForAudit) => {
		setDeleteAuditModalOpen(true);
		setBatchItems(undefined);
		setCurrentItem(newCurrentItem);
	};

	const onClickDeleteBatch = (batchItems: string[]) => {
		setDeleteAuditModalOpen(true);
		setCurrentItem(undefined);
		setBatchItems(batchItems);
	};

	const onConfirmCancel = () => {
		showAccessibleSuccessMessage();

		if (currentItem) {
			updateData?.({ newItemData: currentItem, isDeleted: true });
		}
		if (batchItems) {
			clearRowSelections();
			updateData?.({ batchItems, isDeleted: true });
		}

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
						currentItem?.businessName
							? 'to ' + currentItem.businessName
							: batchItems?.length
							? batchItems.length === 1
								? `to ${batchItems.length} item`
								: `to ${batchItems.length} items`
							: ''
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
								css={{ textAlign: 'left' }}
							>
								{isOpen ? 'Hide filters' : 'Show filters'}
								<Box
									aria-hidden
									as="span"
									css={{ display: 'block', height: 0, overflow: 'hidden' }}
								>
									Show filters
								</Box>
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

				<DataTable
					activeColumns={activeColumns}
					hasActionColumn={hasActionColumn}
					selectable={selectable}
					headingId={headingId}
					onOpenDrawer={onOpenDrawer}
					onClickMarkCompleted={onClickMarkCompleted}
					onClickMarkCompletedBatch={onClickMarkCompletedBatch}
					onClickDelete={onClickDelete}
					onClickDeleteBatch={onClickDeleteBatch}
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

			<DashboardPagination setActiveColumns={setActiveColumns} />

			<ModalConfirmDelete
				isOpen={cancelModalOpen}
				onClose={() => setDeleteAuditModalOpen(false)}
				onConfirm={onConfirmCancel}
				{...(batchItems && { batchItems })}
				{...(currentItem && { currentItem })}
			/>
		</Stack>
	);
};

export type ModalConfirmDeleteProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onClose: () => void;
	currentItem?: BusinessForAudit | undefined;
	batchItems?: string[] | undefined;
};

export function ModalConfirmDelete({
	isOpen,
	onConfirm,
	onClose,
	currentItem,
	batchItems,
}: ModalConfirmDeleteProps) {
	const [submitting, setSubmitting] = useState(false);

	function onSubmit() {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			onConfirm();
		}, 200);
	}

	const title = currentItem
		? `Are you sure you want to delete the audit for ${currentItem.businessName}?`
		: `Are you sure you want to delete ${batchItems?.length} item${
				batchItems?.length === 1 ? '' : 's'
		  }?`;
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
						{`${currentItem || batchItems?.length === 1 ? '' : 's'}`}
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
