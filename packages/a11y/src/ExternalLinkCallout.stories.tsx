import { ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import { H1 } from '@ag.ds-next/heading';
import { ExternalLinkCallout } from './ExternalLinkCallout';

export default {
	title: 'Components/A11y/ExternalLinkCallout',
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
			<TextLink href="https://steelthreads.github.io/agds-next/playroom/index.html">
				Playroom
				<ExternalLinkCallout />
			</TextLink>
			.
		</Text>
	</Stack>
);
