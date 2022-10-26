import { boxPalette } from '../core';
import { Box } from '../box';
import { bottomBarPadding } from './utils';

export function MainNavBottomBar() {
	return (
		<Box
			paddingTop={bottomBarPadding}
			css={{ backgroundColor: boxPalette.accent }}
		/>
	);
}
