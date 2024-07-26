import { Fragment, useState } from 'react';
import { Stack } from '../../../packages/react/src/stack';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
	TableBatchActionsBar,
	TableBatchActionsTitle,
} from '../../../packages/react/src/table';
import { Checkbox } from '../../../packages/react/src/checkbox';
import { ButtonGroup, Button } from '../../../packages/react/src/button';
import { PageContent } from '../../../packages/react/src/content';
import { H1, Heading } from '../../../packages/react/src/heading';
import { TextLink } from '../../../packages/react/src/text-link';
import { Flex } from '../../../packages/react/src/flex';
import { PaginationButtons } from '../../../packages/react/src/pagination';
import { Box } from '../../../packages/react/src/box';
import { SiteLayout } from '../../../docs/components/SiteLayout';
import { ModalConfirmDelete } from './ModalConfirmDelete';
import { ModalAddTrackingNumber } from './ModalAddTrackingNumber';
import { EXAMPLE_DATA, plural, RowData } from './utils';
import { useRowSelection } from './useRowSelection';
import { useNotification } from './useNotification';
import { TableFilters } from './TableFilters';

const PER_PAGE = 20;

export function SelectableTableBatchActions() {
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState(EXAMPLE_DATA);

	const paginatedData = data.length
		? data.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)
		: [];

	const totalPages = Math.ceil(data.length / PER_PAGE);

	const {
		hasSelections,
		isRowSelected,
		selectedItems,
		setSelectedItems,
		isTableHeaderChecked,
		isTableHeaderIndeterminate,
		toggleAllRows,
		toggleRowSelected,
	} = useRowSelection({ data, paginatedData });

	const { renderNotification, addNotification } = useNotification();

	const [ModalAddTrackingOpen, setModalAddTrackingOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	function addTrackingNumber() {
		const selectedItemsLength = selectedItems.length;
		setSelectedItems([]);
		setModalAddTrackingOpen(false);
		addNotification(
			`Successfully added tracking numbers to ${selectedItemsLength} ${plural(
				selectedItemsLength,
				'item',
				'items'
			)}.`
		);
	}

	function deleteSelectedItems() {
		const selectedItemsLength = selectedItems.length;
		setData((data) =>
			data.filter((item) => !selectedItems.map((i) => i.id).includes(item.id))
		);
		setSelectedItems([]);
		setDeleteModalOpen(false);
		addNotification(
			`Successfully deleted ${selectedItemsLength} ${plural(
				selectedItemsLength,
				'item',
				'items'
			)}.`
		);
	}

	function deleteRow(row: RowData) {
		setData((data) => data.filter((item) => item.id !== row.id));
		addNotification(`Successfully deleted certificate ${row.certNumber}.`);
	}

	function addTrackingNumberToRow(row: RowData) {
		addNotification(
			`Successfully added tracking number to certificate ${row.certNumber}.`
		);
	}

	return (
		<SiteLayout>
			<PageContent>
				<Stack gap={1.5}>
					<H1 id="certificates-heading">Certificates</H1>
					<Stack gap={1}>
						{renderNotification()}
						<TableFilters />
						<Stack gap={0}>
							<Box paddingLeft={0.75} paddingBottom={1} borderBottom>
								<Checkbox
									size="sm"
									checked={isTableHeaderChecked}
									indeterminate={isTableHeaderIndeterminate}
									onChange={toggleAllRows}
								>
									Select all rows
								</Checkbox>
							</Box>
							{paginatedData.length ? (
								<Stack gap={1}>
									<Stack gap={0.5}>
										<TableWrapper>
											<Table striped aria-labelledby="certificates-heading">
												<TableHead>
													<TableRow>
														<TableHeader scope="col" width="6rem">
															Select
														</TableHeader>
														<TableHeader scope="col">
															Certificate number
														</TableHeader>
														<TableHeader scope="col">Exporter</TableHeader>
														<TableHeader scope="col">Date Issued</TableHeader>
														<TableHeader scope="col">Status</TableHeader>
														<TableHeader scope="col">Amount</TableHeader>
														<TableHeader scope="col">Actions</TableHeader>
													</TableRow>
												</TableHead>
												<TableBody>
													{paginatedData.map((row) => (
														<Row
															key={row.id}
															item={row}
															isRowSelected={isRowSelected(row)}
															onRowSelectToggle={() => toggleRowSelected(row)}
															addTrackingNumber={() =>
																addTrackingNumberToRow(row)
															}
															deleteRow={() => deleteRow(row)}
														/>
													))}
												</TableBody>
											</Table>
										</TableWrapper>
										{hasSelections && (
											<TableBatchActionsBar>
												<TableBatchActionsTitle>
													Apply action to {selectedItems.length}{' '}
													{plural(selectedItems.length, 'item', 'items')}
												</TableBatchActionsTitle>
												<ButtonGroup>
													<Button
														variant="secondary"
														size="sm"
														onClick={() => setModalAddTrackingOpen(true)}
													>
														Add tracking number
													</Button>
													<Button
														variant="secondary"
														size="sm"
														onClick={() => setDeleteModalOpen(true)}
													>
														Delete
													</Button>
													<Button
														variant="tertiary"
														size="sm"
														onClick={toggleAllRows}
													>
														Cancel
													</Button>
												</ButtonGroup>
											</TableBatchActionsBar>
										)}
									</Stack>
									<PaginationButtons
										currentPage={currentPage}
										onChange={setCurrentPage}
										totalPages={totalPages}
									/>
								</Stack>
							) : (
								<Stack paddingY={1}>
									<Heading type="h3" fontSize="lg">
										No certificates found
									</Heading>
								</Stack>
							)}
						</Stack>
					</Stack>
				</Stack>
				<ModalConfirmDelete
					itemsToDelete={selectedItems}
					isOpen={deleteModalOpen}
					onClose={() => setDeleteModalOpen(false)}
					onConfirm={deleteSelectedItems}
				/>
				<ModalAddTrackingNumber
					isOpen={ModalAddTrackingOpen}
					onClose={() => setModalAddTrackingOpen(false)}
					onConfirm={addTrackingNumber}
				/>
			</PageContent>
		</SiteLayout>
	);
}

