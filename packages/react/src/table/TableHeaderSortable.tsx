import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { BaseButton } from '../button';
import { boxPalette, packs, ResponsiveProp } from '../core';
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
				borderColor: 'selected',
				borderBottom: true,
				borderBottomWidth: 'xl',
			})}
		>
			<Flex
				alignItems="center"
				as={BaseButton}
				color="text"
				css={{
					...packs.underline,
					svg: {
						color: boxPalette.foregroundAction,
					},
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
						textDecoration: 'none',
						svg: {
							color: boxPalette.foregroundText,
						},
					},
				}}
				focusRingFor="keyboard"
				fontWeight="bold"
				gap={0.5}
				justifyContent="space-between"
				onClick={onClick}
				padding={0.75}
				width="100%"
			>
				<Box
					as="span"
					css={{
						marginLeft:
							textAlign === 'right' || textAlign === 'center'
								? 'auto'
								: undefined,
						marginRight: textAlign === 'center' ? 'auto' : undefined,
					}}
				>
					{children}
				</Box>
				<Icon size="md" color="inherit" />
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
			return ArrowUpIcon;
		case 'DESC':
			return ArrowDownIcon;
		default:
			return ArrowUpDownIcon;
	}
};
