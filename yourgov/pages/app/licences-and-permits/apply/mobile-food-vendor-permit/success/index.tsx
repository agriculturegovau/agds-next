import { Fragment, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { H2 } from '@ag.ds-next/react/heading';
import { PageContent } from '@ag.ds-next/react/content';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { AppLayout } from '../../../../../../components/Layout/AppLayout';
import { DocumentTitle } from '../../../../../../components/DocumentTitle';
import { HelpCallout } from '../../../../../../components/HelpCallout';
import {
	GlobalFormProvider,
	useGlobalForm,
} from '../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../_app';
import { FormContainer } from '../../../../../../components/FormMobileFoodVendorPermit/FormContainer';
import { managePermitsPage } from '../../../../../../components/FormMobileFoodVendorPermit/utils';

const Page: NextPageWithLayout = () => {
	const { query, isReady } = useRouter();
	const { formState } = useGlobalForm();

	const isSuccess = query?.id === formState?.id && formState?.completed;

	return (
		<Fragment>
			<DocumentTitle title="Application submitted" />
			<PageContent>
				<Columns>
					<Column columnSpan={8}>
						<FormContainer
							title="Application submitted"
							hideRequiredFieldsMessage
						>
							{!isReady ? null : isSuccess ? (
								<>
									<PageAlert
										tone="success"
										title="Your application for a food truck permit has been submitted"
									>
										<Text as="p">
											Reference:{' '}
											<Text fontWeight="bold">
												<TextLink href={`/TODO?id=${formState.id}`}>
													{formState.id}
												</TextLink>
											</Text>
										</Text>
									</PageAlert>
									<Stack gap={1.5}>
										<H2>What happens next</H2>
										<Text as="p">
											It will take 10 business days for your application to be
											reviewed by a yourGov representative.
										</Text>
										<DirectionLink direction="right" href={managePermitsPage}>
											Manage existing permits
										</DirectionLink>
									</Stack>
								</>
							) : (
								<PageAlert tone="error" title="No matching application found">
									<DirectionLink direction="right" href={managePermitsPage}>
										Manage existing permits
									</DirectionLink>
								</PageAlert>
							)}
							<HelpCallout />
						</FormContainer>
					</Column>
				</Columns>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<AppLayout focusMode>
			<GlobalFormProvider>{page}</GlobalFormProvider>
		</AppLayout>
	);
};
