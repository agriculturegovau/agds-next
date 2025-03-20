import type { PropsWithChildren } from 'react';
import { Flex } from '../flex';
import { boxPalette, useLinkComponent, mapSpacing, packs } from '../core';
import { BaseButton } from '../button';
import { focusStyles } from '../box';
import { localPalette } from './localPalette';
import { isItemLink, MainNavListItemType } from './MainNavList';

export type MainNavDialogNavListProps = {
	'aria-label': string;
	activePath: string;
	closeMobileMenu: () => void;
	items?: MainNavListItemType[];
};

export function MainNavDialogNavList({
	'aria-label': ariaLabel,
	activePath,
	closeMobileMenu,
	items,
}: MainNavDialogNavListProps) {
	const Link = useLinkComponent();
	return (
		<nav aria-label={ariaLabel}>
			<Flex as="ul" borderColor="muted" borderTop flexDirection="column">
				{items?.map(({ label, endElement, ...item }, index) => {
					if (isItemLink(item)) {
						const active = item.href === activePath;
						return (
							<MainNavDialogNavListItem
								active={active}
								key={index}
								onClick={active ? closeMobileMenu : undefined} // Let the click event bubble up and close the menu on press of interactive item
							>
								<Link aria-current={active ? 'page' : undefined} {...item}>
									<span>{label}</span>
									{endElement}
								</Link>
							</MainNavDialogNavListItem>
						);
					}
					return (
						<MainNavDialogNavListItem active={false} key={index}>
							<BaseButton {...item}>
								<span>{label}</span>
								{endElement}
							</BaseButton>
						</MainNavDialogNavListItem>
					);
				})}
			</Flex>
		</nav>
	);
}

export type MainNavDialogNavListItemProps = PropsWithChildren<{
	active: boolean;
	onClick?: () => void;
}>;

export function MainNavDialogNavListItem({
	active,
	children,
	onClick,
}: MainNavDialogNavListItemProps) {
	return (
		<Flex
			as="li"
			borderBottom
			borderColor="muted"
			css={{
				'a, button': {
					boxSizing: 'border-box',
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: mapSpacing(0.5),
					padding: mapSpacing(1),
					color: boxPalette.foregroundAction,
					textDecoration: 'none',

					...(active && {
						color: boxPalette.foregroundText,
						fontWeight: 'bold',
					}),

					'&:hover': {
						color: boxPalette.foregroundText,
						backgroundColor: localPalette.linkHoverBg,
						'& > span:first-of-type': packs.underline,
					},

					...focusStyles,
				},
			}}
			fontSize="xs"
			height="100%"
			onClick={onClick}
		>
			{children}
		</Flex>
	);
}
