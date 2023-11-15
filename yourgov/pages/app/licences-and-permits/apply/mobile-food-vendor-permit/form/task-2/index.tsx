import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import {
	FormEmployeeDetails,
	FormApplyFoodTruckPermitContext,
} from '../../../../../../../components/FormApplyFoodTruckPermit';
import { SiteLayout } from '../../../../../../../components/Layout/SiteLayout';
import type { NextPageWithLayout } from '../../../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Your personal details | Register a pet" />
			<PageContent>
				<FormEmployeeDetails />
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<SiteLayout focusMode>
			<FormApplyFoodTruckPermitContext>{page}</FormApplyFoodTruckPermitContext>
		</SiteLayout>
	);
};
