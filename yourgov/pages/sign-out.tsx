import { useEffect, useState, Fragment } from 'react';
import { H1 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { PageContent } from '@ag.ds-next/react/content';
import { TextLink } from '@ag.ds-next/react/text-link';
import { DocumentTitle } from '../components/DocumentTitle';
import { SiteLayout } from '../components/Layout/SiteLayout';
import { useAuth } from '../lib/useAuth';

export default function Page() {
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
			<SiteLayout focusMode>
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
			</SiteLayout>
		</Fragment>
	);
}
