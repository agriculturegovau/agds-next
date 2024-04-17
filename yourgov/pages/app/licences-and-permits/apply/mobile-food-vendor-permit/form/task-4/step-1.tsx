import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { SiteLayout } from '../../../../../../../components/Layout/SiteLayout';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import {
	GlobalFormProvider,
	FormTask4Step1,
} from '../../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../../_app';
import { FormTask4Provider } from '../../../../../../../components/FormMobileFoodVendorPermit/task4/FormTask4Provider';

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
			<GlobalFormProvider>
				<FormTask4Provider>{page}</FormTask4Provider>
			</GlobalFormProvider>
		</SiteLayout>
	);
};
