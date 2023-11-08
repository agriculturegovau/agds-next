import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { H2 } from '@ag.ds-next/react/heading';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Divider } from '@ag.ds-next/react/divider';
import { SiteLayout } from '../../../../../components/Layout/SiteLayout';
import { DocumentTitle } from '../../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../../components/FormHelpCallout';
import { PageTitle } from '../../../../../components/PageTitle';
import { FormRegisterPetContext } from '../../../../../components/FormRegisterPetContext';
import type { NextPageWithLayout } from '../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Your pet's details | Register a pet" />
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<DirectionLink
								href="/services/registrations/pet"
								direction="left"
							>
								Back
							</DirectionLink>
							<PageTitle
								title="Your pet's details"
								introduction="Under state regulation you are required to register any pet living with you in your domestic residence in an urban zone."
							/>
							<Stack gap={1.5}>
								<H2>Registration requirements</H2>
								<Prose>
									<p>
										To speed up the process of registering a pet you will need
										to provide:
									</p>
									<ul>
										<li>address details</li>
										<li>current vaccination certificate</li>
									</ul>
								</Prose>
							</Stack>
							<div>
								<ButtonLink href="/services/registrations/pet/task-2/form">
									Get started
								</ButtonLink>
							</div>
							<Divider />
							<Stack gap={1.5}>
								<H2>Information on pet registration rules and regulations</H2>
								<Prose>
									<ul>
										<li>
											<a href="/not-found">State pet registration rules</a>
										</li>
										<li>
											<a href="/not-found">
												National pet registration legislative framework
											</a>
										</li>
										<li>
											<a href="/not-found">
												Meaningful link label that shows link purpose
											</a>
										</li>
									</ul>
								</Prose>
							</Stack>
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
			<FormRegisterPetContext>{page}</FormRegisterPetContext>
		</SiteLayout>
	);
};
