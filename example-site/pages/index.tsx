import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import placeholder from '../public/placeholder.png';

import { Body } from '@ag.ds-next/body';
import { Flex } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';

import { Layout } from '../components/Layout';

const Home: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>AG Design System | Example site</title>
				<meta
					name="description"
					content="An example of things that can be made with AG-DS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Content spacing="large" background="shade">
				<Flex
					gap={2}
					alignItems="flex-start"
					justifyContent="space-between"
					flexDirection={{ xs: 'column', md: 'row' }}
				>
					<Body>
						<h2>Welcome to the AG Design-System</h2>
						<p>
							Sed posuere consectetur est at lobortis. Aenean eu leo quam.
							Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec
							id elit non mi porta gravida at eget metus. Nulla vitae elit
							libero, a pharetra augue. Cum sociis natoque penatibus et magnis
							dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor
							sit amet, consectetur adipiscing elit.
						</p>
					</Body>
					<Image
						width={600}
						height={260}
						src={placeholder}
						alt="Place holder image"
					/>
				</Flex>
			</Content>

			<Content spacing="small">
				<Body>
					<h2>Pellentesque Ligula Cras</h2>
					<p>
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
						auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
						venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet
						rutrum faucibus dolor auctor. Sed posuere consectetur est at
						lobortis. Sed posuere consectetur est at lobortis.
						<a
							target="_blank"
							href="https://guides.service.gov.au/content-guide/"
							rel="noreferrer"
						>
							Content guide
						</a>
					</p>
				</Body>
			</Content>
		</Layout>
	);
};

export default Home;
