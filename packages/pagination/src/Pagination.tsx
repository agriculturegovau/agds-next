import { usePagination } from './usePagination';
import { PaginationContainer } from './PaginationContainer';
import { PaginationItemDirection } from './PaginationItemDirection';
import { PaginationItemSeperator } from './PaginationItemSeperator';
import { PaginationItemPage } from './PaginationItemPage';

export type PaginationProps = {
	'aria-label'?: string;
	onChange: (pageNumber: number) => void;
	currentPage: number;
	limit: number;
	totalPages: number;
};

export function Pagination({
	'aria-label': ariaLabel = 'pagination',
	onChange,
	currentPage,
	totalPages,
}: PaginationProps) {
	const pagination = usePagination({ currentPage, totalPages });
	return (
		<PaginationContainer aria-label={ariaLabel}>
			{pagination.map((item, idx) => {
				switch (item.type) {
					case 'direction':
						return (
							<PaginationItemDirection
								key={idx}
								direction={item.direction}
								onClick={() => onChange(item.pageNumber)}
							/>
						);
					case 'page':
						return (
							<PaginationItemPage
								key={idx}
								pageNumber={item.pageNumber}
								onClick={() => onChange(item.pageNumber)}
								isActive={item.isActive}
							/>
						);
					case 'seperator':
						return <PaginationItemSeperator key={idx} />;
					default:
						return null;
				}
			})}
		</PaginationContainer>
	);
}
