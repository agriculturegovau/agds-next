import { Box } from '@ag.ds-next/box';
import { themeValues, useLinkComponent } from '@ag.ds-next/core';

export const SideNavTitle = ({
	href,
	text,
}: {
	href: string;
	text: string;
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
			{text}
		</Box>
	);
};
