import { boxPalette, globalPalette } from '@ag.ds-next/core';

export function Divider({ accent }: { accent?: boolean }) {
	return (
		<hr
			css={{
				boxSizing: 'content-box',
				height: 0,
				margin: 0,
				overflow: 'visible',
				border: 'none',
				borderTopWidth: 1,
				borderTopStyle: 'solid',
				borderColor: accent ? globalPalette.accent : boxPalette.border,
				width: '100%',
			}}
		/>
	);
}
