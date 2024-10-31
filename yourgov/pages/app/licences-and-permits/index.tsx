import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Divider } from '@ag.ds-next/react/divider';
import { H2, Heading } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { AppLayout } from '../../../components/Layout/AppLayout';
import { PageTitle } from '../../../components/PageTitle';
import { HelpCallout } from '../../../components/HelpCallout';
import type { NextPageWithLayout } from '../../_app';
import { GlobalFormProvider } from '../../../components/FormMobileFoodVendorPermit';
import { ApplicationHistory } from '../../../components/FormMobileFoodVendorPermit/ApplicationHistory';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Permits" />
			<PageContent>
				<Stack gap={3}>
					<Breadcrumbs
						links={[
							{ label: 'Dashboard', href: '/app/dashboard' },
							{ label: 'Permits' },
						]}
					/>
					<PageTitle
						title="Permits"
						introduction="Stay compliant by registering for business permits."
					/>
					<ButtonLink
						alignSelf="start"
						href="/app/licences-and-permits/apply/mobile-food-vendor-permit"
					>
						Apply for a permit
					</ButtonLink>
					<ApplicationHistory />

					<Divider />

					<Stack gap={1.5}>
						<H2>Popular links</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2 }}>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">
												Industry-specific training courses
											</CardLink>
										</Heading>
										<Text>
											Explore hundreds of training courses offered by TAFE and
											other training providers.
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/app/licences-and-permits/apply/mobile-food-vendor-permit">
												Apply for a permit
											</CardLink>
										</Heading>
										<Text>
											Use the permit tool to quickly create a new permit
											application.
										</Text>
									</Stack>
								</CardInner>
							</Card>
						</Columns>
					</Stack>

					<Columns cols={{ xs: 1, sm: 4 }}>
						<Column columnSpan={{ xs: 1, sm: 3 }}>
							<HelpCallout />
						</Column>
					</Columns>
				</Stack>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<AppLayout>
			<GlobalFormProvider>{page}</GlobalFormProvider>
		</AppLayout>
	);
};
