import { boxPalette } from '@ag.ds-next/core';
import { Box } from '@ag.ds-next/box';
import { bottomBarPadding } from './utils';

export function MainNavBottomBar() {
	return (
		<Box
			paddingTop={bottomBarPadding}
			css={{ backgroundColor: boxPalette.accent }}
		/>
	);
}
