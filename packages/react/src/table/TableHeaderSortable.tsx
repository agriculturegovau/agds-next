import { Box, Flex } from '../box';
import { BaseButton } from '../button';
import { boxPalette } from '../core';
import { ArrowDownIcon, ArrowUpIcon } from '../icon';
import { TableHeaderProps } from './TableHeader';

export type TableSortDirection = 'ASC' | 'DESC' | undefined;

type TableHeaderSortableProps = TableHeaderProps & {
	sort: TableSortDirection;
	onClick?: () => void;
};

/** Used in place of TableHeader when users can click a column header to
 * sort the table. */
export const TableHeaderSortable = ({
	children,
	textAlign = 'left',
	width,
	sort,
	onClick,
}: TableHeaderSortableProps) => {
	const Icon = sort === 'DESC' ? ArrowUpIcon : ArrowDownIcon;

	return (
		<Box
			as="th"
			scope="col"
			aria-sort={getSortLabel(sort)}
			focus
			width={width}
			css={{
				textAlign,
				borderBottomColor: boxPalette.foregroundAction,
			}}
			{...(sort && {
				borderBottom: true,
				borderBottomWidth: 'xl',
			})}
		>
			<Flex
				as={BaseButton}
				gap={0.5}
				onClick={onClick}
				type="button"
				padding={0.75}
				fontWeight="bold"
				width="100%"
				justifyContent="space-between"
				alignItems="center"
				focus
				css={{
					textDecoration: 'underline',
					svg: {
						display: sort ? 'block' : 'none',
					},
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
						svg: {
							display: 'block',
							transform: sort ? 'rotate(180deg)' : 'rotate(0deg)',
						},
					},
				}}
			>
				{children}
				<Icon size="sm" color="action" />
			</Flex>
		</Box>
	);
};

const getSortLabel = (sort: TableSortDirection) => {
	if (sort === 'ASC') return 'ascending';
	if (sort === 'DESC') return 'descending';
	return undefined;
};
