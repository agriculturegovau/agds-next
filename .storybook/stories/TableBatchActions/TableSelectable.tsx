import { Fragment, useState } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import {
	Table,
	TableBatchActions,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { H2, Heading } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { Flex } from '@ag.ds-next/react/flex';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { Box } from '@ag.ds-next/react/box';
import { ModalConfirmDelete } from './ModalConfirmDelete';
import { ModalAddTrackingNumber } from './ModalAddTrackingNumber';
import { EXAMPLE_DATA, plural, RowData } from './utils';
import { useRowSelection } from './useRowSelection';
import { useNotification } from './useNotification';
import { TableFilters } from './TableFilters';
// import {
// 	Box,
// 	SearchInput,
// 	Select,
// } from '../../../docs/components/designSystemComponents';

export function TableSelectable() {
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState(EXAMPLE_DATA);

	const PER_PAGE = 30;
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
		<Fragment>
			<Stack gap={1.5}>
				<H2 id="certificates-heading">Certificates</H2>
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
						{paginatedData ? (
							<Fragment>
								<Stack gap={0.5}>
									<TableWrapper>
										<Table striped aria-labelledby="certificates-heading">
											<TableHead>
												<TableRow>
													<TableHeader scope="col" width="6rem">
														Selection
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
													<TableSelectableRow
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
										<TableBatchActions>
											<Text
												as="h3"
												fontSize="md"
												fontWeight="bold"
												lineHeight="heading"
											>
												Apply action to {selectedItems.length}{' '}
												{plural(selectedItems.length, 'item', 'items')}
											</Text>
											<ButtonGroup>
												<Button
													variant="secondary"
													size="sm"
													onClick={() => setModalAddTrackingOpen(true)}
												>
													Add tracking number
												</Button>
												<Button
													variant="tertiary"
													size="sm"
													onClick={() => setDeleteModalOpen(true)}
												>
													Delete
												</Button>
											</ButtonGroup>
										</TableBatchActions>
									)}
								</Stack>
								<PaginationButtons
									currentPage={currentPage}
									onChange={setCurrentPage}
									totalPages={totalPages}
								/>
							</Fragment>
						) : (
							<Heading type="h2" fontSize="lg">
								No items found
							</Heading>
						)}
					</Stack>
				</Stack>
			</Stack>
			<ModalConfirmDelete
				itemsToDelete={selectedItems}
				isOpen={deleteModalOpen}
				onDismiss={() => setDeleteModalOpen(false)}
				onConfirm={deleteSelectedItems}
			/>
			<ModalAddTrackingNumber
				isOpen={ModalAddTrackingOpen}
				onDismiss={() => setModalAddTrackingOpen(false)}
				onConfirm={addTrackingNumber}
			/>
		</Fragment>
	);
}

type TableSelectableRowProps = {
	item: RowData;
	isRowSelected: boolean;
	onRowSelectToggle: () => void;
	deleteRow: () => void;
	addTrackingNumber: () => void;
};

function TableSelectableRow({
	item,
	isRowSelected,
	onRowSelectToggle,
	deleteRow,
	addTrackingNumber,
}: TableSelectableRowProps) {
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
				<TableCell as="th" scope="row">
					{certNumber}
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
				onDismiss={() => setDeleteModalOpen(false)}
				onConfirm={onDeleteConfirm}
			/>
			<ModalAddTrackingNumber
				isOpen={modalAddTrackingOpen}
				onDismiss={() => setModalAddTrackingOpen(false)}
				onConfirm={onAddTrackingConfirm}
			/>
		</Fragment>
	);
}
