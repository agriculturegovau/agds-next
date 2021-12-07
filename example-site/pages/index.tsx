import type { NextPage } from 'next';
import Head from 'next/head';

import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { Box, Flex, Stack } from '@ag.ds-next/box';

const Home: NextPage = () => {
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

			<Flex
				as="header"
				theme="dark"
				background="page"
				padding={4}
				justifyContent="center"
			>
				<Flex
					justifyContent="flex-start"
					maxWidth={{ md: 900, xl: 1200 }}
					width="100%"
				>
					<Flex gap={4} flexWrap={{ xs: 'wrap', md: 'nowrap' }}>
						<Flex
							width={266}
							height={100}
							background="shade"
							color="text"
							justifyContent="center"
							alignItems="center"
							fontSize="lg"
						>
							<div>LOGO</div>
						</Flex>
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

			<main>
				<Flex theme="light" justifyContent="center" background="shade">
					<Stack
						width="100%"
						maxWidth={{ md: 900, xl: 1200 }}
						paddingY={6}
						paddingX={2}
						gap={6}
					>
						<Flex
							gap={4}
							alignItems="flex-start"
							justifyContent="space-between"
						>
							<Stack gap={2}>
								<Heading type="h2">Welcome to the AG Design-System</Heading>
								<Text>
									Support the callout with some short explanatory text. You
									don't need more than a couple of sentences. Use buttons to
									give your user a clear call to action about what to do next.
								</Text>
							</Stack>
							<Box width={600} height={200} background="shadeAlt">
								Something
							</Box>
						</Flex>
					</Stack>
				</Flex>

				<Flex justifyContent="center">
					<Stack
						width="100%"
						maxWidth={{ md: 900, xl: 1200 }}
						paddingY={6}
						paddingX={2}
						gap={6}
					>
						<Flex gap={4} alignItems="baseline" background="shade">
							<Heading type="h2">Some highlighted content</Heading>
						</Flex>

						<Stack background="page" color="text" theme="light" gap={4}>
							Explain some important information upfront, what is the product or
							service. What is the role of it. How does the user get started
							using it. Keep this text simple and informative. Vestibulum non
							consequat tellus.
							<Box color="muted" padding={6} border background="shade">
								A box in a box
							</Box>
						</Stack>
						<Box
							background="page"
							color="text"
							border
							paddingY={{ xs: 2, sm: 4, xl: 6 }}
							paddingX={6}
							theme="dark"
						>
							This is a very basic test to ensure the plumbing is working as
							intended
							<Box color="muted" padding={6} border background="shade">
								A box in a box
							</Box>
						</Box>
					</Stack>
				</Flex>
			</main>
		</Box>
	);
};

export default Home;
