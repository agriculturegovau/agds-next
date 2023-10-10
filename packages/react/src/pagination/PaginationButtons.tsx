import { Text } from '../text';
import { usePagination } from './usePagination';
import { PaginationItemContainer } from './PaginationItemContainer';
import {
	PaginationContainer,
	PaginationSecondaryControlContainer,
} from './PaginationContainer';
import { PaginationItemDirectionButton } from './PaginationItemDirection';
import { PaginationItemSeparator } from './PaginationItemSeparator';
import { PaginationItemPageButton } from './PaginationItemPage';
import { PaginationItemsPerPageSelect } from './PaginationItemsPerPageSelect';

export type PaginationButtonsProps = {
	/** Describes the navigation element to assistive technologies. */
	'aria-label'?: string;
	/** Callback for when a list item is pressed. */
	onChange: (pageNumber: number) => void;
	/** The current page number. */
	currentPage: number;
	/** Controls how many list items are shown. */
	windowLimit?: number;
	/** The total number of pages. */
	totalPages: number;
	/** Text to describe the range of items shown. */
	itemRangeText?: string;
	/** The selected number of items per page. */
	itemsPerPage?: number;
	/** The options for the items per page select. */
	itemsPerPageOptions?: number[];
	/** Callback when the items per page is changed. */
	onItemsPerPageChange?: (itemsPerPage: number) => void;
};

export function PaginationButtons({
	'aria-label': ariaLabel = 'pagination',
	onChange,
	currentPage,
	totalPages,
	windowLimit = 3,
	itemRangeText,
	itemsPerPage,
	itemsPerPageOptions,
	onItemsPerPageChange,
}: PaginationButtonsProps) {
	const pagination = usePagination({ currentPage, totalPages, windowLimit });
	const hasRightArea = Boolean(
		(itemsPerPage && onItemsPerPageChange) || itemRangeText
	);
	return (
		<PaginationContainer hasRightArea={hasRightArea}>
			<PaginationItemContainer aria-label={ariaLabel}>
				{pagination.map((item, idx) => {
					switch (item.type) {
						case 'direction':
							return (
								<PaginationItemDirectionButton
									key={item.direction}
									direction={item.direction}
									onClick={() => onChange(item.pageNumber)}
								/>
							);
						case 'page':
							return (
								<PaginationItemPageButton
									key={idx}
									pageNumber={item.pageNumber}
									onClick={() => onChange(item.pageNumber)}
									isActive={item.isActive}
								/>
							);
						case 'separator':
							return <PaginationItemSeparator key={idx} />;
						default:
							return null;
					}
				})}
			</PaginationItemContainer>
			{hasRightArea && (
				<PaginationSecondaryControlContainer>
					{itemRangeText && <Text>{itemRangeText}</Text>}
					{itemsPerPage && onItemsPerPageChange && (
						<PaginationItemsPerPageSelect
							value={itemsPerPage}
							options={itemsPerPageOptions}
							onChange={onItemsPerPageChange}
						/>
					)}
				</PaginationSecondaryControlContainer>
			)}
		</PaginationContainer>
	);
}
