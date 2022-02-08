import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette, useLinkComponent } from '@ag.ds-next/core';

import { visuallyHiddenStyles } from './utils';

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
			padding={1}
			color="text"
			fontSize="sm"
			fontWeight="bold"
			lineHeight="default"
			display="block"
			css={{
				borderBottom: `2px solid ${boxPalette.border}`,
				textDecoration: 'none',

				'&:hover': {
					backgroundColor: boxPalette.backgroundShade,
					textDecoration: 'underline',
				},
			}}
		>
			{children}
			{isCurrentPage ? (
				<span css={visuallyHiddenStyles}> Current page</span>
			) : null}
		</Box>
	);
};
