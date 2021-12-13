import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import auLogo from '../public/header-logo-agov.png';
import placeholder from '../public/placeholder.png';

import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { Box, BoxProps, Flex, Stack } from '@ag.ds-next/box';

const Home: NextPage = () => {
	return (
		<Box fontFamily="body" theme="light">
			<Head>
				<title>AG Design System | Example site</title>
				<meta
					name="description"
					content="An example of things that can be made with AG-DS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Flex
				as="header"
				theme="dark"
				background="page"
				paddingY={3}
				paddingX={1}
				justifyContent="center"
			>
				<Flex
					justifyContent="flex-start"
					maxWidth={{ md: 900, xl: 1200 }}
					width="100%"
				>
					<Flex gap={1} flexWrap={{ xs: 'wrap', md: 'nowrap' }}>
						<Image src={auLogo} alt="Logo" width="256" height="62" />
						<Box borderRight display={{ xs: 'none', md: 'block' }} />
						<Stack justifyContent="center">
							<Heading fontSize={{ xs: 'md', md: 'xl' }}>
								AG Design-System
							</Heading>
							<Text color="muted" fontSize={{ xs: 'sm', md: 'md' }}>
								Welcome to the AG Design-System
							</Text>
						</Stack>
					</Flex>
				</Flex>
			</Flex>

			{/* FIXME: NavBar this needs to be a custom thing */}
			<Box as="nav" theme="dark" background="page" color="text">
				<Box as="ul">
					<li>
						<a>Home</a>
					</li>
				</Box>
				<Box theme="dark" background="shade" paddingTop={0.5} />
			</Box>

			<main>
				<Exp_Content spacing="large" background="shade">
					<Flex gap={2} alignItems="flex-start" justifyContent="space-between">
						<Stack gap={1}>
							<Heading type="h2">Welcome to the AG Design-System</Heading>
							<Text>
								Support the callout with some short explanatory text. You
								don&apos;t need more than a couple of sentences. Use buttons to
								give your user a clear call to action about what to do next.
							</Text>
						</Stack>
						<Image
							width={600}
							height={260}
							src={placeholder}
							alt="Place holder image"
						/>
					</Flex>
				</Exp_Content>

				<Exp_Content spacing="small">
					<Heading type="h2">Some highlighted content</Heading>

					<Stack background="page" color="text" theme="light" gap={4}>
						Explain some important information upfront, what is the product or
						service. What is the role of it. How does the user get started using
						it. Keep this text simple and informative. Vestibulum non consequat
						tellus.
						<Box color="muted" padding={6} border background="shade">
							A box in a box
						</Box>
					</Stack>
					<Box
						background="page"
						color="text"
						border
						paddingY={{ xs: 1, sm: 2, xl: 3 }}
						paddingX={2}
						theme="dark"
					>
						This is a very basic test to ensure the plumbing is working as
						intended
						<Box color="muted" padding={6} border background="shade">
							A box in a box
						</Box>
					</Box>
				</Exp_Content>
			</main>
		</Box>
	);
};

export default Home;

type ContentProps = {
	spacing?: 'small' | 'medium' | 'large';
	theme?: BoxProps['theme'];
	background?: BoxProps['background'];
};

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
				paddingX={2} /* probably changes at breakpoints */
				gap={1}
			>
				{children}
			</Stack>
		</Flex>
	);
};
