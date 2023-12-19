import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../../../../../../../../components/Layout/AppLayout';
import { DocumentTitle } from '../../../../../../../../components/DocumentTitle';
import {
	GlobalFormProvider,
	FormTask1Provider,
	FormTask1Step1ChangeDetails,
} from '../../../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Provide business owner details" />
			<PageContent>
				<FormTask1Step1ChangeDetails />
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<AppLayout focusMode>
			<GlobalFormProvider>
				<FormTask1Provider>{page}</FormTask1Provider>
			</GlobalFormProvider>
		</AppLayout>
	);
};
