import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { useLinkComponent, boxPalette, outline } from '@ag.ds-next/core';

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
					color: boxPalette.foregroundAction,
					textDecoration: 'underline',

					'&:hover': {
						color: boxPalette.foregroundAction,
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
