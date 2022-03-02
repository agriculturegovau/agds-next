import type { NextPage } from 'next';
import Head from 'next/head';
import { Body } from '@ag.ds-next/body';
import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { Layout } from '../components/Layout';
import { FormExample } from '../components/FormExample';
import { Divider } from '../components/Divider';

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
				<Columns>
					<Column columnSpan={{ xs: 12, md: 7 }}>
						<Stack gap={3}>
							<Body>
								<h1>Single page form</h1>
								<p>
									Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut
									quem latine eligendi vim, noster utamur sit an.
								</p>
							</Body>
							<Divider />
							<FormExample />
						</Stack>
					</Column>
				</Columns>
			</Content>
		</Layout>
	);
};

export default FormPage;
