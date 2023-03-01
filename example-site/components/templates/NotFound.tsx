import { Stack } from '@ag.ds-next/react/box';
import { PageContent } from '@ag.ds-next/react/content';
import { H1 } from '@ag.ds-next/react/heading';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';

export const NotFound = () => {
	return (
		<PageContent>
			<Stack gap={1.5}>
				<H1>Page not found</H1>
				<Text as="p" fontSize="md">
					Check the web address is correct or go back to the{' '}
					<TextLink href="/">Export Service</TextLink>.
				</Text>
				<Text>Error code: 404</Text>
			</Stack>
		</PageContent>
	);
};
