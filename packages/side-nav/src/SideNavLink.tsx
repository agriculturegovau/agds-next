import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { useLinkComponent, mapSpacing } from '@ag.ds-next/core';
import { boxPalette, fontGrid, outline } from '@ag.ds-next/core';

import { useLinkListDepth } from './context';
import { localPalette } from './utils';

export type SideNavLinkType = {
	active?: boolean;
	children?: ReactNode;
	href: string;
	label: string | JSX.Element;
};

export const SideNavLink = ({
	active,
	children,
	href,
	label,
}: SideNavLinkType) => {
	const depth = useLinkListDepth();
	const Link = useLinkComponent();

	return (
		<Box
			as="li"
			fontSize="sm"
			lineHeight="default"
			css={
				depth === 1
					? {
							borderBottom: `1px solid ${boxPalette.border}`,
							'&:last-of-type': { border: 'none' },
					  }
					: undefined
			}
		>
			<Box
				fontWeight={active ? 'bold' : 'normal'}
				css={{
					' a': {
						...fontGrid('xs', 'default'),
						color: boxPalette.foreground[active ? 'text' : 'muted'],
						textDecoration: 'none',

						paddingTop: mapSpacing(1),
						paddingBottom: mapSpacing(1),
						paddingLeft: `${depth}rem`,
						paddingRight: mapSpacing(1),
						display: 'block',

						'&:hover': {
							color: boxPalette.foreground.text,
							textDecoration: 'underline',
							textDecorationSkipInk: 'auto',
							backgroundColor: localPalette.linkHoverBg,
						},

						'&:focus': outline,

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
				<Link href={href}>
					{label}
					{active && !children && (
						<span css={visuallyHidden}> Current page</span>
					)}
				</Link>
			</Box>
			{children}
		</Box>
	);
};

// Content that should be read out
// to screenreaders only
const visuallyHidden = {
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	whiteSpace: 'nowrap',
	width: 1,
} as const;
