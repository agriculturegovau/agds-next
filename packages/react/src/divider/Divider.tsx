import { HTMLAttributes } from 'react';
import { boxPalette, tokens } from '../core';

export type DividerProps = {
	/** If true, the element will be hidden from assistive technologies. */
	'aria-hidden'?: HTMLAttributes<HTMLHRElement>['aria-hidden'];
};

export function Divider({ 'aria-hidden': ariaHidden = true }: DividerProps) {
	return (
		<hr
			aria-hidden={ariaHidden}
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
