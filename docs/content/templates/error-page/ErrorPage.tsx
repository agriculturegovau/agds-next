import { Callout } from '@ag.ds-next/react/callout';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { Button } from '@ag.ds-next/react/button';
import { Flex } from '@ag.ds-next/react/flex';

export const ErrorPage = () => {
	return (
		<PageContent>
			<Stack gap={1.5}>
				<Prose>
					<h1>Error page title</h1>
					<p>
						Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
						vestibulum.
					</p>
				</Prose>
				<Flex alignItems="flex-start">
					<Button>Button</Button>
				</Flex>
				<Callout title="Need help?">
					<Prose>
						<p>
							Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to
							Friday)
							<br />
							Email{' '}
							<a href="mailto:emailaccount@agriculture.gov.au">
								emailaccount@agriculture.gov.au
							</a>
						</p>
					</Prose>
				</Callout>
				<Text color="muted">Error code: 500</Text>
			</Stack>
		</PageContent>
	);
};
