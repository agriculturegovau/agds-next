import { ReactNode } from 'react';
import { Flex } from '../flex';
import { useLinkComponent, LinkProps } from '../core';
import { BaseButton, BaseButtonProps } from '../button';
import { MainNavListItem } from './MainNavListItem';

type MainNavListLink = Omit<LinkProps, 'children'>;

type MainNavListButton = Omit<BaseButtonProps, 'children'>;

export type MainNavListItemType = (MainNavListLink | MainNavListButton) & {
	label: ReactNode;
	endElement?: ReactNode;
};

export type MainNavListProps = {
	'aria-label': string;
	activePath: string;
	items?: MainNavListItemType[];
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
			display={type === 'primary' ? { xs: 'none', lg: 'flex' } : undefined}
			aria-label={ariaLabel}
		>
			<Flex as="ul">
				{items?.map(({ label, endElement, ...item }, index) => {
					if (isItemLink(item)) {
						const active = item.href === activePath;
						return (
							<MainNavListItem
								key={index}
								active={active}
								hasEndElement={Boolean(endElement)}
							>
								<Link aria-current={active ? 'page' : undefined} {...item}>
									<span>{label}</span>
									{endElement}
								</Link>
							</MainNavListItem>
						);
					}
					return (
						<MainNavListItem
							key={index}
							active={false}
							hasEndElement={Boolean(endElement)}
						>
							<BaseButton {...item}>
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
