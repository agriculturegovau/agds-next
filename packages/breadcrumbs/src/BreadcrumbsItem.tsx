import { Box } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import { LinkProps } from '@ag.ds-next/core';

export type BreadcrumbsItemProps = LinkProps;

export const BreadcrumbsItem = (props: BreadcrumbsItemProps) => {
	const { children, href } = props;
	return (
		<Box as="li">
			{href ? <TextLink {...props} /> : <Text>{children}</Text>}
		</Box>
	);
};
