import type { NextPage } from 'next';
import Head from 'next/head';

import { Heading } from '@ag.ds-next/heading';
import { Box, Flex } from '@ag.ds-next/box';
import { useToggleState } from '@ag.ds-next/core';

const Home: NextPage = () => {
	const [theme, toggle] = useToggleState('light', 'dark');
	return (
		<Box fontFamily="body">
			<Head>
				<title>AG Design System | Example site</title>
				<meta
					name="description"
					content="An example of things that can be made with AG-DS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Flex gap={4} alignItems="baseline" background="shade">
					<Heading type="h2">Welcome to the AG Design-System</Heading>
					<button onClick={toggle}>Toggle</button>
				</Flex>

				<Box
					background="page"
					color="text"
					border
					paddingY={{ xs: 2, sm: 4, xl: 6 }}
					paddingX={6}
					theme={theme}
				>
					This is a very basic test to ensure the plumbing is working as
					intended
					<Box color="muted" padding={6} border background="shade">
						A box in a box
					</Box>
				</Box>
			</main>
		</Box>
	);
};

export default Home;
