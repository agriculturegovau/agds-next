import type { NextPage } from 'next';
import Head from 'next/head';
import { Body } from '@ag.ds-next/body';
import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { Layout } from '../components/Layout';
import { FormExampleSignIn } from '../components/FormExampleSignIn';

const SignInPage: NextPage = () => {
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
				<Columns>
					<Column columnSpan={{ xs: 12, md: 7 }}>
						<Stack gap={2}>
							<Body>
								<h1>Sign in example</h1>
								<p>
									The page heading communicates the main focus of the page. Make
									your page heading descriptive and keep it succinct.
								</p>
							</Body>
							<FormExampleSignIn />
						</Stack>
					</Column>
				</Columns>
			</Content>
		</Layout>
	);
};

export default SignInPage;
