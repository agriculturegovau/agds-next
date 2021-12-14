import { Flex, Box } from '@ag.ds-next/box';

type FooterProps = {
	links: { title: string; href: string }[];
};

export const Footer = ({ links }: FooterProps) => {
	return (
		<Flex
			as="footer"
			justifyContent="center"
			background="page"
			color="text"
			theme="dark"
		>
			<Box
				maxWidth={1280}
				width="100%"
				paddingX={2}
				paddingY={{ xs: 1, md: 2 }}
			>
				{links.map(({ title, href }) => (
					<a key={href} href={href}>
						{title}
					</a>
				))}
				<hr />
				<span>&copy; Commmonwealth of Australia</span>
			</Box>
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
