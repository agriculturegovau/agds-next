import { type ReactNode } from 'react';
import { collapsingSideBarHoverVar } from '../_collapsing-side-bar';
import {
	boxPalette,
	mapSpacing,
	packs,
	tokens,
	useLinkComponent,
} from '../core';
import { Flex } from '../flex';
import { ChevronRightIcon } from '../icon';
import { type SideNavLinkProps } from './SideNavListItem';
import { useLinkListDepth } from './context';

export const SideNavLink = ({
	hasSubLevelItemsIndicator,
	isCurrentPage,
	isOpen,
	label,
	...props
}: Omit<SideNavLinkProps, 'subLevelVisible'> & {
	hasSubLevelItemsIndicator?: boolean;
	isCurrentPage?: boolean;
	isOpen: boolean;
	label: ReactNode;
}) => {
	const Link = useLinkComponent();
	const depth = useLinkListDepth();

	return (
		<Flex
			aria-current={isCurrentPage ? 'page' : undefined}
			aria-label={
				hasSubLevelItemsIndicator
					? `${label}${isOpen ? ', has expanded sub links' : ', has sub links'}`
					: undefined
			}
			as={Link}
			borderBottom
			borderBottomWidth="sm"
			borderColor="muted"
			color="muted"
			css={{
				textDecoration: 'none',
				paddingLeft: `${depth}rem`,

				'&:hover': {
					color: boxPalette.foregroundText,
					backgroundColor: collapsingSideBarHoverVar,
					'& span:last-of-type': packs.underline,
				},

				...(isCurrentPage && {
					position: 'relative',
					color: boxPalette.foregroundText,
					backgroundColor: collapsingSideBarHoverVar,
					fontWeight: tokens.fontWeight.bold,
					'::before': {
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
			focusRingFor="keyboard"
			fontSize="xs"
			gap={0.75}
			paddingBottom={depth > 1 ? 1 : 0.75}
			paddingRight={1}
			paddingTop={1}
			{...props}
		>
			<SideNavActiveAncestorIndicator depth={depth} />

			<span css={{ flexGrow: 1 }}>{label}</span>

			{hasSubLevelItemsIndicator && (
				<ChevronRightIcon
					css={{
						transform: isOpen ? 'rotate(90deg)' : undefined,
						...(depth > 1
							? { height: '1lh', marginRight: mapSpacing(0.25) }
							: undefined),
					}}
					size={depth > 1 ? 'sm' : 'md'}
				/>
			)}
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
