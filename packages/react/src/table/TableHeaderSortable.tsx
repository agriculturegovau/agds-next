import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { BaseButton } from '../button';
import { boxPalette, ResponsiveProp } from '../core';
import { ArrowDownIcon, ArrowUpIcon, ArrowUpDownIcon } from '../icon';

export type TableSortDirection = 'ASC' | 'DESC';

export type TableHeaderSortableProps = {
	/** The active direction this column is being sorted by. */
	sort?: TableSortDirection;
	/** Callback function for when the column header is clicked. */
	onClick?: () => void;
	/** Sets the horizontal alignment of the content. */
	textAlign?: 'left' | 'center' | 'right';
	/** Sets the width of the column. */
	width?: ResponsiveProp<string | number>;
};

/** Used in place of `TableHeader` when users can click a column header to
 * sort the table. */
export const TableHeaderSortable = ({
	children,
	sort,
	onClick,
	textAlign = 'left',
	width,
}: PropsWithChildren<TableHeaderSortableProps>) => {
	const Icon = getSortIcon(sort);
	const sortLabel = getSortLabel(sort);
	return (
		<Box
			as="th"
			scope="col"
			aria-sort={sortLabel}
			width={width}
			{...(sort && {
				borderBottom: true,
				borderBottomWidth: 'xl',
			})}
			css={{
				textAlign,
				borderBottomColor: boxPalette.foregroundAction,
			}}
		>
			<Flex
				as={BaseButton}
				gap={0.5}
				onClick={onClick}
				padding={0.75}
				color="text"
				fontWeight="bold"
				width="100%"
				justifyContent="space-between"
				alignItems="center"
				focus
				css={{
					textDecoration: 'underline',
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
						textDecoration: 'none',
					},
				}}
			>
				{children}
				<Icon size="md" color="action" />
			</Flex>
		</Box>
	);
};

const getSortLabel = (sort?: TableSortDirection) => {
	if (sort === 'ASC') return 'ascending';
	if (sort === 'DESC') return 'descending';
};

const getSortIcon = (sort?: TableSortDirection) => {
	switch (sort) {
		case 'ASC':
			return ArrowDownIcon;
		case 'DESC':
			return ArrowUpIcon;
		default:
			return ArrowUpDownIcon;
	}
};
