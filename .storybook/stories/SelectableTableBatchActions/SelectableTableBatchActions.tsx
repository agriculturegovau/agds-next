import { Fragment, useEffect, useRef, useState } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
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
} from '@ag.ds-next/react/table';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { ButtonGroup, Button } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { H2, Heading } from '@ag.ds-next/react/heading';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Flex } from '@ag.ds-next/react/flex';
import { PaginationButtons } from '@ag.ds-next/react/pagination';
import { Box } from '@ag.ds-next/react/box';
import { ModalConfirmDelete } from './ModalConfirmDelete';
import { ModalAddTrackingNumber } from './ModalAddTrackingNumber';
import { EXAMPLE_DATA, plural, RowData } from './utils';
import { useRowSelection } from './useRowSelection';
import { useNotification } from './useNotification';
import { TableFilters } from './TableFilters';

const PER_PAGE = 333;

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

	const ref = useRef<HTMLDivElement>(null);
	const [isStuck, setIsSticky] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(
			([e]) => {
				setIsSticky(!e.isIntersecting);
			},
			{ threshold: 1 }
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<PageContent>
			<Stack gap={1.5}>
				<H2 id="certificates-heading">Certificates</H2>
				<Stack gap={1} css={{ maxWidth: 640 }}>
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
										<Box css={{ bottom: 0, position: 'sticky', zIndex: 2 }}>
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
										</Box>
									)}
								</Stack>
								<Box
									background="body"
									css={{
										bottom: -1,
										position: 'sticky',
										zIndex: 1,
										...(isStuck && {
											borderBottomLeftRadius: 0,
											borderBottomRightRadius: 0,
											borderBottomWidth: 0,
											boxShadow: `0 -2px 4px rgba(0, 0, 0, 0.3)`,
											padding: 16,
										}),
									}}
									ref={ref}
									rounded
								>
									<PaginationButtons
										currentPage={currentPage}
										onChange={setCurrentPage}
										totalPages={totalPages}
									/>
								</Box>
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
