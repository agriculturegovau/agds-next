import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette, useLinkComponent } from '@ag.ds-next/core';
import { VisuallyHidden } from '@ag.ds-next/a11y';

import { localPalette } from './utils';

export const SideNavTitle = ({
	isCurrentPage,
	href,
	children,
}: {
	isCurrentPage?: boolean;
	href: string;
	children: ReactNode;
}) => {
	const Link = useLinkComponent();
	return (
		<Box as="h2">
			<Box
				as={Link}
				href={href}
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
