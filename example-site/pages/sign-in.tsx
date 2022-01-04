import type { NextPage } from 'next';
import Head from 'next/head';

import { Body } from '@ag.ds-next/body';
import { Box } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';

import { Layout } from '../components/Layout';

const FormPage: NextPage = () => {
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

			<Content>
				<Box>
					<Body>
						<h1>Sign in</h1>
					</Body>
				</Box>
			</Content>
		</Layout>
	);
};

export default FormPage;
