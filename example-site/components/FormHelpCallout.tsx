import { Prose } from '@ag.ds-next/react/prose';
import { Callout } from '@ag.ds-next/react/callout';

export const FormHelpCallout = () => {
	return (
		<Callout title="Need help?">
			<Prose>
				<p>
					Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to Friday)
					<br />
					Email{' '}
					<a href="mailto:emailaccount@agriculture.gov.au">
						emailaccount@agriculture.gov.au
					</a>
				</p>
			</Prose>
		</Callout>
	);
};
