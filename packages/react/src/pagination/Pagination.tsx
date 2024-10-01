import { Text } from '../text';
import { usePagination } from './usePagination';
import { PaginationItemDirection } from './PaginationItemDirection';
import { PaginationItemSeparator } from './PaginationItemSeparator';
import { PaginationItemPage } from './PaginationItemPage';
import { PaginationItemsPerPageSelect } from './PaginationItemsPerPageSelect';
import {
	PaginationItemContainer,
	PaginationContainer,
	PaginationSecondaryControlContainer,
} from './PaginationContainer';

export type PaginationProps = {
	/** Describes the navigation element to assistive technologies. */
	'aria-label'?: string;
	/** Function to generate a href for each list item. */
	generateHref: (pageNumber: number) => string;
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

export function Pagination({
	'aria-label': ariaLabel = 'Pagination',
	generateHref,
	windowLimit = 3,
	currentPage,
	totalPages,
	itemRangeText,
	itemsPerPage,
	itemsPerPageOptions,
	onItemsPerPageChange,
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
									key={item.direction}
									direction={item.direction}
									href={generateHref(item.pageNumber)}
								/>
							);
						case 'page':
							return (
								<PaginationItemPage
									key={item.pageNumber}
									href={generateHref(item.pageNumber)}
									pageNumber={item.pageNumber}
									isActive={item.isActive}
								/>
							);
						case 'separator':
							return <PaginationItemSeparator key={`${index}-separator`} />;
						default:
							return null;
					}
				})}
			</PaginationItemContainer>
			{hasRightArea ? (
				<PaginationSecondaryControlContainer>
					{itemRangeText ? <Text>{itemRangeText}</Text> : null}
					{itemsPerPage && onItemsPerPageChange ? (
						<PaginationItemsPerPageSelect
							value={itemsPerPage}
							options={itemsPerPageOptions}
							onChange={onItemsPerPageChange}
						/>
					) : null}
				</PaginationSecondaryControlContainer>
			) : null}
		</PaginationContainer>
	);
}
