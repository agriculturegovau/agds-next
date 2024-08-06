import { Box, type BorderColor } from '../box';
import { type ResponsiveProp } from '../core';

/**
 * @deprecated
 * Use `focusMode={true}` on `MainNav` instead.
 * This will be removed in the next major version.
 */
export function MainNavBottomBar({
	borderColor = 'accent',
}: {
	borderColor?: ResponsiveProp<BorderColor>;
}) {
	return <Box borderBottom borderBottomWidth="xxl" borderColor={borderColor} />;
}
