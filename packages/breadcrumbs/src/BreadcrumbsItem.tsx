import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { useLinkComponent, themeValues, outline } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';

export const BreadcrumbsItem = (
	props: PropsWithChildren<{
		href?: string;
	}>
) => {
	const Link = useLinkComponent();
	const { children, href } = props;
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
			{href ? <Link href={href} {...props} /> : <Text>{children}</Text>}
		</Box>
	);
};
