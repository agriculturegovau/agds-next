import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import {
	FormTask2Provider,
	GlobalFormProvider,
	task1FormSteps,
} from '../../../../../../../components/FormMobileFoodVendorPermit';
import { FormTask2Step3 } from '../../../../../../../components/FormMobileFoodVendorPermit/task2/FormTask2Step3';
import { AppLayout } from '../../../../../../../components/Layout/AppLayout';
import type { NextPageWithLayout } from '../../../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title={task1FormSteps[2].label} />
			<PageContent>
				<FormTask2Step3 />
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
