import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { SiteLayout } from '../../../../../../../components/Layout/SiteLayout';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import {
	GlobalFormProvider,
	FormTask4Step1,
} from '../../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Confirm and submit" />
			<PageContent>
				<FormTask4Step1 />
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
