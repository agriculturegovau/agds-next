import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import placeholder from '../public/placeholder.png';

import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';

import { AgHeader } from '../components/AgHeader';
import { SiteFooter } from '../components/SiteFooter';

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

			<AgHeader />

			<main>
				<Content spacing="large" background="shade">
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
				</Content>

				<Content spacing="small">
					<Heading type="h2">Some highlighted content</Heading>

					<Stack background="page" color="text" theme="light" gap={4}>
						Explain some important information upfront, what is the product or
						service. What is the role of it. How does the user get started using
						it. Keep this text simple and informative. Vestibulum non consequat
						tellus.{' '}
						<a
							target="_blank"
							href="https://guides.service.gov.au/content-guide/"
							rel="noreferrer"
						>
							Content guide
						</a>
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
				</Content>
			</main>

			<SiteFooter />
		</Box>
	);
};

export default Home;
