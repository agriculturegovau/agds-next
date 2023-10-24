import { Callout } from '@ag.ds-next/react/callout';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { tokens } from '@ag.ds-next/react/core';
import { AlertFilledIcon } from '@ag.ds-next/react/icon';
import { Button } from '@ag.ds-next/react/button';

export const ErrorPage = ({
	isApplication = false,
}: {
	/** Whether the error page is being used within the AppLayout component. */
	isApplication?: boolean;
}) => {
	return (
		<PageContent>
			<Stack
				gap={1.5}
				alignItems="flex-start"
				maxWidth={tokens.maxWidth.bodyText}
			>
				{isApplication ? <AlertFilledIcon color="error" size="lg" /> : null}
				<Prose>
					<h1>An error occurred</h1>
					<p>
						Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
						vestibulum.
					</p>
				</Prose>
				<Button>Button</Button>
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
