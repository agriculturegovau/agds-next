import { forwardRef } from 'react';
import { Flex } from '@ag.ds-next/box';
import { TextLink } from '@ag.ds-next/text-link';
import { LinkProps } from '@ag.ds-next/core';
import { BreadcrumbsDivider } from './BreadcrumbsDivider';

export type BreadcrumbsItemProps = LinkProps;

export const BreadcrumbsItem = forwardRef<
	HTMLAnchorElement,
	BreadcrumbsItemProps
>(function BreadcrumbsItem(props, ref) {
	const { children, href } = props;
	return (
		<Flex as="li" alignItems="center" gap={0.5} fontSize="sm">
			<BreadcrumbsDivider />
			{href ? <TextLink ref={ref} {...props} /> : children}
		</Flex>
	);
});
