import { ReactElement } from 'react';
import { Callout } from '@ag.ds-next/react/callout';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { PageContent } from '@ag.ds-next/react/content';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { DocumentTitle } from '../../../../../../components/DocumentTitle';
import { GlobalFormProvider } from '../../../../../../components/FormMobileFoodVendorPermit';
import { SiteLayout } from '../../../../../../components/Layout/SiteLayout';
import { NextPageWithLayout } from '../../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<>
			<DocumentTitle title="Application submitted | yourGov" />
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<H1 tabIndex={-1} focus>
								<Text
									display="block"
									fontSize="sm"
									color="muted"
									fontWeight="bold"
									lineHeight="heading"
								>
									Application submitted
								</Text>
								Apply for a food van permit
							</H1>

							<PageAlert
								tone="success"
								title="Your application for a food truck permit has been submitted"
							>
								<Text as="p">Reference: REF-77437784</Text>
							</PageAlert>

							<Stack gap={1.5}>
								<H2>What happens next</H2>
								<Text as="p">
									It will take 10 business days for your application to be
									reviewed by a yourGov representative. Where next View your
									applications
								</Text>
								<DirectionLink direction="right" href="#">
									View your applications
								</DirectionLink>
							</Stack>
							<Callout title="Need help?">
								<Text as="p">
									Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to
									Friday)
								</Text>
								<Text as="p">
									Email{' '}
									<TextLink href="mailto:email.account@yourgov.gov.au">
										email.account@yourgov.gov.au
									</TextLink>
								</Text>
							</Callout>
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
