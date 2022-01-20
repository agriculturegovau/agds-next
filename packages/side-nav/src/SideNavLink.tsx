import { ReactNode } from 'react';
import { Box, BoxProps } from '@ag.ds-next/box';
import { useLinkComponent, mapSpacing } from '@ag.ds-next/core';
import { themeValues, fontGrid, outline } from '@ag.ds-next/core';

import { useLinkListDepth } from './context';
import { localValues } from './utils';

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
	...props
}: BoxProps & SideNavLinkType) => {
	const depth = useLinkListDepth();
	const Link = useLinkComponent();

	return (
		<Box
			as="li"
			fontSize="sm"
			lineHeight="default"
			css={{
				' a, span': {
					...fontGrid('xs', 'default'),
					color: themeValues.foreground[active ? 'text' : 'muted'],
					textDecoration: 'none',

					paddingTop: mapSpacing(1),
					paddingBottom: mapSpacing(1),
					paddingLeft: `${depth}rem`,
					paddingRight: mapSpacing(1),
					display: 'block',

					'&:hover': {
						color: themeValues.foreground.text,
						textDecoration: 'underline',
						textDecorationSkipInk: 'auto',
						backgroundColor: localValues.linkHoverBg,
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
			{...props}
		>
			<Box fontWeight={active ? 'bold' : 'normal'}>
				{active ? <span>{label}</span> : <Link href={href}>{label}</Link>}
			</Box>
			{children}
		</Box>
	);
};
