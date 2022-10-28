import { Flex } from '../box';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { LinkProps } from '../core';
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
