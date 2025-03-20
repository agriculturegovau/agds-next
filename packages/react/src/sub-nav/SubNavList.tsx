import type { ReactNode } from 'react';
import { Flex } from '../flex';
import { useLinkComponent, LinkProps, tokens } from '../core';
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
			css={{ position: 'relative', zIndex: tokens.zIndex.elevated }}
			flexDirection={['column', 'row']}
			flexWrap="wrap"
		>
			{links.map(({ href, label, endElement, ...props }, index) => {
				const active = href === activePath;
				return (
					<SubNavListItem active={active} key={index}>
						<Link
							aria-current={active ? 'page' : undefined}
							href={href}
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
