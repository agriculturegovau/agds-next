import { boxPalette, tokens } from '../core';

export function DropdownMenuDivider() {
	return (
		<div
			role="separator"
			css={{
				boxSizing: 'content-box',
				height: 0,
				margin: 0,
				overflow: 'visible',
				border: 'none',
				borderTopWidth: tokens.borderWidth.sm,
				borderTopStyle: 'solid',
				borderColor: boxPalette.borderMuted,
				width: '100%',
			}}
		/>
	);
}
