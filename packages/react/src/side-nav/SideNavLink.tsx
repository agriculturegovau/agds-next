import { PropsWithChildren, ReactNode } from 'react';
import { Flex } from '../flex';
import { useLinkComponent, LinkProps, tokens } from '../core';
import { boxPalette, packs } from '../core';
import { sideBarLocalPalette } from '../side-bar';
import { useLinkListDepth } from './context';

export type SideNavLinkType = LinkProps & {
	isActive?: boolean;
	isCurrentPage?: boolean;
	label: ReactNode;
};

export function SideNavLink({
	isActive,
	isCurrentPage,
	children,
	label,
	...props
}: SideNavLinkType) {
	const depth = useLinkListDepth();
	const Link = useLinkComponent();
	return (
		<SideNavListItem isActive={isActive} depth={depth}>
			<Flex
				as={Link}
				aria-current={isCurrentPage ? 'page' : undefined}
				gap={0.75}
				color="muted"
				fontSize="xs"
				paddingY={1}
				paddingRight={1}
				borderBottom
				borderBottomWidth="sm"
				borderColor="muted"
				focus
				{...props}
				css={{
					textDecoration: 'none',
					paddingLeft: `${depth}rem`,

					'&:hover': {
						color: boxPalette.foregroundText,
						backgroundColor: sideBarLocalPalette.hover,
						'& span:last-of-type': packs.underline,
					},

					...(isCurrentPage && {
						position: 'relative',
						color: boxPalette.foregroundText,
						backgroundColor: sideBarLocalPalette.hover,
						fontWeight: tokens.fontWeight.bold,
						':before': {
							content: '""',
							position: 'absolute',
							top: 0,
							left: 0,
							bottom: 0,
							borderLeftWidth: tokens.borderWidth.xl,
							borderLeftStyle: 'solid',
							borderLeftColor: boxPalette.foregroundAction,
							pointerEvents: 'none',
						},
					}),
				}}
			>
				<SideNavLinkIndicator depth={depth} />
				<span>{label}</span>
			</Flex>
			{children}
		</SideNavListItem>
	);
}

type SideNavListItemProps = PropsWithChildren<{
	depth: number;
	isActive?: boolean;
}>;

function SideNavListItem({ children, depth, isActive }: SideNavListItemProps) {
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

type SideNavLinkIndicatorProps = { depth: number };

function SideNavLinkIndicator({ depth }: SideNavLinkIndicatorProps) {
	if (depth > 2) return <span aria-hidden>&mdash;</span>;
	if (depth > 1) return <span aria-hidden>&ndash;</span>;
	return null;
}