type RowProps = {
	item: RowData;
	isRowSelected: boolean;
	onRowSelectToggle: () => void;
	deleteRow: () => void;
	addTrackingNumber: () => void;
};

function Row({
	item,
	isRowSelected,
	onRowSelectToggle,
	deleteRow,
	addTrackingNumber,
}: RowProps) {
	const { certNumber, exporter, status, amount } = item;

	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	function onDeleteClick() {
		setDeleteModalOpen(true);
	}

	function onDeleteConfirm() {
		deleteRow();
		setDeleteModalOpen(false);
	}

	const [modalAddTrackingOpen, setModalAddTrackingOpen] = useState(false);

	function onAddTrackingClick() {
		setModalAddTrackingOpen(true);
	}

	function onAddTrackingConfirm() {
		setModalAddTrackingOpen(false);
		addTrackingNumber();
	}

	return (
		<Fragment>
			<TableRow selected={isRowSelected}>
				<TableCell>
					<Checkbox
						size="sm"
						checked={isRowSelected}
						onChange={onRowSelectToggle}
						aria-label={`Select certificate ${certNumber}`}
					/>
				</TableCell>
				<TableCell as="th" scope="row" fontWeight="bold">
					<TextLink href="#">{certNumber}</TextLink>
				</TableCell>
				<TableCell>{exporter}</TableCell>
				<TableCell>11/02/22 14:06</TableCell>
				<TableCell>{status}</TableCell>
				<TableCell>{amount}</TableCell>
				<TableCell>
					<Flex gap={1}>
						<Button variant="text" onClick={onAddTrackingClick}>
							Add tracking number
						</Button>
						<Button variant="text" onClick={onDeleteClick}>
							Delete
						</Button>
					</Flex>
				</TableCell>
			</TableRow>
			<ModalConfirmDelete
				itemsToDelete={item}
				isOpen={deleteModalOpen}
				onClose={() => setDeleteModalOpen(false)}
				onConfirm={onDeleteConfirm}
			/>
			<ModalAddTrackingNumber
				isOpen={modalAddTrackingOpen}
				onClose={() => setModalAddTrackingOpen(false)}
				onConfirm={onAddTrackingConfirm}
			/>
		</Fragment>
	);
}
