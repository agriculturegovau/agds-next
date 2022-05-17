import { Body } from '@ag.ds-next/body';
import { Stack } from '@ag.ds-next/box';
import { Callout } from '@ag.ds-next/callout';
import { PageAlert, PageAlertTitle } from '@ag.ds-next/page-alert';

export const FormExampleMultiStepSuccess = () => {
	return (
		<Stack gap={2}>
			<PageAlert tone="success">
				<PageAlertTitle as="h1">
					Descriptive success message (H1)
				</PageAlertTitle>
				<Body>
					<p>Supporting paragraph for the success message</p>
					<p>
						<strong>Reference: 00000000</strong>
					</p>
				</Body>
			</PageAlert>
			<Body>
				<h2>What happens next? (H2)</h2>
				<p>
					Lorem ipsum dolor lorem ipsum dolor sit amet, laoreet necessitatibus
					sed in, ut quem latine eligendi vim. Lorem ipsum dolor lorem ipsum
					dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi
					vim.{' '}
				</p>
			</Body>
			<Callout title="Need help?">
				<p>
					Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to Friday)
					<br />
					Email{' '}
					<a href="mailto:emailaccount@awe.gov.au">emailaccount@awe.gov.au</a>
				</p>
			</Callout>
		</Stack>
	);
};
