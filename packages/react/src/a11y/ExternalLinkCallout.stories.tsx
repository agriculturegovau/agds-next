import { ComponentMeta } from '@storybook/react';
import { Stack } from '../stack';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { H1 } from '../heading';
import { ExternalLinkCallout } from './ExternalLinkCallout';

export default {
	title: 'foundations/A11y/ExternalLinkCallout',
	component: ExternalLinkCallout,
} as ComponentMeta<typeof ExternalLinkCallout>;

export const Basic = () => (
	<Stack gap={1}>
		<H1>ExternalLinkCallout</H1>
		<Text>
			Interact with the link in this example using Apple VoiceOver or your
			chosen screen reader.
		</Text>

		<Text>
			Experiment with all of our Design System components in{' '}
			<TextLink href="https://design-system.agriculture.gov.au/playroom/index.html">
				Playroom
				<ExternalLinkCallout />
			</TextLink>
			.
		</Text>
	</Stack>
);
