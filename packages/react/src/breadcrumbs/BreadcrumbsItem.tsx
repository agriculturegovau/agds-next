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
		<Flex as="li" alignItems="center" gap={0.5} fontSize="sm" color="text">
			<BreadcrumbsDivider />
			{href ? <TextLink ref={ref} {...props} /> : children}
		</Flex>
	);
});
