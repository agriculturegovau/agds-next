import type { NextPage } from 'next';
import { Body } from '@ag.ds-next/body';
import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { FormExampleBook } from '../components/FormExampleBook';

const FormBookPage: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Booking example" />
			<AppLayout>
				<Content>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 7 }}>
							<Stack gap={2}>
								<Body>
									<h1>Book a visit</h1>
									<p>
										The page heading communicates the main focus of the page.
										Make your page heading descriptive and keep it succinct.
									</p>
								</Body>
								<FormExampleBook />
							</Stack>
						</Column>
					</Columns>
				</Content>
			</AppLayout>
		</>
	);
};

export default FormBookPage;
