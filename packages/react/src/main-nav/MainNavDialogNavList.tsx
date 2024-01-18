import type { PropsWithChildren, MouseEvent } from 'react';
import { Flex } from '../flex';
import { boxPalette, useLinkComponent, mapSpacing, packs } from '../core';
import { BaseButton } from '../button';
import { focusStyles } from '../box';
import { localPalette } from './localPalette';
import { isItemLink, MainNavListItemType } from './MainNavList';
import { useMainNavContext } from './MainNavProvider';

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
	const { closeMobileMenu } = useMainNavContext();
	return (
		<nav aria-label={ariaLabel}>
			<Flex as="ul" flexDirection="column" borderTop borderColor="muted">
				{items?.map(({ label, endElement, ...item }, index) => {
					// Close the main nav whenever a list item is clicked
					function onClick(event: MouseEvent<HTMLButtonElement>) {
						closeMobileMenu();
						if ('onClick' in item) item.onClick?.(event);
					}

					if (isItemLink(item)) {
						const active = item.href === activePath;
						return (
							<MainNavDialogNavListItem key={index} active={active}>
								<Link
									aria-current={active ? 'page' : undefined}
									{...item}
									// Ignoring typescript here because `LinkProps` does not currently support `onClick`
									// The code will run fine though, as link props are spread
									// TODO we should add support for `onClick` in `LinkProps` and remove this `@ts-ignore`
									// eslint-disable-next-line @typescript-eslint/ban-ts-comment
									// @ts-ignore
									onClick={onClick}
								>
									<span>{label}</span>
									{endElement}
								</Link>
							</MainNavDialogNavListItem>
						);
					}

					return (
						<MainNavDialogNavListItem key={index} active={false}>
							<BaseButton {...item} onClick={onClick}>
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
