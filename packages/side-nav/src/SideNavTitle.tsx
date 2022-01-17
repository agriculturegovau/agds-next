import { Box } from '@ag.ds-next/box';
import { themeVars } from '@ag.ds-next/core';

export const SideNavTitle = ({
	href,
	text,
}: {
	href: string;
	text: string;
}) => {
	return (
		<Box
			as="a"
			href={href}
			padding={1}
			color="text"
			fontSize="sm"
			fontWeight="bold"
			lineHeight="default"
			display="block"
			css={{
				borderBottom: `2px solid ${themeVars.border}`,
				textDecoration: 'none',

				'&:hover': {
					backgroundColor: themeVars.background.shade,
					textDecoration: 'underline',
				},
			}}
		>
			{text}
		</Box>
	);
};
