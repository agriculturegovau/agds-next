import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../../components/DocumentTitle';
import { AppLayout } from '../../../../../../components/Layout/AppLayout';
import {
	GlobalFormProvider,
	FormProvider,
	StepVehicleRegistrationForm,
	useGlobalForm,
} from '../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../_app';
import { stepKeyToStepDataMap } from '../../../../../../components/FormMobileFoodVendorPermit/steps/stepsData';

const Page: NextPageWithLayout = () => {
	const { formTitle } = useGlobalForm();
	return (
		<Fragment>
			<DocumentTitle
				title={`${stepKeyToStepDataMap.stepVehicleRegistration.label} | ${formTitle}`}
			/>
			<PageContent>
				<StepVehicleRegistrationForm />
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
