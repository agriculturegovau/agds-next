import { themeColors, globalVariables } from '@ag.ds-next/core';

export function Divider({ accent }: { accent?: boolean }) {
	return (
		<hr
			css={{
				boxSizing: 'content-box',
				height: 0,
				overflow: 'visible',
				border: 'none',
				borderTopWidth: 1,
				borderTopStyle: 'solid',
				borderColor: accent ? globalVariables.accent : themeColors.border,
				width: '100%',
			}}
		/>
	);
}
