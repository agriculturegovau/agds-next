import { PropsWithChildren, ReactNode } from 'react';
import { Flex } from '../flex';
import {
	boxPalette,
	LinkProps,
	mapSpacing,
	packs,
	tokens,
	useLinkComponent,
} from '../core';
import { collapsingSideBarLocalPalette } from '../_collapsing-side-bar';
import { ChevronDownIcon, ChevronRightIcon } from '../icon';
import { useLinkListDepth } from './context';
import { SideNavProps } from './SideNav';

export type SideNavLinkType = LinkProps & {
	isActive?: boolean;
	isCurrentPage?: boolean;
	isOpen: boolean;
	label: ReactNode;
	nestedItemsVariant: SideNavProps['nestedItemsVariant'];
};

export function SideNavLink({
	children,
	isActive,
	isCurrentPage,
	isOpen,
	label,
	nestedItemsVariant,
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
				paddingTop={1}
				paddingBottom={depth > 1 ? 1 : 0.75}
				paddingRight={1}
				borderBottom
				borderBottomWidth="sm"
				borderColor="muted"
				focusRingFor="keyboard"
				{...props}
				css={{
					textDecoration: 'none',
					paddingLeft: `${depth}rem`,

					'&:hover': {
						color: boxPalette.foregroundText,
						backgroundColor: collapsingSideBarLocalPalette.hover,
						'& span:last-of-type': packs.underline,
					},

					...(isCurrentPage && {
						position: 'relative',
						color: boxPalette.foregroundText,
						backgroundColor: collapsingSideBarLocalPalette.hover,
						fontWeight: tokens.fontWeight.bold,
						':before': {
							content: '""',
							position: 'absolute',
							top: 0,
							left: 0,
							bottom: 0,
							borderLeftWidth: tokens.borderWidth.xl,
							borderLeftStyle: 'solid',
							borderLeftColor: boxPalette.selected,
							pointerEvents: 'none',
						},
					}),
				}}
			>
				<SideNavLinkIndicator depth={depth} />

				<span css={{ flex: 1 }}>{label}</span>

				{Boolean(children) &&
					nestedItemsVariant === 'openOnNav' &&
					(isOpen ? (
						<ChevronDownIcon
							aria-hidden={false}
							aria-label="(related links below)"
							css={depth > 1 ? { marginRight: mapSpacing(0.25) } : undefined}
							size={depth > 1 ? 'sm' : 'md'}
						/>
					) : (
						<ChevronRightIcon
							aria-hidden={false}
							aria-label="(related links available after opening)"
							css={depth > 1 ? { marginRight: mapSpacing(0.25) } : undefined}
							size={depth > 1 ? 'sm' : 'md'}
						/>
					))}
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
