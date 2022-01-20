import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { useLinkComponent, themeValues, outline } from '@ag.ds-next/core';

export const LinkListItem = (
	props: PropsWithChildren<{
		href: string;
	}>
) => {
	const Link = useLinkComponent();
	return (
		<Box
			as="li"
			fontSize="sm"
			fontFamily="body"
			lineHeight="default"
			css={{
				a: {
					color: themeValues.foreground.action,
					textDecoration: 'underline',

					'&:hover': {
						color: themeValues.foreground.action,
						textDecoration: 'none',
					},

					'&:focus': outline,
				},
			}}
		>
			<Link {...props} />
		</Box>
	);
};
