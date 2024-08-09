import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../../../../../../../components/Layout/AppLayout';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import { GlobalFormProvider } from '../../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../../_app';
import {
	FormTask2Provider,
	task2FormSteps,
} from '../../../../../../../components/FormMobileFoodVendorPermit/task2/FormTask2Provider';
import { FormTask2Step1 } from '../../../../../../../components/FormMobileFoodVendorPermit/task2/FormTask2Step1';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title={task2FormSteps[0].label} />
			<PageContent>
				<FormTask2Step1 />
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
