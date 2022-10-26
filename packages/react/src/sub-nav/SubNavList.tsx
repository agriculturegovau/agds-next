import type { ReactNode } from 'react';
import { Flex } from '../box';
import { useLinkComponent, LinkProps } from '../core';
import { SubNavListItem } from './SubNavListItem';

export type SubNavListLink = Omit<LinkProps, 'children'> & {
	label: ReactNode;
	endElement?: ReactNode;
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
			{links.map(({ href, label, endElement, ...props }, index) => {
				const active = href === activePath;
				return (
					<SubNavListItem key={index} active={active}>
						<Link
							href={href}
							aria-current={active ? 'page' : undefined}
							{...props}
						>
							<span>{label}</span>
							{endElement}
						</Link>
					</SubNavListItem>
				);
			})}
		</Flex>
	);
}
