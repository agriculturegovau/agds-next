import { Callout } from '@ag.ds-next/react/callout';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';

export function HelpCallout() {
	return (
		<Callout title="Need help?">
			<Text as="p">
				Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to Friday)
				<br />
				Email{' '}
				<TextLink href="mailto:emailaccount@yourgov.gov.au">
					emailaccount@yourgov.gov.au
				</TextLink>
			</Text>
		</Callout>
	);
}
