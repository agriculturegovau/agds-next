import { Fragment, ReactElement, useState } from 'react';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { Details } from '@ag.ds-next/react/details';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Drawer } from '@ag.ds-next/react/drawer';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { TaskList } from '@ag.ds-next/react/task-list';
import { Text } from '@ag.ds-next/react/text';
import { TextLink, TextLinkExternal } from '@ag.ds-next/react/text-link';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { Callout } from '@ag.ds-next/react/callout';
import { SiteLayout } from '../../../../../../components/Layout/SiteLayout';
import { DocumentTitle } from '../../../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../../../components/FormHelpCallout';
import { PageTitle } from '../../../../../../components/PageTitle';
import {
	useGlobalForm,
	GlobalFormProvider,
	globalFormTasks,
} from '../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../_app';

const Page: NextPageWithLayout = () => {
	const { formTitle, typeSearchParm, getTaskStatus } = useGlobalForm();
	const [drawIsOpen, setDrawIsOpen] = useState(false);
	return (
		<Fragment>
			<DocumentTitle title={formTitle} />
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<DirectionLink
								href="/app/licences-and-permits/apply"
								direction="left"
							>
								Back
							</DirectionLink>
							<Stack gap={2}>
								<PageTitle
									title={formTitle}
									introduction="Seek approval for your food van or truck to operate in our area."
									callToAction={
										<Text as="p" color="muted">
											Takes around 20 minutes.
										</Text>
									}
								/>
								<Details label="What you need to apply for a permit" iconBefore>
									<Stack gap={1} alignItems="start">
										<Text as="p">
											To complete this application you will need to provide:
										</Text>
										<UnorderedList>
											<ListItem>
												vehicle registration details and vehicle plans
											</ListItem>
											<ListItem>operational plan of management</ListItem>
											<ListItem>food safety supervisor certificate</ListItem>
											<ListItem>
												names of any employees who will be handling food
											</ListItem>
											<ListItem>
												once you have confirmed business and employee details we
												will provide a checklist of required documents.
											</ListItem>
										</UnorderedList>
										<TextLink
											href="https://exports.agriculture.gov.au/help/page/example-reference-article"
											onClick={(event) => {
												if (event.metaKey) return;
												event.preventDefault();
												setDrawIsOpen(true);
											}}
										>
											Learn more about applying for a permit
										</TextLink>
									</Stack>
								</Details>

								<Drawer
									isOpen={drawIsOpen}
									onClose={() => {
										setDrawIsOpen(false);
									}}
									title={'Help'}
									actions={
										<TextLinkExternal href="https://exports.agriculture.gov.au/help/page/example-reference-article">
											Open in new window
										</TextLinkExternal>
									}
									width="lg"
								>
									<Stack gap={2}>
										<H1>What you need to apply for a permit</H1>
										<Text as="p" fontSize="md" color="muted">
											To complete this application you will need to provide:
										</Text>
										<UnorderedList>
											<ListItem color="muted">
												vehicle registration details and vehicle plans
											</ListItem>
											<ListItem color="muted">
												operational plan of management
											</ListItem>
											<ListItem color="muted">
												food safety supervisor certificate
											</ListItem>
											<ListItem color="muted">
												names of any employees who will be handling food
											</ListItem>
											<ListItem color="muted">
												once you have confirmed business and employee details we
												will provide a checklist of required documents.
											</ListItem>
										</UnorderedList>
										<H2>Vehicle registration details and vehicle plans</H2>
										<Text as="p" color="muted">
											You need to provide vehicle details so that we can ensure
											that only vendors with a permit are serving food.
										</Text>
										<H2>Food safety supervisor certificate</H2>
										<Text as="p" color="muted">
											We take the health of festival attendees very seriously so
											we insist that every vendor has a staff member who has
											completed food safety training.
										</Text>
										<H2>Names of any employees who will be handling food</H2>
										<Text as="p" color="muted">
											Not every employee has to complete food safety training,
											but we do need to have a list of everyone who is preparing
											or serving food.
										</Text>
										<Callout title="Need help?">
											<Text as="p" color="muted">
												Call{' '}
												<TextLink href="tel:02 9481 1122">
													02 9481 1122
												</TextLink>{' '}
												(9am to 5pm AEST Monday to Friday)
											</Text>
											<Text as="p" color="muted">
												Email{' '}
												<TextLink href="mailto:emailaccount@yourgov.gov.au">
													emailaccount@yourgov.gov.au
												</TextLink>
											</Text>
										</Callout>
									</Stack>
								</Drawer>
							</Stack>

							<TaskList
								ordered={true}
								items={globalFormTasks.map(
									({ formStateKey, href, label, message }) => ({
										label,
										message,
										href: href + `?type=${typeSearchParm}`,
										status: getTaskStatus(formStateKey),
									})
								)}
							/>
							<FormHelpCallout />
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
		<SiteLayout focusMode>
			<GlobalFormProvider>{page}</GlobalFormProvider>
		</SiteLayout>
	);
};
