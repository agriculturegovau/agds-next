import type { PropsWithChildren, ReactNode } from 'react';
import { Flex } from '../box';
import { boxPalette, tokens, useLinkComponent, LinkProps } from '../core';
import { BaseButton, BaseButtonProps } from '../button';
import { NavListItem } from './NavListItem';

type NavListType = 'primary' | 'secondary';

export type NavListLink = Omit<LinkProps, 'children'>;

export type NavListButton = Omit<BaseButtonProps, 'children'>;

export type NavListItem = (NavListLink | NavListButton) & {
	label: ReactNode;
	endElement?: ReactNode;
};

export type NavListProps = {
	'aria-label': string;
	activePath: string;
	items?: NavListItem[];
	type: 'primary' | 'secondary';
	vertical?: boolean;
};

export function NavList({
	'aria-label': ariaLabel,
	activePath,
	items,
	type,
	vertical,
}: NavListProps) {
	const Link = useLinkComponent();
	return (
		<NavListContainer aria-label={ariaLabel} type={type} vertical={vertical}>
			{items?.map(({ label, endElement, ...item }, index) => {
				if ('href' in item) {
					const active = item.href === activePath;
					return (
						<NavListItem
							key={index}
							active={active}
							type={type}
							hasEndElement={Boolean(endElement)}
							vertical={vertical}
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
						vertical={vertical}
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
	'aria-label': string;
	type: NavListType;
	vertical?: boolean;
}>;

function NavListContainer({
	'aria-label': ariaLabel,
	children,
	type,
	vertical,
}: NavListContainerProps) {
	if (type === 'primary' || vertical) {
		return (
			<Flex
				as="nav"
				justifyContent="space-between"
				width="100%"
				flexDirection={vertical ? 'column' : { xs: 'column', lg: 'row' }}
				aria-label={ariaLabel}
			>
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
			</Flex>
		);
	}
	return (
		<Flex as="nav" height="100%" aria-label={ariaLabel}>
			<Flex as="ul" height="100%">
				{children}
			</Flex>
		</Flex>
	);
}
