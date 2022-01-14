import type { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

import { SideNavMenu, SideNavMenuItemType } from './SideNavMenu';
import {
	sideNavStyles,
	sideNavContentStyles,
	sideNavTitleStyles,
} from './styles';

type SideNavProps = {
	activePath: string;
	items: SideNavMenuItemType[];
	variant?: 'light' | 'lightAlt' | 'dark' | 'darkAlt';
	alt: string;
	linkComponent: string;
	accordionHeader: string;
	menuHeaderLink: string;
	menuHeader: string;
};

export function SideNav({
	activePath,
	items,
	variant = 'light',
	linkComponent,
	accordionHeader = 'In this section',
	menuHeaderLink = '#',
	menuHeader,
	...props
}: SideNavProps) {
	return (
		<Box
			fontFamily="body"
			background={variantMap[variant].background}
			theme={variantMap[variant].theme}
			css={sideNavStyles}
			{...props}
		>
			<SideNavContent>
				<a style={sideNavTitleStyles} href={menuHeaderLink}>
					{menuHeader}
				</a>

				<SideNavMenu
					items={items}
					linkComponent={linkComponent}
					activePath={activePath}
				/>
			</SideNavContent>
		</Box>
	);
}

const SideNavContent = ({ children }: { children: ReactNode }) => {
	return <Box css={sideNavContentStyles}>{children}</Box>;
};

const variantMap = {
	light: {
		theme: 'light',
		background: 'page',
	},
	lightAlt: {
		theme: 'light',
		background: 'pageAlt',
	},
	dark: {
		theme: 'dark',
		background: 'page',
	},
	darkAlt: {
		theme: 'dark',
		background: 'pageAlt',
	},
} as const;
