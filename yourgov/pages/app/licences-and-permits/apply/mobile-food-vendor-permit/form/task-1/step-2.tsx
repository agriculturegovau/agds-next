import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../../../components/DocumentTitle';
import { FormMobileFoodVendorPermit } from '../../../../../../../components/FormMobileFoodVendorPermit/Context';
import { SiteLayout } from '../../../../../../../components/Layout/SiteLayout';
import { FormTask1Step2 } from '../../../../../../../components/FormMobileFoodVendorPermit/FormTask1Step2';
import type { NextPageWithLayout } from '../../../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="TODO" />
			<PageContent>
				<FormTask1Step2 />
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<SiteLayout focusMode>
			<FormMobileFoodVendorPermit>{page}</FormMobileFoodVendorPermit>
		</SiteLayout>
	);
};
