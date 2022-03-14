import type { NextPage } from 'next';
import Head from 'next/head';
import { Stack } from '@ag.ds-next/box';
import { Content, ContentBleed } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { ProgressIndicator } from '@ag.ds-next/progress-indicator';

import { Layout } from '../components/Layout';
import { FormExampleMultiStep } from '../components/FormExampleMultiStep';

const FormMultiStepPage: NextPage = () => {
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
				<Stack gap={3}>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 3 }}>
							<ContentBleed visible={{ md: false }}>
								<ProgressIndicator
									items={[
										{
											label: 'Personal details',
											status: 'doing',
										},
										{
											label: 'Contact details',
											status: 'todo',
										},
										{
											label: 'Notification preferences',
											status: 'todo',
										},
									]}
								/>
							</ContentBleed>
						</Column>
						<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ md: 5 }}>
							<FormExampleMultiStep />
						</Column>
					</Columns>
				</Stack>
			</Content>
		</Layout>
	);
};

export default FormMultiStepPage;
