import type { PropsWithChildren, ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import {
	boxPalette,
	tokens,
	useLinkComponent,
	LinkProps,
} from '@ag.ds-next/core';
import { BaseButton, BaseButtonProps } from '@ag.ds-next/button';
import { NavListItem } from './NavListItem';

type NavListType = 'primary' | 'secondary';

export type NavListLink = Omit<LinkProps, 'children'>;

export type NavListButton = Omit<BaseButtonProps, 'children'>;

export type NavListItem = (NavListLink | NavListButton) & {
	label: ReactNode;
	endElement?: ReactNode;
};

export type NavListProps = {
	activePath: string;
	items?: NavListItem[];
	type: 'primary' | 'secondary';
};

export function NavList({ activePath, items, type }: NavListProps) {
	const Link = useLinkComponent();
	return (
		<NavListContainer type={type}>
			{items?.map(({ label, endElement, ...item }, index) => {
				if ('href' in item) {
					const active = item.href === activePath;
					return (
						<NavListItem
							key={index}
							active={active}
							type={type}
							hasEndElement={Boolean(endElement)}
						>
							<Link aria-current={active ? 'page' : undefined} {...item}>
								<span>{label}</span>
								{endElement}
							</Link>
						</NavListItem>
					);
				}
				return (
					<NavListItem
						key={index}
						active={false}
						type={type}
						hasEndElement={Boolean(endElement)}
					>
						<BaseButton {...item}>
							<span>{label}</span>
							{endElement}
						</BaseButton>
					</NavListItem>
				);
			})}
		</NavListContainer>
	);
}

type NavListContainerProps = PropsWithChildren<{
	type: NavListType;
}>;

function NavListContainer({ children, type }: NavListContainerProps) {
	if (type === 'primary') {
		return (
			<Flex
				as="ul"
				flexDirection={{ xs: 'column', lg: 'row' }}
				flexWrap="wrap"
				alignItems="stretch"
				css={{
					[tokens.mediaQuery.max.md]: {
						'& > li': {
							borderTopWidth: tokens.borderWidth.sm,
							borderTopStyle: 'solid',
							borderTopColor: boxPalette.border,
						},
					},
				}}
			>
				{children}
			</Flex>
		);
	}
	return (
		<Flex as="ul" height="100%">
			{children}
		</Flex>
	);
}
