import { boxPalette } from '@ag.ds-next/core';

export const Divider = () => (
	<hr
		css={{
			boxSizing: 'content-box',
			height: 0,
			margin: 0,
			overflow: 'visible',
			border: 'none',
			borderTopWidth: 1,
			borderTopStyle: 'solid',
			borderColor: boxPalette.border,
			width: '100%',
		}}
	/>
);
