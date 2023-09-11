import { PropsWithChildren } from 'react';
import { Box } from '../../box';

export type HeroBannerContainerProps = PropsWithChildren<{}>;

export const HeroBannerContainer = ({ children }: HeroBannerContainerProps) => {
	return (
		<Box
			as="section"
			background="contextAlt"
			css={{ position: 'relative', overflow: 'hidden' }}
		>
			{children}
		</Box>
	);
};
