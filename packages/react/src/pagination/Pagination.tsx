import { usePagination } from './usePagination';
import { PaginationContainer } from './PaginationContainer';
import { PaginationItemDirection } from './PaginationItemDirection';
import { PaginationItemSeparator } from './PaginationItemSeparator';
import { PaginationItemPage } from './PaginationItemPage';

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
};

export function Pagination({
	'aria-label': ariaLabel = 'pagination',
	generateHref,
	windowLimit = 3,
	currentPage,
	totalPages,
}: PaginationProps) {
	const pagination = usePagination({ currentPage, windowLimit, totalPages });
	return (
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
	);
}
