import { Fragment, ReactElement } from 'react';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Details } from '@ag.ds-next/react/details';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { TextLink } from '@ag.ds-next/react/text-link';
import { AppLayout } from '../../../../../components/Layout/AppLayout';
import { DocumentTitle } from '../../../../../components/DocumentTitle';
import {
	GettingStartedForm,
	GlobalFormProvider,
} from '../../../../../components/FormMobileFoodVendorPermit';
import { HelpCallout } from '../../../../../components/HelpCallout';
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
												<TextLink href="#learn-more">
													Learn more about mobile food business types
												</TextLink>
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
