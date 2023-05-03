import { boxPalette } from '../core';
import { Box } from '../box';

export function MainNavBottomBar() {
	return (
		<Box
			borderBottom
			borderBottomWidth="xxl"
			css={{ borderBottomColor: boxPalette.accent }}
		/>
	);
}
