import { H1 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import { PageContent } from '@ag.ds-next/content';
import { Stack } from '@ag.ds-next/box';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { MAIN_ID } from '../lib/constants';
import {
	PseudoFocusRing,
	pseudoFocusRingStyles,
} from '../components/PseudoFocusRing';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Error 404" />
			<AppLayout>
				<PageContent
					as="main"
					id={MAIN_ID}
					css={pseudoFocusRingStyles}
					tabIndex={-1}
				>
					<Stack gap={1.5}>
						<H1>Page not found</H1>
						<Text as="p" fontSize="md">
							Check the web address is correct or go back to the{' '}
							<TextLink href="/">Design System</TextLink>.
						</Text>
						<Text>Error code: 404</Text>
					</Stack>
					<PseudoFocusRing />
				</PageContent>
			</AppLayout>
		</>
	);
}
