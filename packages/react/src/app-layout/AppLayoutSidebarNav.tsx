import { Fragment } from 'react';
import { boxPalette, tokens } from '../core';
import { Box } from '../box';
import { Flex } from '../flex';
import {
	AppLayoutSidebarNavListItem,
	NavItem,
} from './AppLayoutSidebarNavListItem';

export type AppLayoutSidebarNavProps = {
	activePath?: string;
	items: NavItem[][];
	className?: string;
};

export function AppLayoutSidebarNav({
	activePath,
	items,
}: AppLayoutSidebarNavProps) {
	return (
		<Flex as="nav" flexDirection="column" aria-label="main" paddingY={1.5}>
			<Flex as="ul" flexDirection="column">
				{items.map((group, idx, arr) => {
					const isLastItem = idx === arr.length - 1;
					return (
						<Fragment key={idx}>
							{group.map((item, idx) => (
								<AppLayoutSidebarNavListItem
									key={idx}
									item={item}
									activePath={activePath}
								/>
							))}
							{!isLastItem ? <AppLayoutSidebarNavDivider /> : null}
						</Fragment>
					);
				})}
			</Flex>
		</Flex>
	);
}

function AppLayoutSidebarNavDivider() {
	return (
		<Box as="li" paddingY={1} paddingX={1.5} aria-hidden="true">
			<hr
				css={{
					boxSizing: 'content-box',
					height: 0,
					margin: 0,
					overflow: 'visible',
					border: 'none',
					borderTopWidth: tokens.borderWidth.sm,
					borderTopStyle: 'solid',
					borderColor: boxPalette.borderMuted,
					width: '100%',
				}}
			/>
		</Box>
	);
}
