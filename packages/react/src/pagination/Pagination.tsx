import { Text } from '../text';
import { usePagination } from './usePagination';
import {
	PaginationItemContainer,
	PaginationContainer,
	PaginationSecondaryControlContainer,
} from './PaginationContainer';
import { PaginationItemDirection } from './PaginationItemDirection';
import { PaginationItemPage } from './PaginationItemPage';
import { PaginationItemSeparator } from './PaginationItemSeparator';
import { PaginationItemsPerPageSelect } from './PaginationItemsPerPageSelect';

export type PaginationProps = {
	/** Describes the navigation element to assistive technologies. */
	'aria-label'?: string;
	/** The current page number. */
	currentPage: number;
	/** Function to generate a href for each list item. */
	generateHref: (pageNumber: number) => string;
	/** Text to describe the range of items shown. */
	itemRangeText?: string;
	/** The selected number of items per page. */
	itemsPerPage?: number;
	/** The options for the items per page select. */
	itemsPerPageOptions?: number[];
	/** Callback when the items per page is changed. */
	onItemsPerPageChange?: (itemsPerPage: number) => void;
	/** The total number of pages. */
	totalPages: number;
	/** Controls how many list items are shown. */
	windowLimit?: number;
};

export function Pagination({
	'aria-label': ariaLabel = 'Pagination',
	currentPage,
	generateHref,
	itemRangeText,
	itemsPerPage,
	itemsPerPageOptions,
	onItemsPerPageChange,
	totalPages,
	windowLimit = 3,
}: PaginationProps) {
	const pagination = usePagination({ currentPage, windowLimit, totalPages });
	const hasRightArea = Boolean(
		(itemsPerPage && onItemsPerPageChange) || itemRangeText
	);
	return (
		<PaginationContainer hasRightArea={hasRightArea}>
			<PaginationItemContainer aria-label={ariaLabel}>
				{pagination.map((item, index) => {
					switch (item.type) {
						case 'direction':
							return (
								<PaginationItemDirection
									direction={item.direction}
									href={generateHref(item.pageNumber)}
									key={item.direction}
								/>
							);
						case 'page':
							return (
								<PaginationItemPage
									href={generateHref(item.pageNumber)}
									isActive={item.isActive}
									key={item.pageNumber}
									pageNumber={item.pageNumber}
								/>
							);
						case 'separator':
							return (
								<PaginationItemSeparator
									isLinks
									key={`${index}-separator`}
									missingLeftPageNumber={pagination[index - 1].pageNumber + 1}
									missingRightPageNumber={pagination[index + 1].pageNumber - 1}
								/>
							);
						default:
							return null;
					}
				})}
			</PaginationItemContainer>
			{hasRightArea && (
				<PaginationSecondaryControlContainer>
					{itemRangeText && <Text role="status">{itemRangeText}</Text>}
					{itemsPerPage && onItemsPerPageChange && (
						<PaginationItemsPerPageSelect
							onChange={onItemsPerPageChange}
							options={itemsPerPageOptions}
							value={itemsPerPage}
						/>
					)}
				</PaginationSecondaryControlContainer>
			)}
		</PaginationContainer>
	);
}
