import { ReactNode } from 'react';
import { Box } from '../box';
import { LinkListContext, useLinkListDepth } from './context';

type SideNavGroupProps = { children: ReactNode };

export const SideNavGroup = ({ children }: SideNavGroupProps) => {
	const depth = useLinkListDepth();
	const value = depth + 1;
	return (
		<LinkListContext.Provider value={value}>
			<Box as="ul" borderTop borderColor={value > 1 ? 'muted' : 'border'}>
				{children}
			</Box>
		</LinkListContext.Provider>
	);
};
