import { PropsWithChildren } from 'react';
import { Box } from '../../box';

export type HeroCategoryBannerContainerProps = PropsWithChildren<{}>;

export const HeroCategoryBannerContainer = ({
	children,
}: HeroCategoryBannerContainerProps) => {
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
