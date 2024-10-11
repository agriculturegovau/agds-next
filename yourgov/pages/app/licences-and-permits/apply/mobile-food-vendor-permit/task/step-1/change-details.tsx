import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../../../../../../../components/Layout/AppLayout';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import {
	GlobalFormProvider,
	FormTaskProvider,
	FormTaskStep1ChangeDetails,
	taskFormSteps,
} from '../../../../../../../components/FormMobileFoodVendorPermit';
import type { NextPageWithLayout } from '../../../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle
				title={taskFormSteps[0].items && taskFormSteps[0].items[0].label}
			/>
			<PageContent>
				<FormTaskStep1ChangeDetails />
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<AppLayout focusMode>
			<GlobalFormProvider>
				<FormTaskProvider>{page}</FormTaskProvider>
			</GlobalFormProvider>
		</AppLayout>
	);
};
