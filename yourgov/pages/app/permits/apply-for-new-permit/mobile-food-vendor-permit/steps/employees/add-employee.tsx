import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../../../../../../../components/Layout/AppLayout';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import {
	GlobalFormProvider,
	FormProvider,
	StepEmployeesAddEmployeeForm,
} from '../../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../../_app';
import { stepKeyToStepDataMap } from '../../../../../../../components/FormMobileFoodVendorPermit/steps/stepsData';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle
				title={
					stepKeyToStepDataMap.stepOwnerDetails?.items
						? stepKeyToStepDataMap.stepOwnerDetails.items[0].label
						: undefined
				}
			/>
			<PageContent>
				<StepEmployeesAddEmployeeForm />
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
