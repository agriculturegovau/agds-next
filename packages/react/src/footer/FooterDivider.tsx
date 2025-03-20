import { Box, type BorderColor } from '../box';
import { type ResponsiveProp } from '../core';

export function FooterDivider({
	color = 'accent',
}: {
	color?: ResponsiveProp<BorderColor>;
}) {
	return (
		<Box
			aria-hidden
			as="hr"
			borderColor={color}
			borderTop
			borderTopWidth="sm"
			css={{
				overflow: 'visible',
				width: '100%',
			}}
		/>
	);
}
