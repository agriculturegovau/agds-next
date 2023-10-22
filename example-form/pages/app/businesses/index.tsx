import { Fragment, ReactElement, useEffect } from 'react';
import { PageContent } from '@ag.ds-next/react/content';
import { H1 } from '@ag.ds-next/react/heading';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { AppLayout } from '../../../components/Layout/AppLayout';
import type { NextPageWithLayout } from '../../_app';

const Page: NextPageWithLayout = () => {
	useEffect(() => {
		// This is just for testing the error boundary. Please delete me.
		throw new Error('Something went wrong');
	}, []);

	return (
		<Fragment>
			<DocumentTitle title="Businesses" />
			<PageContent>
				<H1>Businesses</H1>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>;
};
