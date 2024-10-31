import { Fragment, ReactElement } from 'react';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { H2, Heading } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { AppLayout } from '../../../../components/Layout/AppLayout';
import { PageTitle } from '../../../../components/PageTitle';
import { HelpCallout } from '../../../../components/HelpCallout';
import type { NextPageWithLayout } from '../../../_app';
import { GlobalFormProvider } from '../../../../components/FormMobileFoodVendorPermit';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Apply for a new permit" />
			<PageContent>
				<Stack gap={3}>
					<Breadcrumbs
						links={[
							{ label: 'Dashboard', href: '/app/dashboard' },
							{ label: 'Permits', href: '/app/licences-and-permits' },
							{ label: 'Apply for a new permit' },
						]}
					/>
					<PageTitle
						title="Apply for a new permit"
						introduction="Stay compliant by registering for business permits."
					/>
					<Stack gap={2}>
						<H2>Driver and rider licences</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">Learners permit</CardLink>
										</Heading>
										<Text>
											A learner driver licence allows you to drive with a
											supervisor who has a full Australian driving licence.
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">Provisional licence</CardLink>
										</Heading>
										<Text>
											Information on provisional licence applicatios, tests,
											exemptions, changes and checks.
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">Drivers licence</CardLink>
										</Heading>
										<Text>
											Get a driver or rider licence, renew, upgrade or change
											licence and licence details.
										</Text>
									</Stack>
								</CardInner>
							</Card>
						</Columns>
					</Stack>

					<Stack gap={2}>
						<H2>Business permits</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">
												Starting your own business
											</CardLink>
										</Heading>
										<Text>
											When starting a business, we try to make it easy to
											understand and provide everything you need to get started.
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">
												Selling food for a fundraiser
											</CardLink>
										</Heading>
										<Text>
											Some non-profit organisations that sell food for
											fundraising purposes using volunteer staff are exempt.
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/app/licences-and-permits/apply/mobile-food-vendor-permit">
												Apply for a mobile food vendor permit
											</CardLink>
										</Heading>
										<Text>
											Food businesses that sell food to the public need to be
											registered before opening.
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">
												Renovating a food business
											</CardLink>
										</Heading>
										<Text>
											For business owners, designers and builders who are
											creating a food business premises.
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">
												Change details of a food business
											</CardLink>
										</Heading>
										<Text>
											You need to tell the Health Protection Service within 7
											days of any changes to your food business.
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">
												Changing business hours
											</CardLink>
										</Heading>
										<Text>Make changes to your trading hours or days.</Text>
									</Stack>
								</CardInner>
							</Card>
						</Columns>
					</Stack>

					<Stack gap={2}>
						<H2>Other permits</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">Selling fertiliser</CardLink>
										</Heading>
										<Text>Apply for and manage your business approvals.</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">
												Disposal of dangerous materials{' '}
											</CardLink>
										</Heading>
										<Text>
											Some non-profit organisations that sell food for
											fundraising purposes using volunteer staff are exempt.
										</Text>
									</Stack>
								</CardInner>
							</Card>
							<Card as="li" shadow clickable>
								<CardInner>
									<Stack gap={1}>
										<Heading as="h2" type="h3">
											<CardLink href="/not-found">
												Register a swimming pool
											</CardLink>
										</Heading>
										<Text>
											Public Swimming and Spa pools do not need a license to
											operate under the Public Health Act 1997.
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
