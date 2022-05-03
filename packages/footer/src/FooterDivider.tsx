import { packs } from '@ag.ds-next/core';
import { localPalette } from './localPalette';

export function FooterDivider() {
	return (
		<hr
			aria-hidden="true"
			css={{
				boxSizing: 'content-box',
				height: 0,
				margin: 0,
				overflow: 'visible',
				border: 'none',
				borderTopWidth: 1,
				borderTopStyle: 'solid',
				borderColor: localPalette.border,
				width: '100%',
			}}
		/>
	);
}
