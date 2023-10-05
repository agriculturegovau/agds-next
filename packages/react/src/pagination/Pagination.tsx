import { Flex } from '../flex';
import { Text } from '../text';
import { usePagination } from './usePagination';
import { PaginationContainer } from './PaginationContainer';
import { PaginationItemDirection } from './PaginationItemDirection';
import { PaginationItemSeparator } from './PaginationItemSeparator';
import { PaginationItemPage } from './PaginationItemPage';
import { PaginationItemsPerPageSelect } from './PaginationItemsPerPageSelect';

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
	onChangeItemsPerPage?: (itemsPerPage: number) => void;
};

export function Pagination({
	'aria-label': ariaLabel = 'pagination',
	generateHref,
	windowLimit = 3,
	currentPage,
	totalPages,
	itemRangeText,
	itemsPerPage,
	itemsPerPageOptions,
	onChangeItemsPerPage,
}: PaginationProps) {
	const pagination = usePagination({ currentPage, windowLimit, totalPages });
	const hasRightArea = (itemsPerPage && onChangeItemsPerPage) || itemRangeText;

	return (
		<Flex
			gap={2}
			alignItems="center"
			justifyContent={hasRightArea ? 'space-between' : 'center'}
			flexDirection={{
				xs: 'column',
				lg: 'row',
			}}
			flexWrap="wrap"
		>
			<PaginationContainer aria-label={ariaLabel}>
				{pagination.map((item, idx) => {
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
									key={idx}
									href={generateHref(item.pageNumber)}
									pageNumber={item.pageNumber}
									isActive={item.isActive}
								/>
							);
						case 'separator':
							return <PaginationItemSeparator key={idx} />;
						default:
							return null;
					}
				})}
			</PaginationContainer>
			{hasRightArea && (
				<Flex
					gap={2}
					alignItems="center"
					flexDirection={{
						xs: 'column',
						lg: 'row',
					}}
				>
					{itemRangeText && <Text>{itemRangeText}</Text>}
					{itemsPerPage && onChangeItemsPerPage && (
						<PaginationItemsPerPageSelect
							value={itemsPerPage}
							options={itemsPerPageOptions}
							onChange={onChangeItemsPerPage}
						/>
					)}
				</Flex>
			)}
		</Flex>
	);
}
