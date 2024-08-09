import { boxPalette, tokens } from '../core';
import { useLinkListDepth } from './context';
import { type SideNavLinkProps } from './types';

export function SideNavListItem({ children, isActive }: SideNavLinkProps) {
	const depth = useLinkListDepth();

	return (
		<li
			css={
				depth === 1 && isActive
					? {
							position: 'relative',
							'::before': {
								borderLeftColor: boxPalette.borderMuted,
								borderLeftStyle: 'solid',
								borderLeftWidth: tokens.borderWidth.xl,
								bottom: 0,
								content: '""',
								left: 0,
								pointerEvents: 'none',
								position: 'absolute',
								top: 0,
							},
					  }
					: undefined
			}
		>
			{children}
		</li>
	);
}
