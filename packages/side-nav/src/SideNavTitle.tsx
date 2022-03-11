import React from 'react';
import { Box } from '@ag.ds-next/box';
import { LinkProps, packs, useLinkComponent } from '@ag.ds-next/core';
import { VisuallyHidden } from '@ag.ds-next/a11y';

import { localPalette } from './utils';

export type SideNavTitleProps = LinkProps & {
	isCurrentPage?: boolean;
};

export const SideNavTitle = ({
	children,
	id,
	isCurrentPage,
	...props
}: SideNavTitleProps) => {
	const Link = useLinkComponent();
	return (
		<Box as="h2" id={id}>
			<Box
				as={Link}
				{...props}
				padding={1}
				color="text"
				fontSize="sm"
				fontWeight="bold"
				lineHeight="heading"
				display="block"
				focus
				borderBottom
				borderBottomWidth="md"
				css={{
					textDecoration: 'none',
					'&:hover': {
						...packs.underline,
						backgroundColor: localPalette.hover,
					},
				}}
			>
				{children}
				{/** TODO this should be removed **/}
				{isCurrentPage ? <VisuallyHidden> Current page</VisuallyHidden> : null}
			</Box>
		</Box>
	);
};
