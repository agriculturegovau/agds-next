import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { boxPalette, useLinkComponent } from '@ag.ds-next/core';

export const SideNavTitle = ({
	href,
	children,
}: {
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
					backgroundColor: boxPalette.background.shade,
					textDecoration: 'underline',
				},
			}}
		>
			{children}
		</Box>
	);
};
