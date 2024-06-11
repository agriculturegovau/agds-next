import { Box, type BorderColor } from '../box';
import { type ResponsiveProp } from '../core';

export function MainNavBottomBar({
	borderColor,
}: {
	borderColor: ResponsiveProp<BorderColor>;
}) {
	return <Box borderBottom borderBottomWidth="xxl" borderColor={borderColor} />;
}
