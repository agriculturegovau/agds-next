import { type PropsWithChildren } from 'react';
import { Box } from '../box';
import { BaseButton, scaleIconOnHover, type BaseButtonProps } from '../button';
import { boxPalette, packs, type ResponsiveProp } from '../core';
import { Flex } from '../flex';
import { ArrowDownIcon, ArrowUpIcon, ArrowUpDownIcon } from '../icon';

export type TableSortDirection = 'ASC' | 'DESC';

export type TableHeaderSortableProps = {
	display?: ResponsiveProp<'none' | 'table-cell'>;
	/** Callback function for when the column header is clicked. */
	onClick?: BaseButtonProps['onClick'];
	onMouseEnter?: BaseButtonProps['onMouseEnter'];
	onMouseLeave?: BaseButtonProps['onMouseLeave'];
	onMouseOut?: BaseButtonProps['onMouseOut'];
	onMouseOver?: BaseButtonProps['onMouseOver'];
	/** The active direction this column is being sorted by. */
	sort?: TableSortDirection;
	/** Sets the horizontal alignment of the content. */
	textAlign?: 'left' | 'center' | 'right';
	/** Sets the width of the column. */
	width?: ResponsiveProp<string | number>;
};

/** Used in place of `TableHeader` when users can click a column header to
 * sort the table. */
export const TableHeaderSortable = ({
	children,
	display,
	onClick,
	onMouseEnter,
	onMouseLeave,
	onMouseOut,
	onMouseOver,
	sort,
	textAlign = 'left',
	width,
}: PropsWithChildren<TableHeaderSortableProps>) => {
	const Icon = getSortIcon(sort);
	const sortLabel = getSortLabel(sort);
	const scaleIconCSS = scaleIconOnHover();
	return (
		<Box
			aria-sort={sortLabel}
			as="th"
			borderBottom
			borderBottomWidth={sort ? 'xl' : 'none'}
			borderColor="selected"
			display={display}
			scope="col"
			width={width}
		>
			<Flex
				alignItems="center"
				as={BaseButton}
				color="text"
				css={{
					...packs.underline,
					svg: {
						color: boxPalette.foregroundAction,
						transition: scaleIconCSS.transition,
					},
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
						textDecoration: 'none',
						svg: {
							color: boxPalette.foregroundText,
							transform: scaleIconCSS.transform,
						},
					},
				}}
				focusRingFor="keyboard"
				fontWeight="bold"
				gap={0.5}
				justifyContent="space-between"
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onMouseOut={onMouseOut}
				onMouseOver={onMouseOver}
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
					// Aligns text should it wrap
					textAlign={textAlign}
				>
					{children}
				</Box>
				<Icon color="inherit" />
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
