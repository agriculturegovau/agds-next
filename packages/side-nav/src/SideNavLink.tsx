import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import {
	useLinkComponent,
	mapSpacing,
	LinkProps,
	tokens,
} from '@ag.ds-next/core';
import { boxPalette, fontGrid, packs } from '@ag.ds-next/core';
import { useLinkListDepth } from './context';
import { localPalette } from './utils';

export type SideNavLinkType = LinkProps & {
	active?: boolean;
	isCurrentPage?: boolean;
	label: ReactNode;
};

export const SideNavLink = ({
	active,
	isCurrentPage,
	children,
	label,
	...props
}: SideNavLinkType) => {
	const depth = useLinkListDepth();
	const Link = useLinkComponent();

	return (
		<Box
			as="li"
			fontSize="sm"
			lineHeight="default"
			borderBottom
			borderColor={depth > 1 ? 'muted' : 'border'}
			css={{
				'&:last-child': { borderBottomWidth: depth > 1 ? 0 : undefined },
			}}
		>
			<Box
				fontWeight={active ? 'bold' : 'normal'}
				css={{
					' a': {
						...fontGrid('xs', 'default'),
						color: boxPalette[active ? 'foregroundText' : 'foregroundMuted'],
						textDecoration: 'none',

						paddingTop: mapSpacing(1),
						paddingBottom: mapSpacing(1),
						paddingLeft: `${depth}rem`,
						paddingRight: mapSpacing(1),
						display: 'block',
						borderLeftWidth: tokens.borderWidth.xl,
						borderLeftStyle: 'solid',
						borderLeftColor: isCurrentPage
							? boxPalette.foregroundAction
							: 'transparent',

						'&:hover': {
							...packs.underline,
							color: boxPalette.foregroundText,
							backgroundColor: localPalette.hover,
						},

						'&:focus': packs.outline,

						...(depth > 2 && {
							'&:before': {
								content: '" "',
								width: mapSpacing(1),
								height: mapSpacing(1),
								backgroundSize: mapSpacing(1),
								marginLeft: `-1rem`,
								paddingLeft: mapSpacing(0.5),
								display: 'block',
								float: 'left',
								backgroundRepeat: 'no-repeat',
								backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='gray' d='M2 10h12v1H2zM2 5h1v5H2z'/%3E%3C/svg%3E")`,
							},
						}),
					},
				}}
			>
				<Link {...props} aria-current={isCurrentPage ? 'page' : undefined}>
					{label}
				</Link>
			</Box>
			{children}
		</Box>
	);
};
