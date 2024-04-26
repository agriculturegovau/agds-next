import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { Details } from '@ag.ds-next/react/details';
import { Stack } from '@ag.ds-next/react/stack';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Prose } from '@ag.ds-next/react/prose';
import { Divider } from '@ag.ds-next/react/divider';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { TextLinkExternal } from '@ag.ds-next/react/text-link';
import { Box } from '@ag.ds-next/react/box';
import { DocumentTitle } from '../../../../../components/DocumentTitle';
import { AppLayout } from '../../../../../components/Layout/AppLayout';
import type { NextPageWithLayout } from '../../../../_app';
import { PageTitle } from '../../../../../components/PageTitle';
import { HelpCallout } from '../../../../../components/HelpCallout';
import { GettingStartedForm } from '../../../../../components/FormMobileFoodVendorPermit';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Manage permits" />
			<PageContent>
				<Columns>
					<Column columnSpan={8}>
						<Stack gap={3}>
							<Breadcrumbs
								links={[
									{
										label: 'Home',
										href: '/app',
									},
									{
										label: 'Manage permits',
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
										Need content.
									</Details>
								}
							/>

							<GettingStartedForm>
								{(Button) => (
									<>
										<Divider />

										<Stack alignItems="flex-start" gap={1.5}>
											<Prose>
												<h2 id="what-you-will-need">What you will need</h2>
												<p>
													To complete this application you will need to provide:
												</p>
												<ul>
													<li>
														vehicle registration details and vehicle plans
													</li>
													<li>operational plan of management</li>
													<li>food safety supervisor certificate</li>
													<li>
														names of any employees who will be handling food
													</li>
													<li>
														once you have confirmed business and employee
														details we will provide a checklist of required
														documents
													</li>
												</ul>

												<h2 id="what-you-will-need">What happens next</h2>
												<p>
													It will take 10 business days for your application to
													be reviewed by a yourGov representative.
												</p>

												<Box paddingTop={3}>{Button}</Box>

												<h2 id="more-information">More information</h2>
												<h3>Links</h3>
												<ul>
													<li>
														<TextLinkExternal href="/not-found">
															Understand food safety requirements
														</TextLinkExternal>
													</li>
													<li>
														<TextLinkExternal href="/not-found">
															New laws for food businesses
														</TextLinkExternal>
													</li>
													<li>
														<TextLinkExternal href="/not-found">
															Restricted areas and exclusion zones
														</TextLinkExternal>
													</li>
													<li>
														<TextLinkExternal href="/not-found">
															Hours of operation
														</TextLinkExternal>
													</li>
												</ul>
											</Prose>
										</Stack>
									</>
								)}
							</GettingStartedForm>
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
	return <AppLayout>{page}</AppLayout>;
};
