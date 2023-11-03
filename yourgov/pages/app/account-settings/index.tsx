import { Fragment, ReactElement } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { H1 } from '@ag.ds-next/react/heading';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { AppLayout } from '../../../components/Layout/AppLayout';
import type { NextPageWithLayout } from '../../_app';

const Page: NextPageWithLayout = () => {
	return (
		<Fragment>
			<DocumentTitle title="Account settings" />
			<PageContent>
				<H1>Account settings</H1>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>;
};
