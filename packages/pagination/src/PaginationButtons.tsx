import { usePagination } from './usePagination';
import { PaginationContainer } from './PaginationContainer';
import { PaginationItemDirectionButton } from './PaginationItemDirection';
import { PaginationItemSeparator } from './PaginationItemSeparator';
import { PaginationItemPageButton } from './PaginationItemPage';

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
};

export function PaginationButtons({
	'aria-label': ariaLabel = 'pagination',
	onChange,
	currentPage,
	totalPages,
	windowLimit = 3,
}: PaginationButtonsProps) {
	const pagination = usePagination({ currentPage, totalPages, windowLimit });
	return (
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
	);
}
