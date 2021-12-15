import { Flex, Divider, Box, Stack } from '@ag.ds-next/box';

type FooterProps = { children: any };

export const Footer = ({ children }: FooterProps) => {
	return (
		<Flex
			as="footer"
			justifyContent="center"
			background="page"
			color="text"
			theme="dark"
		>
			<Stack
				maxWidth={1280}
				width="100%"
				gap={1}
				paddingX={2}
				paddingY={{ xs: 1, md: 2 }}
			>
				{children}
				<Divider />
				<span>&copy; Commmonwealth of Australia</span>
			</Stack>
		</Flex>
	);
};

/*
const Exp_Content = ({
	spacing = 'small',
	theme,
	background,
	children,
}: React.PropsWithChildren<ContentProps>) => {
	// changes at breakpoints
	const paddingY = (
		{
			small: { xs: 1, md: 2 },
			medium: { xs: 1, md: 3 },
			large: { xs: 1, md: 4 },
		} as const
	)[spacing];

	return (
		<Flex
			as="section"
			justifyContent="center"
			theme={theme}
			background={background}
		>
			<Stack
				width="100%"
				maxWidth={1280}
				paddingY={paddingY}
				paddingX={2}
				gap={1}
			>
				{children}
			</Stack>
		</Flex>
	);
};
*/
