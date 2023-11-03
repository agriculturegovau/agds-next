import { useEffect, useState, Fragment, ReactElement } from 'react';
import { H1 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { PageContent } from '@ag.ds-next/react/content';
import { TextLink } from '@ag.ds-next/react/text-link';
import { DocumentTitle } from '../components/DocumentTitle';
import { YourGovLayout } from '../components/Layout/YourGovLayout';
import { useAuth } from '../lib/useAuth';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
	const [signingOut, setSigningOut] = useState(true);
	const { signOut } = useAuth();

	useEffect(() => {
		setTimeout(() => {
			setSigningOut(false);
			signOut();
		}, 2000);
	}, [signOut]);

	return (
		<Fragment>
			<DocumentTitle title="Sign out" />
			<PageContent>
				<Stack gap={1.5}>
					<H1>
						{signingOut
							? 'You are being signed out ...'
							: 'You have been signed out'}
					</H1>
					{!signingOut && <TextLink href="/">Back to home</TextLink>}
				</Stack>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <YourGovLayout>{page}</YourGovLayout>;
};
