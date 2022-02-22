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
		<Box
			as={Link}
			href={href}
			paddingTop={1}
			paddingBottom={1}
			paddingLeft={1}
			paddingRight={1}
			color="text"
			fontSize="sm"
			fontWeight="bold"
			lineHeight="default"
			display="block"
			css={{
				borderBottom: `2px solid ${boxPalette.border}`,
				textDecoration: 'none',

				'&:hover': {
					backgroundColor: localPalette.linkHoverBg,
					textDecoration: 'underline',
				},
			}}
		>
			{children}
			{isCurrentPage ? <VisuallyHidden> Current page</VisuallyHidden> : null}
		</Box>
	);
};
