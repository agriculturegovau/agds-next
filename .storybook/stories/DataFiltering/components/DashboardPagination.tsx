import {
	Dispatch,
	MouseEventHandler,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { PaginationItemsPerPageSelect } from '../../../../packages/react/src/pagination/PaginationItemsPerPageSelect';
import { useDataContext, useSortAndFilterContext } from '../lib/contexts';
import { Box } from '../../../../packages/react/src/box';
import { Button, ButtonGroup } from '../../../../packages/react/src/button';
import { Checkbox } from '../../../../packages/react/src/checkbox';
import { ControlGroup } from '../../../../packages/react/src/control-group';
import { Divider } from '../../../../packages/react/src/divider';
import { Drawer } from '../../../../packages/react/src/drawer';
import { FormStack } from '../../../../packages/react/src/form-stack';
import { tokens, useTernaryState } from '../../../../packages/react/src/core';
import {
	PaginationButtons,
	generatePaginationRangeText,
} from '../../../../packages/react/src/pagination';
import { SettingsIcon } from '../../../../packages/react/src/icon';
import { headers } from './DataTable';

const columnNames = [...headers].slice(1).map((header) => header.label);
export const defaultActiveColumns = columnNames.reduce(
	(acc, name) => ({ ...acc, [name]: true }),
	{ 'Business name': true } as Record<(typeof columnNames)[number], boolean>
);

type FormState = {
	activeColumns: typeof defaultActiveColumns;
	paginationPerPage: number;
};

export const DashboardPagination = ({
	activeColumns,
	setActiveColumns,
}: {
	activeColumns?: typeof defaultActiveColumns;
	setActiveColumns?: Dispatch<SetStateAction<Record<string, boolean>>>;
}) => {
	const { pagination, setPagination } = useSortAndFilterContext();
	const { data, totalItems, totalPages, loading } = useDataContext();

	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	const [formState, setFormState] = useState({
		activeColumns: defaultActiveColumns,
		paginationPerPage: pagination.perPage,
	});
	const onSubmitForm: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();

		setPagination({
			page: getValidPage({
				currentPage: pagination.page,
				totalItems,
				perPage: formState.paginationPerPage,
				prevPerPage: pagination.perPage,
			}),
			perPage: formState.paginationPerPage,
		});

		setActiveColumns?.(formState.activeColumns);

		closeDrawer();
	};
	const handlerForKey = useCallback(
		(key: keyof typeof defaultActiveColumns) => () =>
			setFormState((prevFormState: FormState) => ({
				...prevFormState,
				activeColumns: {
					...prevFormState.activeColumns,
					[key]: !prevFormState.activeColumns[key],
				},
			})),
		[]
	);

	const itemRangeText = generatePaginationRangeText({
		totalItems: totalItems,
		currentPage: pagination.page,
		itemsPerPage: pagination.perPage,
		singularNoun: 'audit',
		pluralNoun: 'audits',
	});

	// Display text for pagination allows us to wait for loading to complete before updating
	const [displayText, setDisplayText] = useState({
		page: pagination.page,
		itemRangeText,
		perPage: pagination.perPage,
	});

	// Wait for loading to complete before updating pagination displayText
	useEffect(() => {
		if (loading) return;

		setDisplayText({
			page: pagination.page,
			itemRangeText,
			perPage: pagination.perPage,
		});
		// We only want to update update the display text once the table data has finished loading, all other deps are ignored here
	}, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

	if (!data.length) return null;

	const hasChangedColumnSettings = !Object.values(
		formState.activeColumns
	).every(Boolean);
	const hasChangedItemsPerPageSettings = formState.paginationPerPage !== 10;
	const appliedSettingsCount =
		Number(hasChangedColumnSettings) + Number(hasChangedItemsPerPageSettings);

	return (
		<>
			<Box
				display="grid"
				gap={1}
				css={{
					gridTemplateColumns: '1fr',
					[tokens.mediaQuery.min.lg]: {
						gridTemplateColumns: '2fr 1fr',
					},
				}}
			>
				<PaginationButtons
					currentPage={displayText.page}
					onChange={(page) =>
						setPagination({ perPage: displayText.perPage, page })
					}
					totalPages={totalPages}
					itemRangeText={displayText.itemRangeText}
				/>

				<Button
					aria-label={
						appliedSettingsCount
							? `Table settings. ${appliedSettingsCount} applied ${
									appliedSettingsCount === 1 ? 'setting' : 'settings'
							  }`
							: 'Table settings'
					}
					css={{
						[tokens.mediaQuery.min.lg]: {
							justifySelf: 'end',
						},
					}}
					iconBefore={SettingsIcon}
					onClick={openDrawer}
					variant="tertiary"
				>
					Table settings{' '}
					{Boolean(appliedSettingsCount) && `(${appliedSettingsCount})`}
				</Button>
			</Box>

			<Drawer
				actions={
					<ButtonGroup>
						<Button
							type="submit"
							form="table-settings-form-id"
							onClick={onSubmitForm}
						>
							Save settings
						</Button>

						<Button
							type="reset"
							form="table-settings-form-id"
							onClick={(event) => {
								event.preventDefault();

								setFormState({
									activeColumns: defaultActiveColumns,
									paginationPerPage: 10,
								});

								closeDrawer();
							}}
							variant="secondary"
						>
							Reset settings
						</Button>

						<Button
							variant="tertiary"
							onClick={() => {
								if (!activeColumns) return;

								setFormState({
									activeColumns,
									paginationPerPage: pagination.perPage,
								});

								closeDrawer();
							}}
						>
							Cancel
						</Button>
					</ButtonGroup>
				}
				isOpen={isDrawerOpen}
				onClose={() => {
					if (!activeColumns) return;

					setFormState({
						activeColumns,
						paginationPerPage: pagination.perPage,
					});

					closeDrawer();
				}}
				title="Table settings"
			>
				<form id="table-settings-form-id">
					<FormStack>
						<PaginationItemsPerPageSelect
							value={formState.paginationPerPage}
							onChange={(perPage) =>
								setFormState((prevFormState) => ({
									...prevFormState,
									paginationPerPage: perPage,
								}))
							}
						/>

						<Divider />

						<ControlGroup
							label="Visible columns"
							hint="Select, Business name and Actions will always be visible."
							block
							required
						>
							{columnNames.map((columnName) => (
								<Checkbox
									key={columnName}
									name="columnName"
									checked={formState.activeColumns[columnName]}
									onChange={handlerForKey(columnName)}
								>
									{columnName}
								</Checkbox>
							))}
						</ControlGroup>
					</FormStack>
				</form>
			</Drawer>
		</>
	);
};

const getValidPage = ({
	currentPage,
	totalItems,
	perPage,
	prevPerPage,
}: {
	currentPage: number;
	totalItems: number;
	perPage: number;
	prevPerPage: number;
}) => {
	// So the user doesn't lose their position in the nav order,
	// we find the lowest displayed item number and ensure it is
	// still on the page when we change items per page.
	const lowestDisplayedItemPosition = Math.floor(
		currentPage * prevPerPage + (1 - prevPerPage)
	);
	const newPageWithLowestDisplayedItemPosition = Math.floor(
		lowestDisplayedItemPosition / perPage + 1
	);

	return currentPage > totalItems / perPage
		? Math.ceil(totalItems / perPage)
		: newPageWithLowestDisplayedItemPosition;
};
