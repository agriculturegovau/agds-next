import { Flex } from '../flex';
import { Text } from '../text';
import { usePagination } from './usePagination';
import { PaginationContainer } from './PaginationContainer';
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
	onChangeItemsPerPage?: (itemsPerPage: number) => void;
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
	onChangeItemsPerPage,
}: PaginationButtonsProps) {
	const pagination = usePagination({ currentPage, totalPages, windowLimit });
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
			</PaginationContainer>
			{hasRightArea && (
				<Flex
					gap={1}
					alignItems="center"
					flexDirection={{
						xs: 'column',
						lg: 'row',
					}}
				>
					{itemsPerPage && onChangeItemsPerPage && (
						<PaginationItemsPerPageSelect
							value={itemsPerPage}
							options={itemsPerPageOptions}
							onChange={onChangeItemsPerPage}
						/>
					)}
					{itemRangeText && <Text>{itemRangeText}</Text>}
				</Flex>
			)}
		</Flex>
	);
}
