import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../../../../components/DocumentTitle';
import {
	FormTask2Provider,
	FormTask2Step1AddEmployee,
	GlobalFormProvider,
} from '../../../../../../../../components/FormMobileFoodVendorPermit';
import { AppLayout } from '../../../../../../../../components/Layout/AppLayout';
import type { NextPageWithLayout } from '../../../../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Add employee" />
			<PageContent>
				<FormTask2Step1AddEmployee />
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<AppLayout focusMode>
			<GlobalFormProvider>
				<FormTask2Provider>{page}</FormTask2Provider>
			</GlobalFormProvider>
		</AppLayout>
	);
};
