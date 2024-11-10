import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../../components/DocumentTitle';
import { AppLayout } from '../../../../../../components/Layout/AppLayout';
import {
	GlobalFormProvider,
	FormProvider,
	FormStep7,
	formSteps,
	useGlobalForm,
} from '../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../_app';

const Page: NextPageWithLayout = () => {
	const { formTitle } = useGlobalForm();
	return (
		<Fragment>
			<DocumentTitle title={`${formSteps[6].label} | ${formTitle}`} />
			<PageContent>
				<FormStep7 />
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
