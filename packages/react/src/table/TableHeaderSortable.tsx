import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { BaseButton } from '../button';
import { boxPalette, ResponsiveProp } from '../core';
import { ArrowDownIcon, ArrowUpIcon } from '../icon';

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
	const Icon = sort === 'DESC' ? ArrowUpIcon : ArrowDownIcon;
	return (
		<Box
			as="th"
			scope="col"
			aria-sort={getSortLabel(sort)}
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
					backgroundColor: boxPalette.backgroundBody,
					textDecoration: 'underline',
					svg: {
						display: sort ? 'block' : 'none',
					},
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
						textDecoration: 'none',
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

const getSortLabel = (sort?: TableSortDirection) => {
	if (sort === 'ASC') return 'ascending';
	if (sort === 'DESC') return 'descending';
};
