import { Box } from '../box';
import { LinkListContext, useLinkListDepth } from './context';
import { type SideNavUnorderedListProps } from './types';

export function SideNavUnorderedList({
	children,
	isOpen,
}: SideNavUnorderedListProps) {
	const depth = useLinkListDepth();
	const value = depth + 1;

	return isOpen ? (
		<LinkListContext.Provider value={value}>
			<Box as="ul">{children}</Box>
		</LinkListContext.Provider>
	) : null;
}
