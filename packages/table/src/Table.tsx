import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';

export type TableProps = PropsWithChildren<{
	/** If true, alternating rows will have a different background colour. */
	striped?: boolean;
}>;

export const Table = ({ children, striped }: TableProps) => {
	return (
		<Box
			as="table"
			fontSize="sm"
			width="100%"
			css={{
				borderCollapse: 'collapse',
				borderSpacing: 0,

				'tbody tr:nth-last-of-type( odd )': {
					backgroundColor: striped ? boxPalette.backgroundShade : 'transparent',
				},
			}}
		>
			{children}
		</Box>
	);
};
