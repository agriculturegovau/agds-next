import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { DocumentTitle } from '../../../../../components/DocumentTitle';
import { FormRegisterPetDetails } from '../../../../../components/FormRegisterPetDetails/FormRegisterPetDetails';
import { FormRegisterPetContext } from '../../../../../components/FormRegisterPetContext';
import { SiteLayout } from '../../../../../components/Layout/SiteLayout';
import type { NextPageWithLayout } from '../../../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Your pet's details | Register a pet" />
			<PageContent>
				<FormRegisterPetDetails />
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
