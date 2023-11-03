import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../components/DocumentTitle';
import { FormRegisterPetPersonalDetails } from '../../../../../components/FormRegisterPetPersonalDetails/FormRegisterPetPersonalDetails';
import { FormRegisterPetContext } from '../../../../../components/FormRegisterPetContext';
import { SiteLayout } from '../../../../../components/Layout/SiteLayout';
import type { NextPageWithLayout } from '../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Your personal details | Register a pet" />
			<PageContent>
				<FormRegisterPetPersonalDetails />
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<SiteLayout focusMode>
			<FormRegisterPetContext>{page}</FormRegisterPetContext>
		</SiteLayout>
	);
};
