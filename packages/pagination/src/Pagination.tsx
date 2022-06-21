import { BaseButtonProps } from '@ag.ds-next/button';
import { Flex } from '@ag.ds-next/box';
import { mapSpacing } from '@ag.ds-next/core';
import { DirectionButton } from '@ag.ds-next/direction-link';
import { BaseButton } from '../../../docs/playroom/components';
import { usePagination } from './usePagination';

export type PaginationProps = {
	onChange: (pageNumber: number) => void;
	currentPage: number;
	limit: number;
	totalPages: number;
};

export function Pagination(props: PaginationProps) {
	const pagination = usePagination(props);
	return (
		<nav aria-label="pagination">
			<Flex as="ul">
				{pagination?.map((item, idx) => {
					switch (item.type) {
						case 'direction':
							return (
								<DirectionButton
									key={idx}
									direction={item.direction}
									onClick={() => props.onChange(item.page)}
									css={{ height: mapSpacing(3) }}
								>
									{item.direction === 'left' ? 'Previous' : 'Next'}
								</DirectionButton>
							);
						case 'page':
							return (
								<li key={idx}>
									<PaginationListItemButton
										aria-label={`Go to page ${item.page}`}
										onClick={() => props.onChange(item.page)}
										isSelected={item.isSelected}
									>
										{item.page}
									</PaginationListItemButton>
								</li>
							);
						case 'divider':
							return (
								<Flex
									key={idx}
									justifyContent="center"
									alignItems="center"
									width={mapSpacing(3)}
									height={mapSpacing(3)}
								>
									...
								</Flex>
							);
						default:
							return null;
					}
				})}
			</Flex>
		</nav>
	);
}

function PaginationListItemButton({
	isSelected,
	...props
}: BaseButtonProps & { isSelected: boolean }) {
	return (
		<Flex
			{...props}
			as={BaseButton}
			justifyContent="center"
			alignItems="center"
			width={mapSpacing(3)}
			height={mapSpacing(3)}
			link
			focus
			css={isSelected ? { color: 'black', textDecoration: 'none' } : undefined}
		/>
	);
}
