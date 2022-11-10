import { packs } from '@ag.ds-next/core';

export const fullWidthFocusRingStyles = {
	position: 'relative',
	':focus': {
		':after': {
			// Removes the offset from our default focus ring
			border: `${packs.outline.outlineWidth} ${packs.outline.outlineStyle} ${packs.outline.outlineColor}`,
			content: '""',
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			pointerEvents: 'none',
			zIndex: 1,
		},
	},
} as const;
