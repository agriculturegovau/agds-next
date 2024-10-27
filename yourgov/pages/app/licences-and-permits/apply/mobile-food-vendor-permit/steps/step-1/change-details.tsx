import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../../../../../../../components/Layout/AppLayout';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import {
	GlobalFormProvider,
	FormProvider,
	FormStep1ChangeDetails,
	formSteps,
} from '../../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle
				title={formSteps[0].items && formSteps[0].items[0].label}
			/>
			<PageContent>
				<FormStep1ChangeDetails />
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<AppLayout focusMode>
			<GlobalFormProvider>
				<FormProvider>{page}</FormProvider>
			</GlobalFormProvider>
		</AppLayout>
	);
};
