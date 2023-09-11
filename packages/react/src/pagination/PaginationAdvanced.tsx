import { useMemo } from 'react';
import { Flex } from '../flex';
import { Select } from '../select';
import { DirectionButton } from '../direction-link';
import { Text } from '../text';

export type AdvancedPaginationProps = {
	currentPage: number;
	onChange: (pageNumber: number) => void;
	totalItems: number;
	itemsPerPage: number;
	itemsPerPageOnChange: (value: number) => void;
	itemsPerPageOptions?: number[];
};

function generateCaption({
	totalItems,
	currentPage,
	itemsPerPage,
}: {
	totalItems: number;
	currentPage: number;
	itemsPerPage: number;
}) {
	const totalItemsPlural = totalItems === 1 ? '1 item' : `${totalItems} items`;
	const firstItem = (currentPage - 1) * itemsPerPage + 1;
	const lastItem = (currentPage - 1) * itemsPerPage + itemsPerPage;
	const rangeExceedsTotalItems = lastItem > totalItems;
	if (rangeExceedsTotalItems) return `${totalItemsPlural}`;
	return `${firstItem} - ${lastItem} of ${totalItemsPlural}`;
}

function toOption(value: number) {
	return { label: `${value}`, value: `${value}` };
}

export function PaginationAdvanced({
	currentPage,
	totalItems,
	itemsPerPage,
	itemsPerPageOnChange,
	itemsPerPageOptions = [10, 20, 50, 100],
	onChange,
}: AdvancedPaginationProps) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const pageOptions = useMemo(() => {
		return Array.from(new Array(totalPages).keys()).map((key) =>
			toOption(key + 1)
		);
	}, [totalPages]);

	const perPageOptions = useMemo(() => {
		return itemsPerPageOptions.map(toOption);
	}, [itemsPerPageOptions]);

	return (
		<Flex alignItems="center" gap={2}>
			<div>
				<DirectionButton
					direction="left"
					onClick={() => onChange(currentPage - 1)}
				>
					Previous
				</DirectionButton>
			</div>
			<Flex
				gap={1}
				alignItems="center"
				css={{
					'& label': {
						display: 'none',
					},
				}}
			>
				<Select
					label="Current page"
					hideOptionalLabel
					value={currentPage}
					options={pageOptions}
					onChange={(event) => onChange(Number(event.target.value))}
				/>
				<Text as="span">of {totalPages} pages</Text>
			</Flex>

			<div>
				<DirectionButton
					direction="right"
					onClick={() => onChange(currentPage + 1)}
				>
					Next
				</DirectionButton>
			</div>

			<div css={{ flexGrow: 1, textAlign: 'center' }}>
				<Text as="span">
					{generateCaption({ currentPage, itemsPerPage, totalItems })}
				</Text>
			</div>

			<div
				css={{
					marginLeft: 'auto',
					'> div': {
						alignItems: 'center',
						flexDirection: 'row',
					},
				}}
			>
				<Select
					label="Items per page"
					hideOptionalLabel
					value={itemsPerPage}
					onChange={(event) => itemsPerPageOnChange(Number(event.target.value))}
					options={perPageOptions}
				/>
			</div>
		</Flex>
	);
}
