import { Box } from '@ag.ds-next/box';
import { useLinkComponent, themeVars, outline } from '@ag.ds-next/core';

import type { ReactNode } from 'react';

export const LinkListItem = ({
	children,
	href,
	label,
	...props
}: {
	children?: ReactNode;
	href: string;
	label: string;
}) => {
	const Link = useLinkComponent();
	return (
		<Box
			as="li"
			fontSize="sm"
			lineHeight="default"
			css={{
				a: {
					color: themeVars.foreground.action,
					textDecoration: 'underline',

					'&:hover': {
						color: themeVars.foreground.action,
						textDecoration: 'none',
					},

					'&:focus': outline,
				},
			}}
		>
			<Link href={href} {...props}>
				{label}
			</Link>
			{children}
		</Box>
	);
};
