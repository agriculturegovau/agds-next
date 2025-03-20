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
import { H2, Heading } from '../../../packages/react/src/heading';
import { TextLink } from '../../../packages/react/src/text-link';
import { Flex } from '../../../packages/react/src/flex';
import { PaginationButtons } from '../../../packages/react/src/pagination';
import { Box } from '../../../packages/react/src/box';
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
		<PageContent>
			<Stack gap={1.5}>
				<H2 id="certificates-heading">Certificates</H2>
				<Stack gap={1}>
					{renderNotification()}
					<TableFilters />
					<Stack gap={0}>
						<Box borderBottom paddingBottom={1} paddingLeft={0.75}>
							<Checkbox
								checked={isTableHeaderChecked}
								indeterminate={isTableHeaderIndeterminate}
								onChange={toggleAllRows}
								size="sm"
							>
								Select all rows
							</Checkbox>
						</Box>
						{paginatedData.length ? (
							<Stack gap={1}>
								<Stack gap={0.5}>
									<TableWrapper>
										<Table aria-labelledby="certificates-heading" striped>
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
														addTrackingNumber={() =>
															addTrackingNumberToRow(row)
														}
														deleteRow={() => deleteRow(row)}
														isRowSelected={isRowSelected(row)}
														item={row}
														key={row.id}
														onRowSelectToggle={() => toggleRowSelected(row)}
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
													onClick={() => setModalAddTrackingOpen(true)}
													size="sm"
													variant="secondary"
												>
													Add tracking number
												</Button>
												<Button
													onClick={() => setDeleteModalOpen(true)}
													size="sm"
													variant="secondary"
												>
													Delete
												</Button>
												<Button
													onClick={toggleAllRows}
													size="sm"
													variant="tertiary"
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
								<Heading fontSize="lg" type="h3">
									No certificates found
								</Heading>
							</Stack>
						)}
					</Stack>
				</Stack>
			</Stack>
			<ModalConfirmDelete
				isOpen={deleteModalOpen}
				itemsToDelete={selectedItems}
				onClose={() => setDeleteModalOpen(false)}
				onConfirm={deleteSelectedItems}
			/>
			<ModalAddTrackingNumber
				isOpen={ModalAddTrackingOpen}
				onClose={() => setModalAddTrackingOpen(false)}
				onConfirm={addTrackingNumber}
			/>
		</PageContent>
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
						aria-label={`Select certificate ${certNumber}`}
						checked={isRowSelected}
						onChange={onRowSelectToggle}
						size="sm"
					/>
				</TableCell>
				<TableCell as="th" fontWeight="bold" scope="row">
					<TextLink href="#">{certNumber}</TextLink>
				</TableCell>
				<TableCell>{exporter}</TableCell>
				<TableCell>11/02/22 14:06</TableCell>
				<TableCell>{status}</TableCell>
				<TableCell>{amount}</TableCell>
				<TableCell>
					<Flex gap={1}>
						<Button onClick={onAddTrackingClick} variant="text">
							Add tracking number
						</Button>
						<Button onClick={onDeleteClick} variant="text">
							Delete
						</Button>
					</Flex>
				</TableCell>
			</TableRow>
			<ModalConfirmDelete
				isOpen={deleteModalOpen}
				itemsToDelete={item}
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
