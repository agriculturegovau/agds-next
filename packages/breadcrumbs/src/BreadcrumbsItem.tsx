import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import { LinkProps } from '@ag.ds-next/core';
import { BreadcrumbsDivider } from './BreadcrumbsDivider';

export type BreadcrumbsItemProps = LinkProps;

export const BreadcrumbsItem = (props: BreadcrumbsItemProps) => {
	const { children, href } = props;
	return (
		<Flex as="li" alignItems="center" gap={0.5}>
			<BreadcrumbsDivider />
			{href ? <TextLink {...props} /> : <Text>{children}</Text>}
		</Flex>
	);
};
