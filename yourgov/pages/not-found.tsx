import { Fragment, ReactElement } from 'react';
import { H1 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { tokens } from '@ag.ds-next/react/core';
import { PageContent } from '@ag.ds-next/react/content';
import { SiteLayout } from '../components/Layout/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';

export default function Page() {
	return (
		<Fragment>
			<DocumentTitle title="Page not found" />
			<PageContent>
				<Stack gap={1.5} maxWidth={tokens.maxWidth.bodyText}>
					<H1>Oops! This page does not exist.</H1>
					<Text as="p" fontSize="md">
						You have reached a page which is not part of the testing process.
					</Text>
					<Text as="p">
						Please go back to the{' '}
						<TextLink href="/">yourGov home page</TextLink>.
					</Text>
				</Stack>
			</PageContent>
		</Fragment>
	);
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <SiteLayout>{page}</SiteLayout>;
};
