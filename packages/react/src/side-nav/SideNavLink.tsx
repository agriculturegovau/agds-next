import { ReactNode } from 'react';
import { collapsingSideBarLocalPalette } from '../_collapsing-side-bar';
import {
	boxPalette,
	mapSpacing,
	packs,
	tokens,
	useLinkComponent,
} from '../core';
import { Flex } from '../flex';
import { ChevronDownIcon, ChevronRightIcon } from '../icon';
import { SideNavLinkProps } from './SideNavListItem';
import { useLinkListDepth } from './context';

export const SideNavLink = ({
	hasNestedItemsIndicator,
	isCurrentPage,
	isOpen,
	label,
	nestedItemsIndicatorLabel,
	...props
}: Omit<SideNavLinkProps, 'showSubLevel'> & {
	hasNestedItemsIndicator?: boolean;
	isCurrentPage?: boolean;
	isOpen: boolean;
	label: ReactNode;
	nestedItemsIndicatorLabel?: string;
}) => {
	const Link = useLinkComponent();
	const depth = useLinkListDepth();

	return (
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
			<SideNavActiveAncestorIndicator depth={depth} />

			<span css={{ flexGrow: 1 }}>{label}</span>

			{hasNestedItemsIndicator &&
				(isOpen ? (
					<ChevronDownIcon
						aria-hidden={false}
						aria-label=". Sub-level links below."
						css={depth > 1 ? { marginRight: mapSpacing(0.25) } : undefined}
						size={depth > 1 ? 'sm' : 'md'}
					/>
				) : (
					<ChevronRightIcon
						aria-hidden={false}
						aria-label={nestedItemsIndicatorLabel}
						css={depth > 1 ? { marginRight: mapSpacing(0.25) } : undefined}
						size={depth > 1 ? 'sm' : 'md'}
					/>
				))}
		</Flex>
	);
};

type SideNavActiveAncestorIndicatorProps = { depth: number };

const SideNavActiveAncestorIndicator = ({
	depth,
}: SideNavActiveAncestorIndicatorProps) => {
	if (depth > 2) return <span aria-hidden>&mdash;</span>;
	if (depth > 1) return <span aria-hidden>&ndash;</span>;
	return null;
};
