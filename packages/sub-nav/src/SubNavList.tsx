import type { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { useLinkComponent, LinkProps } from '@ag.ds-next/core';
import { SubNavListItem } from './SubNavListItem';

export type SubNavListLink = Omit<LinkProps, 'children'> & {
	label: ReactNode;
};

export type SubNavListProps = {
	links: SubNavListLink[];
	activePath?: string;
};

export function SubNavList({ links, activePath }: SubNavListProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			as="ul"
			flexDirection={['column', 'row']}
			flexWrap="wrap"
			css={{ position: 'relative', zIndex: 1 }}
		>
			{links.map(({ href, label, ...props }, index) => {
				const active = href === activePath;
				return (
					<SubNavListItem key={index} active={active}>
						<Link
							href={href}
							aria-current={active ? 'page' : undefined}
							{...props}
						>
							{label}
						</Link>
					</SubNavListItem>
				);
			})}
		</Flex>
	);
}
