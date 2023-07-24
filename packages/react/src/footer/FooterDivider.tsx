import { boxPalette } from '../core';

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
				borderColor: boxPalette.accent,
				width: '100%',
			}}
		/>
	);
}
