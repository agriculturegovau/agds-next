import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../../../../../../../components/Layout/AppLayout';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import { GlobalFormProvider } from '../../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../../_app';
import { FormTask3Step1 } from '../../../../../../../components/FormMobileFoodVendorPermit/task3/FormTask3Step1';
import {
	FormTask3Provider,
	task3FormSteps,
} from '../../../../../../../components/FormMobileFoodVendorPermit/task3/FormTask3Provider';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title={task3FormSteps[0].label} />
			<PageContent>
				<FormTask3Step1 />
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<AppLayout focusMode>
			<GlobalFormProvider>
				<FormTask3Provider>{page}</FormTask3Provider>
			</GlobalFormProvider>
		</AppLayout>
	);
};
