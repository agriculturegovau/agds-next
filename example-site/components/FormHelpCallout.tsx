import { Body } from '@ag.ds-next/body';
import { Callout } from '@ag.ds-next/callout';

export const FormHelpCallout = () => {
	return (
		<Callout title="Need help?">
			<Body>
				<p>
					Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to Friday)
					<br />
					Email{' '}
					<a href="mailto:emailaccount@awe.gov.au">emailaccount@awe.gov.au</a>
				</p>
			</Body>
		</Callout>
	);
};
