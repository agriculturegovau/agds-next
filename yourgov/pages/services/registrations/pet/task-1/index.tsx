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
			<DocumentTitle title="Your personal details | Register a pet" />
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<DirectionLink
								direction="left"
								href="/services/registrations/pet"
							>
								Back
							</DirectionLink>
							<PageTitle
								introduction="To complete this process you can check, update and confirm your current contact and address details."
								title="Your personal details"
							/>
							<Stack gap={1.5}>
								<H2>Registration requirements</H2>
								<Prose>
									<p>
										To speed up the process of registering a pet you will need
										to provide:
									</p>
									<ul>
										<li>Personal details</li>
										<li>Address details</li>
										<li>Contact details</li>
									</ul>
								</Prose>
							</Stack>
							<div>
								<ButtonLink href="/services/registrations/pet/task-1/form">
									Get started
								</ButtonLink>
							</div>
							<Divider />
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
