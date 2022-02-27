import type { NextPage } from 'next';
import Head from 'next/head';
import { Body } from '@ag.ds-next/body';
import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { Layout } from '../components/Layout';
import { FormExample } from '../components/FormExample';

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
						<Stack gap={2}>
							<Body>
								<h1>Form example</h1>
								<p>
									The page heading communicates the main focus of the page. Make
									your page heading descriptive and keep it succinct.
								</p>
								<p>
									These headings introduce, respectively, sections and
									subsections within your body copy. As you create these
									headings, follow the same guidelines that you use when writing
									section headings: Be succinct, descriptive, and precise.
								</p>
							</Body>
							<FormExample />
						</Stack>
					</Column>
				</Columns>
			</Content>
		</Layout>
	);
};

export default FormPage;
