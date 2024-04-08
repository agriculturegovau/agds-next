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
import { Prose } from '@ag.ds-next/react/prose';

const PER_PAGE = 333;

export function SelectableTableBatchActionsScrolling() {
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

	// useEffect(() => {
	// 	if (!ref.current) return;
	// 	const observer = new IntersectionObserver(
	// 		([e]) => {
	// 			setIsSticky(!e.isIntersecting);
	// 		},
	// 		{ threshold: 1 }
	// 	);
	// 	observer.observe(ref.current);
	// 	return () => observer.disconnect();
	// }, []);

	return (
		<PageContent>
			<Stack gap={1.5}>
				<Prose>
					<h2>Heading level 2, proceeding H1</h2>

					<p>
						This is an opening paragraph, that{' '}
						<a href="/site">contains an internal link</a>.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
						expedita tenetur blanditiis in libero distinctio inventore porro
						quaerat, eum aspernatur{' '}
						<a
							href="https://more.domain.tld/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path"
							rel="external"
						>
							and one that has a line break
						</a>{' '}
						dolorum animi a perferendis, obcaecati, accusantium dignissimos
						atque, voluptates veniam!
					</p>

					<h2>Heading level 2</h2>
					<h3>Heading level 3, proceeding H2</h3>
					<p>
						The purpose of the <kbd>Tab</kbd> character is indentation;
						conversely, using the <kbd>Space</kbd> character for indentation
						carries no semantic meaning—if you code this way your indentation
						schema may as well be a form of{' '}
						<abbr title="American Standard Code for Information Interchange">
							ASCII
						</abbr>{' '}
						art. ;-)
					</p>
					<h2>Heading level 2, proceeding H1</h2>

					<p>
						This is an opening paragraph, that{' '}
						<a href="/site">contains an internal link</a>.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
						expedita tenetur blanditiis in libero distinctio inventore porro
						quaerat, eum aspernatur{' '}
						<a
							href="https://more.domain.tld/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path"
							rel="external"
						>
							and one that has a line break
						</a>{' '}
						dolorum animi a perferendis, obcaecati, accusantium dignissimos
						atque, voluptates veniam!
					</p>

					<h2>Heading level 2</h2>
					<h3>Heading level 3, proceeding H2</h3>
					<p>
						The purpose of the <kbd>Tab</kbd> character is indentation;
						conversely, using the <kbd>Space</kbd> character for indentation
						carries no semantic meaning—if you code this way your indentation
						schema may as well be a form of{' '}
						<abbr title="American Standard Code for Information Interchange">
							ASCII
						</abbr>{' '}
						art. ;-)
					</p>
				</Prose>
				<H2 id="certificates-heading">Certificates</H2>
				<Stack gap={1}>
					{renderNotification()}
					<TableFilters />
					<Stack
						gap={0}
						// css={{
						// 	maxHeight: 'calc(100dvh - 76px)',
						// 	overflow: 'auto',
						// 	// position: 'sticky',
						// 	// top: 16,
						// }}
						// focus
						// tabIndex={0}
					>
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
						<Box
							css={{
								maxHeight: 'calc(100dvh - 120px)',
								overflow: 'auto',
								// position: 'sticky',
								// top: 16,
							}}
							focus
							tabIndex={0}
						>
							{paginatedData.length ? (
								<Stack gap={1}>
									<Stack gap={0.5}>
										{/* <TableWrapper> */}
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
													<TableHeader scope="col">Another</TableHeader>
													<TableHeader scope="col">Random</TableHeader>
													<TableHeader scope="col">Column</TableHeader>
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
										{/* </TableWrapper> */}
									</Stack>
								</Stack>
							) : (
								<Stack paddingY={1}>
									<Heading type="h3" fontSize="lg">
										No certificates found
									</Heading>
								</Stack>
							)}
						</Box>
					</Stack>
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
								<Button variant="tertiary" size="sm" onClick={toggleAllRows}>
									Cancel
								</Button>
							</ButtonGroup>
						</TableBatchActionsBar>
					)}
					{paginatedData.length ? (
						<Box
							ref={ref}
							css={
								{
									// maxHeight: 'calc(100dvh - 76px)',
									// overflow: 'auto',
									// position: 'sticky',
									// bottom: 0,
								}
							}
						>
							<PaginationButtons
								currentPage={currentPage}
								onChange={setCurrentPage}
								totalPages={totalPages}
							/>
						</Box>
					) : null}
				</Stack>
				<Prose>
					<h2>Heading level 2, proceeding H1</h2>

					<p>
						This is an opening paragraph, that{' '}
						<a href="/site">contains an internal link</a>.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
						expedita tenetur blanditiis in libero distinctio inventore porro
						quaerat, eum aspernatur{' '}
						<a
							href="https://more.domain.tld/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path"
							rel="external"
						>
							and one that has a line break
						</a>{' '}
						dolorum animi a perferendis, obcaecati, accusantium dignissimos
						atque, voluptates veniam!
					</p>

					<h2>Heading level 2</h2>
					<h3>Heading level 3, proceeding H2</h3>
					<p>
						The purpose of the <kbd>Tab</kbd> character is indentation;
						conversely, using the <kbd>Space</kbd> character for indentation
						carries no semantic meaning—if you code this way your indentation
						schema may as well be a form of{' '}
						<abbr title="American Standard Code for Information Interchange">
							ASCII
						</abbr>{' '}
						art. ;-)
					</p>
					<h2>Heading level 2, proceeding H1</h2>

					<p>
						This is an opening paragraph, that{' '}
						<a href="/site">contains an internal link</a>.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
						expedita tenetur blanditiis in libero distinctio inventore porro
						quaerat, eum aspernatur{' '}
						<a
							href="https://more.domain.tld/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path/more/path"
							rel="external"
						>
							and one that has a line break
						</a>{' '}
						dolorum animi a perferendis, obcaecati, accusantium dignissimos
						atque, voluptates veniam!
					</p>

					<h2>Heading level 2</h2>
					<h3>Heading level 3, proceeding H2</h3>
					<p>
						The purpose of the <kbd>Tab</kbd> character is indentation;
						conversely, using the <kbd>Space</kbd> character for indentation
						carries no semantic meaning—if you code this way your indentation
						schema may as well be a form of{' '}
						<abbr title="American Standard Code for Information Interchange">
							ASCII
						</abbr>{' '}
						art. ;-)
					</p>
				</Prose>
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
					<Box css={{ position: 'relative' }}>
						<Checkbox
							size="sm"
							checked={isRowSelected}
							onChange={onRowSelectToggle}
							aria-label={`Select certificate ${certNumber}`}
						/>
					</Box>
				</TableCell>
				<TableCell as="th" scope="row" fontWeight="bold">
					<TextLink href="#">{certNumber}</TextLink>
				</TableCell>
				<TableCell>{exporter}</TableCell>
				<TableCell>Foo&nbsp;Bar&nbsp;Baz</TableCell>
				<TableCell>Qux&nbsp;Quux&nbsp;Corge</TableCell>
				<TableCell>Grault&nbsp;Garply&nbsp;Waldo</TableCell>
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
