import { useRouter } from 'next/router';
import { H1 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { tokens } from '@ag.ds-next/react/core';
import { PageContent } from '@ag.ds-next/react/content';
import { SiteLayout } from './Layout/SiteLayout';
import { DocumentTitle } from './DocumentTitle';

export function PageNotAllowed() {
	const { asPath } = useRouter();
	const signInUrl = `/sign-in?redirectTo=${asPath}`;
	return (
		<>
			<DocumentTitle title="403 Error" />
			<SiteLayout>
				<PageContent>
					<Stack gap={1.5} maxWidth={tokens.maxWidth.bodyText}>
						<H1>Not allowed</H1>
						<Text as="p" fontSize="md">
							You do not have permission to access this page.
						</Text>
						<Text as="p">
							<TextLink href={signInUrl}>Sign in</TextLink> to try again.
						</Text>
					</Stack>
				</PageContent>
			</SiteLayout>
		</>
	);
}
