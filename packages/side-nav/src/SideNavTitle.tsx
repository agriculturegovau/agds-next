import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { themeValues, useLinkComponent } from '@ag.ds-next/core';

import { visuallyHiddenStyles } from './utils';

export const SideNavTitle = ({
	activePath,
	href,
	children,
}: {
	activePath: string;
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
				borderBottom: `2px solid ${themeValues.border}`,
				textDecoration: 'none',

				'&:hover': {
					backgroundColor: themeValues.background.shade,
					textDecoration: 'underline',
				},
			}}
		>
			{children}
			{href === activePath ? (
				<span css={visuallyHiddenStyles}> Current page</span>
			) : null}
		</Box>
	);
};
