import { useEffect, Fragment, ReactElement } from 'react';
import { H1 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { PageContent } from '@ag.ds-next/react/content';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Text } from '@ag.ds-next/react/text';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { DocumentTitle } from '../components/DocumentTitle';
import { SiteLayout } from '../components/Layout/SiteLayout';
import { useAuth } from '../lib/useAuth';

export default function Page() {
	const { signOut } = useAuth();

	useEffect(() => {
		signOut();
	}, [signOut]);

	return (
		<Fragment>
			<DocumentTitle title="Sign out" />
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={1.5}>
							<H1>Sign out</H1>
							<PageAlert tone="success" title="Sign out successful">
								<Text>You have been successfully signed out.</Text>
							</PageAlert>
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		</Fragment>
	);
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <SiteLayout>{page}</SiteLayout>;
};
