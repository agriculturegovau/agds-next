import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { useLinkComponent, themeVars, outline } from '@ag.ds-next/core';

export type LinkListItemType = {
	href: string;
	label: ReactNode;
};

export const LinkListItem = ({ href, label, ...props }: LinkListItemType) => {
	const Link = useLinkComponent();
	return (
		<Box
			as="li"
			fontSize="sm"
			fontFamily="body"
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
		</Box>
	);
};
