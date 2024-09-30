import { ReactNode } from 'react';
import { Flex } from '../flex';
import { useLinkComponent, LinkProps } from '../core';
import { BaseButton, BaseButtonProps } from '../button';
import { MainNavListItem } from './MainNavListItem';
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
	'aria-label'?: string;
	activePath: string;
	items?: (MainNavListItemType | MainNavListDropdown)[];
	/** `primary` is used for the main navigation items on the left. `secondary` is on the right. */
	type: 'primary' | 'secondary';
};

export function MainNavList({
	'aria-label': ariaLabel = 'Main',
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
			display={type === 'primary' ? { xs: 'none', lg: 'flex' } : undefined}
			minHeight={{ xs: '5rem', lg: '3.5rem' }}
			{...(type === 'secondary' ? { css: { marginLeft: 'auto' } } : undefined)}
		>
			<Flex as="ul">
				{items?.map(({ label, beforeElement, endElement, ...item }, index) => {
					if ('href' in item) {
						const active = item.href === activePath;
						return (
							<MainNavListItem key={index} active={active} type={type}>
								<Link aria-current={active ? 'page' : undefined} {...item}>
									{beforeElement}
									<span>{label}</span>
									{endElement}
								</Link>
							</MainNavListItem>
						);
					}

					if ('dropdown' in item) {
						return (
							<MainNavListItemDropdown
								key={index}
								label={label}
								beforeElement={beforeElement}
								endElement={endElement}
								{...item}
							/>
						);
					}

					return (
						<MainNavListItem key={index} active={false} type={type}>
							<BaseButton {...item}>
								{beforeElement}
								<span>{label}</span>
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
