import { packs } from '@ag.ds-next/core';

const focusAttribute = 'data-agds-focus-styles';

export function PseudoFocusRing() {
	return (
		<div
			{...{ [focusAttribute]: true }}
			css={{
				position: 'absolute',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				pointerEvents: 'none',
				zIndex: 1,
			}}
		/>
	);
}

export const pseudoFocusRingStyles = {
	position: 'relative',
	[`:focus > [${focusAttribute}]`]: {
		// Removes the offset from our default focus ring
		border: `${packs.outline.outlineWidth} ${packs.outline.outlineStyle} ${packs.outline.outlineColor}`,
	},
} as const;
