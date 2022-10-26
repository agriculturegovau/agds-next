import { boxPalette } from '../../core/src';
import { Box } from '../../box/src';
import { bottomBarPadding } from './utils';

export function MainNavBottomBar() {
	return (
		<Box
			paddingTop={bottomBarPadding}
			css={{ backgroundColor: boxPalette.accent }}
		/>
	);
}
