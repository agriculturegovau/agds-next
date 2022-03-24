import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette } from '../../core/src';

export type TableProps = PropsWithChildren<{
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

				'tbody tr:nth-child( even )': {
					backgroundColor: striped ? boxPalette.backgroundShade : 'transparent',
				},
			}}
		>
			{children}
		</Box>
	);
};
