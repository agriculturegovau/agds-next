import type { NextPage } from 'next';
import Head from 'next/head';

import { Body } from '@ag.ds-next/body';
import { Box } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';

import { AgHeader } from '../components/AgHeader';

const FormPage: NextPage = () => {
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
				<Content>
					<Box>
						<Body>
							<h1>Sign in</h1>
						</Body>
					</Box>
				</Content>
			</main>
		</Box>
	);
};

export default FormPage;
