import React from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette, LinkProps, useLinkComponent } from '@ag.ds-next/core';
import { VisuallyHidden } from '@ag.ds-next/a11y';

import { localPalette } from './utils';

export type SideNavTitleProps = LinkProps & {
	isCurrentPage?: boolean;
};

export const SideNavTitle = ({
	children,
	isCurrentPage,
	...props
}: SideNavTitleProps) => {
	const Link = useLinkComponent();
	return (
		<Box as="h2">
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
				css={{
					borderBottom: `2px solid ${boxPalette.border}`,
					textDecoration: 'none',

					'&:hover': {
						backgroundColor: localPalette.hover,
						textDecoration: 'underline',
					},
				}}
			>
				{children}
				{isCurrentPage ? <VisuallyHidden> Current page</VisuallyHidden> : null}
			</Box>
		</Box>
	);
};
