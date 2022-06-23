import { usePagination, UsePaginationProps } from './usePagination';
import { PaginationContainer } from './PaginationContainer';
import { PaginationItemDirectionButton } from './PaginationItemDirection';
import { PaginationItemSeparator } from './PaginationItemSeparator';
import { PaginationItemPageButton } from './PaginationItemPage';

export type PaginationButtonsProps = UsePaginationProps & {
	'aria-label'?: string;
	onChange: (pageNumber: number) => void;
};

export function PaginationButtons({
	'aria-label': ariaLabel = 'pagination',
	onChange,
	currentPage,
	totalPages,
	windowLimit,
}: PaginationButtonsProps) {
	const pagination = usePagination({ currentPage, totalPages, windowLimit });
	return (
		<PaginationContainer aria-label={ariaLabel}>
			{pagination.map((item, idx) => {
				switch (item.type) {
					case 'direction':
						return (
							<PaginationItemDirectionButton
								key={idx}
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
