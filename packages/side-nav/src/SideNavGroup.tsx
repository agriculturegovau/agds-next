import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { LinkListContext, useLinkListDepth } from './context';
import { boxPalette } from '@ag.ds-next/core';

type SideNavGroupProps = { children: ReactNode };

export const SideNavGroup = ({ children }: SideNavGroupProps) => {
	const depth = useLinkListDepth();
	const value = depth + 1;
	return (
		<LinkListContext.Provider value={value}>
			<Box
				as="ul"
				role="menu"
				borderTop
				css={{
					borderTopColor: value > 1 ? boxPalette.borderMuted : undefined,
				}}
			>
				{children}
			</Box>
		</LinkListContext.Provider>
	);
};
