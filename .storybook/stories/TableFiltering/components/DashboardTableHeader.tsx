import { Box, Flex } from '@ag.ds-next/react/box';
import { BaseButton } from '@ag.ds-next/react/button';
import { boxPalette, ResponsiveProp } from '@ag.ds-next/react/core';
import {
	ChevronDownIcon,
	ChevronUpIcon,
	ChevronsUpDownIcon,
} from '@ag.ds-next/react/icon';
import { TableHeader, TableHeaderWidthType } from '@ag.ds-next/react/table';

export type DashboardTableHeaderSortDirection = 'ASC' | 'DESC' | undefined;

export type DashboardTableHeaderBaseProps = {
	textAlign?: 'left' | 'right' | 'center' | undefined;
	width?: ResponsiveProp<TableHeaderWidthType | string> | undefined;
};

type DashboardTableHeaderProps = {
	children: string;
	sort: DashboardTableHeaderSortDirection;
	onClick?: () => void;
	isSortable: boolean;
} & DashboardTableHeaderBaseProps;

export const DashboardTableHeader = ({
	children,
	textAlign = 'left',
	width,
	sort,
	isSortable,
	onClick,
}: DashboardTableHeaderProps) => {
	const getSortLabel = (sort: DashboardTableHeaderSortDirection) => {
		if (sort === 'ASC') return 'ascending';
		if (sort === 'DESC') return 'descending';
		return undefined;
	};

	if (!isSortable) {
		return (
			<TableHeader width={width} scope="col" textAlign={textAlign}>
				{children}
			</TableHeader>
		);
	}

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
				focus
				css={{
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
					},
				}}
			>
				{children}
				{sort === 'ASC' ? (
					<ChevronDownIcon color="action" />
				) : sort === 'DESC' ? (
					<ChevronUpIcon color="action" />
				) : (
					<ChevronsUpDownIcon color="action" />
				)}
			</Flex>
		</Box>
	);
};
