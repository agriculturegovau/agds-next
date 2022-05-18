import {
	Children,
	isValidElement,
	cloneElement,
	PropsWithChildren,
} from 'react';
import { Box } from '@ag.ds-next/box';
import {
	mapResponsiveProp,
	mapSpacing,
	mq,
	ResponsiveProp,
	Spacing,
} from '@ag.ds-next/core';

type ColumnRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type CardListProps = PropsWithChildren<{
	gap?: Spacing;
	templateColumns: ResponsiveProp<ColumnRange>;
}>;

export const CardList = ({
	children,
	gap = 1.5,
	templateColumns,
}: CardListProps) => {
	const styles = cardListStyles({ templateColumns, gap });
	return (
		<Box as="ul" css={styles}>
			{Children.map(children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(child, { as: 'li' });
				}
				return child;
			})}
		</Box>
	);
};

const cardListStyles = ({
	gap,
	templateColumns,
}: Pick<CardListProps, 'gap' | 'templateColumns'>) =>
	mq({
		display: 'grid',
		gridGap: mapResponsiveProp(gap, mapSpacing),
		gridTemplateColumns: mapResponsiveProp(
			templateColumns,
			(v) => `repeat(${v}, 1fr)`
		),
	});
