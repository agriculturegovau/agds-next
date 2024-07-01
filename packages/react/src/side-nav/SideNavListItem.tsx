import { boxPalette, LinkProps, tokens } from '../core';
import { useLinkListDepth } from './context';

export type SideNavLinkProps = LinkProps & {
	isActive?: boolean;
};

export function SideNavListItem({ children, isActive }: SideNavLinkProps) {
	const depth = useLinkListDepth();

	return (
		<li
			css={
				depth === 1 && isActive
					? {
							position: 'relative',
							':before': {
								content: '""',
								position: 'absolute',
								top: 0,
								left: 0,
								bottom: 0,
								borderLeftWidth: tokens.borderWidth.xl,
								borderLeftStyle: 'solid',
								borderLeftColor: boxPalette.borderMuted,
								pointerEvents: 'none',
							},
					  }
					: undefined
			}
		>
			{children}
		</li>
	);
}
