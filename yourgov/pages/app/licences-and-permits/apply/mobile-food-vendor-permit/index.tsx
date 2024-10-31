import { Fragment, ReactElement } from 'react';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { Details } from '@ag.ds-next/react/details';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { AppLayout } from '../../../../../components/Layout/AppLayout';
import { DocumentTitle } from '../../../../../components/DocumentTitle';
import { HelpCallout } from '../../../../../components/HelpCallout';
import { HelpReference } from '../../../../../components/FormMobileFoodVendorPermit/HelpReference';
import {
	GettingStartedForm,
	GlobalFormProvider,
} from '../../../../../components/FormMobileFoodVendorPermit';
import { PageTitle } from '../../../../../components/PageTitle';
import type { NextPageWithLayout } from '../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Apply for a mobile food vendor permit" />
			<PageContent>
				<Columns>
					<Column columnSpan={8}>
						<Stack gap={3}>
							<Breadcrumbs
								links={[
									{ label: 'Dashboard', href: '/app/dashboard' },
									{
										label: 'Permits',
										href: '/app/licences-and-permits',
									},
									{
										label: 'Apply for a new permit',
										href: '/app/licences-and-permits/apply',
									},
									{
										label: 'Apply for a mobile food vendor permit',
									},
								]}
							/>

							<PageTitle
								title="Apply for a mobile food vendor permit"
								introduction="If you are preparing and or handling food for retail sale from a vehicle or stall, you must have approval to operate on public areas."
								callToAction={
									<Details label="More information about mobile food vending business types">
										<Prose>
											<p>
												Regulating a mobile food vending business is essential
												to ensure public health, safety, and fairness in the
												marketplace. Such regulations help maintain high
												standards of food hygiene, preventing contamination and
												ensuring that vendors adhere to safe food handling
												practices.
											</p>
											<p>
												<HelpReference
													drawerContent={
														<Stack gap={2}>
															<H1>What you need to apply for a permit</H1>
															<Text as="p" fontSize="md" color="muted">
																Regulating a mobile food vending business is
																crucial for several reasons, primarily to
																safeguard public health, ensure safety, and
																maintain fairness within the marketplace. These
																regulations play a pivotal role in upholding
																high standards of food hygiene, which is vital
																for preventing foodborne illnesses and
																contamination. By enforcing strict guidelines
																for food preparation, storage, and handling,
																these regulations help ensure that vendors
																follow best practices and adhere to sanitary
																protocols.
															</Text>
															<Text as="p" fontSize="md" color="muted">
																Moreover, regulations help create a level
																playing field in the food vending industry. They
																set clear standards and requirements that all
																vendors must meet, which prevents unfair
																competition and ensures that no one gains an
																advantage by cutting corners on health and
																safety measures. This promotes fairness and
																transparency in the market, allowing consumers
																to make informed choices and trust that the food
																they purchase is safe and of high quality.
															</Text>
															<Text as="p" fontSize="md" color="muted">
																In addition to these health and safety benefits,
																regulations can also address operational aspects
																such as permitting, zoning, and waste
																management. This ensures that mobile food
																vendors operate within designated areas, do not
																cause disruptions, and manage waste responsibly,
																contributing to the overall cleanliness and
																orderliness of public spaces. Overall, effective
																regulation is essential for protecting the
																public, supporting fair competition, and
																enhancing the overall experience for both
																vendors and consumers.
															</Text>
															<HelpCallout />
														</Stack>
													}
													linkContent="Learn more about mobile food business types"
													linkHref="https://exports.agriculture.gov.au/help/page/example-reference-article"
												/>
											</p>
										</Prose>
									</Details>
								}
							/>
							<GettingStartedForm />
							<HelpCallout />
						</Stack>
					</Column>
				</Columns>
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
