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
	items?: MainNavListItemType[];
};

export function MainNavDialogNavList({
	'aria-label': ariaLabel,
	activePath,
	items,
}: MainNavDialogNavListProps) {
	const Link = useLinkComponent();
	return (
		<nav aria-label={ariaLabel}>
			<Flex as="ul" flexDirection="column" borderTop borderColor="muted">
				{items?.map(({ label, endElement, ...item }, index) => {
					if (isItemLink(item)) {
						const active = item.href === activePath;
						return (
							<MainNavDialogNavListItem key={index} active={active}>
								<Link aria-current={active ? 'page' : undefined} {...item}>
									<span>{label}</span>
									{endElement}
								</Link>
							</MainNavDialogNavListItem>
						);
					}
					return (
						<MainNavDialogNavListItem key={index} active={false}>
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
}>;

export function MainNavDialogNavListItem({
	active,
	children,
}: MainNavDialogNavListItemProps) {
	return (
		<Flex
			as="li"
			height="100%"
			fontSize="xs"
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
		>
			{children}
		</Flex>
	);
}
