import type { PropsWithChildren } from 'react';
import { Stack } from '../stack';
import { ResponsiveProp } from '../core';
import { mapResponsiveProp } from '../core/responsive';

export type LinkListContainerProps = PropsWithChildren<{
	horizontal?: ResponsiveProp<boolean>;
}>;

export const LinkListContainer = ({
	children,
	horizontal,
}: LinkListContainerProps) => {
	// this is not ideal.
	// these props gets run through mapResponsiveProp again inside Stack -> Box
	// but since it is already an expanded array, with no valueMapper (at that point)
	// it just echoes itself back out.
	// revisit this if mapResponsiveProp ever changes

	const flexDirection = mapResponsiveProp(horizontal, (value) =>
		value ? 'row' : 'column'
	);

	const gap = mapResponsiveProp(horizontal, (value) => (value ? 1 : 0.5));

	return (
		<Stack as="ul" flexDirection={flexDirection} flexWrap="wrap" gap={gap}>
			{children}
		</Stack>
	);
};
