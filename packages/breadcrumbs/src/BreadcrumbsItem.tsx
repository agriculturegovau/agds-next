import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { Text, TextLink } from '@ag.ds-next/text';

export const BreadcrumbsItem = (
	props: PropsWithChildren<{
		href?: string;
	}>
) => {
	const { children, href } = props;
	return (
		<Box as="li">
			{href ? <TextLink href={href} {...props} /> : <Text>{children}</Text>}
		</Box>
	);
};
