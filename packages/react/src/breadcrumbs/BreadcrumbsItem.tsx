import { forwardRef } from 'react';
import { Flex } from '../flex';
import { TextLink } from '../text-link';
import { LinkProps } from '../core';
import { BreadcrumbsDivider } from './BreadcrumbsDivider';

export type BreadcrumbsItemProps = LinkProps;

export const BreadcrumbsItem = forwardRef<
	HTMLAnchorElement,
	BreadcrumbsItemProps
>(function BreadcrumbsItem(props, ref) {
	const { children, href } = props;
	return (
		<Flex alignItems="center" as="li" color="text" fontSize="sm" gap={0.5}>
			<BreadcrumbsDivider />
			{href ? <TextLink ref={ref} {...props} /> : children}
		</Flex>
	);
});
