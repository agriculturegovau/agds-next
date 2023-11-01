import { ReactNode } from 'react';
import { Flex } from '../flex';
import { useLinkComponent, LinkProps } from '../core';
import { BaseButton, BaseButtonProps } from '../button';
import { MainNavListItem } from './MainNavListItem';
import { mobileBreakpoint } from './utils';
import {
	MainNavListDropdown,
	MainNavListItemDropdown,
} from './MainNavListItemDropdown';

type MainNavListLink = Omit<LinkProps, 'children'>;

type MainNavListButton = Omit<BaseButtonProps, 'children'>;

export type MainNavListItemType = (MainNavListLink | MainNavListButton) & {
	label: ReactNode;
	beforeElement?: ReactNode;
	endElement?: ReactNode;
};

export type MainNavListProps = {
	'aria-label': string;
	activePath: string;
	items?: (MainNavListItemType | MainNavListDropdown)[];
	/** `primary` is used for the main navigation items on the left. `secondary` is on the right. */
	type: 'primary' | 'secondary';
};

export function MainNavList({
	'aria-label': ariaLabel,
	activePath,
	items,
	type,
}: MainNavListProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			as="nav"
			aria-label={ariaLabel}
			// Primary links are hidden on desktop as they are visible in the sidebar
			display={
				type === 'primary'
					? { xs: 'none', [mobileBreakpoint]: 'flex' }
					: undefined
			}
		>
			<Flex as="ul">
				{items?.map(({ label, beforeElement, endElement, ...item }, index) => {
					if ('href' in item) {
						const active = item.href === activePath;
						return (
							<MainNavListItem key={index} active={active}>
								<Link aria-current={active ? 'page' : undefined} {...item}>
									{beforeElement}
									<span data-main-nav-list-item-label>{label}</span>
									{endElement}
								</Link>
							</MainNavListItem>
						);
					}

					if ('dropdown' in item) {
						return (
							<MainNavListItem key={index} active={false}>
								<MainNavListItemDropdown
									label={label}
									beforeElement={beforeElement}
									endElement={endElement}
									{...item}
								/>
							</MainNavListItem>
						);
					}

					return (
						<MainNavListItem key={index} active={false}>
							<BaseButton {...item}>
								{beforeElement}
								<span data-main-nav-list-item-label>{label}</span>
								{endElement}
							</BaseButton>
						</MainNavListItem>
					);
				})}
			</Flex>
		</Flex>
	);
}

export const isItemLink = (
	item: Omit<MainNavListItemType, 'label'>
): item is MainNavListLink => 'href' in item;
