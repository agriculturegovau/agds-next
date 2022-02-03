import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';

export const BreadcrumbsItem = (
	props: PropsWithChildren<{
		href?: string;
	}>
) => {
	const { children, href } = props;
	return (
		<Box as="li" fontSize="sm" fontFamily="body" lineHeight="default">
			{href ? <TextLink href={href} {...props} /> : <Text>{children}</Text>}
		</Box>
	);
};
