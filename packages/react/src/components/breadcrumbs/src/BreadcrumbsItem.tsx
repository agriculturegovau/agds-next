import { Flex } from '../../box/src';
import { Text } from '../../text/src';
import { TextLink } from '../../text-link/src';
import { LinkProps } from '../../core/src';
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
