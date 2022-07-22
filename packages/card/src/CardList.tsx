import {
	Children,
	isValidElement,
	cloneElement,
	PropsWithChildren,
} from 'react';
import { Columns } from '@ag.ds-next/columns';
import { ResponsiveProp, Spacing } from '@ag.ds-next/core';

type ColumnRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type CardListProps = PropsWithChildren<{
	gap?: Spacing;
	templateColumns: ResponsiveProp<ColumnRange>;
}>;

export const CardList = ({ children, templateColumns }: CardListProps) => {
	return (
		<Columns as="ul" gap={1.5} cols={templateColumns}>
			{Children.map(children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(child, { as: 'li' });
				}
				return child;
			})}
		</Columns>
	);
};
