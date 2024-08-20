import { type ReactElement } from 'react';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/react/button';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Details } from '@ag.ds-next/react/details';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { TaskList } from '@ag.ds-next/react/task-list';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../../../../../../components/DocumentTitle';
import { HelpCallout } from '../../../../../../components/HelpCallout';
import { HelpReference } from '../../../../../../components/FormMobileFoodVendorPermit/HelpReference';
import {
	GlobalFormProvider,
	globalFormTasks,
	useGlobalForm,
} from '../../../../../../components/FormMobileFoodVendorPermit';
import { PageTitle } from '../../../../../../components/PageTitle';
import { SiteLayout } from '../../../../../../components/Layout/SiteLayout';
import { type NextPageWithLayout } from '../../../../../_app';

const Page: NextPageWithLayout = () => {
	const { formTitle, getTaskStatus } = useGlobalForm();
	const { formState } = useGlobalForm();

	return (
		<>
			<DocumentTitle title={formTitle} />
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<DirectionLink
								href="/app/licences-and-permits/apply/mobile-food-vendor-permit"
								direction="left"
							>
								Back
							</DirectionLink>
							<Stack gap={2}>
								<PageTitle
									title={formTitle}
									introduction={`Seek approval for your ${formState.type} to operate in our area.`}
									callToAction={
										<Text as="p" color="muted">
											Takes around 20 minutes.
										</Text>
									}
								/>
								<Details label="What you need to apply for a permit" iconBefore>
									<Prose>
										<p>
											To complete this application you will need to provide:
										</p>
										<ul>
											<li>business owner details</li>
											<li>business type</li>
											<li>business address</li>
											<li>vehicle registration details and vehicle plans</li>
											<li>trading times</li>
											<li>food served</li>
											<li>
												details of any employees who will be handling food
											</li>
											<li>food safety supervisor certificate</li>
										</ul>
										<p>
											Once you have confirmed business and employee details, we
											will provide a checklist of required documents.
										</p>
										<p>
											<HelpReference
												drawerContent={
													<Stack gap={2}>
														<H1>What you need to apply for a permit</H1>
														<Text as="p" fontSize="md" color="muted">
															To complete this application you will need to
															provide:
														</Text>
														<UnorderedList>
															<ListItem color="muted">
																business owner details
															</ListItem>
															<ListItem color="muted">business type</ListItem>
															<ListItem color="muted">
																business address
															</ListItem>
															<ListItem color="muted">
																vehicle registration details and vehicle plans
															</ListItem>
															<ListItem color="muted">trading times</ListItem>
															<ListItem color="muted">food served</ListItem>
															<ListItem color="muted">
																details of any employees who will be handling
																food
															</ListItem>
															<ListItem color="muted">
																food safety supervisor certificate
															</ListItem>
														</UnorderedList>
														<Text as="p" color="muted">
															Once you have confirmed business and employee
															details, we will provide a checklist of required
															documents.
														</Text>
														<H2>
															Vehicle registration details and vehicle plans
														</H2>
														<Text as="p" color="muted">
															You need to provide vehicle details so that we can
															ensure that only vendors with a permit are serving
															food.
														</Text>
														<H2>Food safety supervisor certificate</H2>
														<Text as="p" color="muted">
															We take the health of festival attendees very
															seriously so we insist that every vendor has a
															staff member who has completed food safety
															training.
														</Text>
														<H2>
															Names of any employees who will be handling food
														</H2>
														<Text as="p" color="muted">
															Not every employee has to complete food safety
															training, but we do need to have a list of
															everyone who is preparing or serving food.
														</Text>
														<HelpCallout />
													</Stack>
												}
												linkContent="Learn more about applying for a permit"
												linkHref="https://exports.agriculture.gov.au/help/page/example-reference-article"
											/>
										</p>
									</Prose>
								</Details>
							</Stack>
							<TaskList
								items={globalFormTasks.map(
									({ formStateKey, href, label, message }) => ({
										label,
										message,
										href,
										status: getTaskStatus(formStateKey),
									})
								)}
							/>
							<ButtonGroup>
								<ButtonLink
									variant="secondary"
									href="/app/licences-and-permits"
								>
									Save and exit
								</ButtonLink>
								<ButtonLink variant="tertiary" href="/app/licences-and-permits">
									Cancel
								</ButtonLink>
							</ButtonGroup>
							<HelpCallout />
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		</>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<SiteLayout focusMode>
			<GlobalFormProvider>{page}</GlobalFormProvider>
		</SiteLayout>
	);
};
