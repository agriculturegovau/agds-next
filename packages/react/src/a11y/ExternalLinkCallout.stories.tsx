import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../stack';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { H1 } from '../heading';
import { ExternalLinkCallout } from './ExternalLinkCallout';

const meta: Meta<typeof ExternalLinkCallout> = {
	title: 'foundations/A11y/ExternalLinkCallout',
	component: ExternalLinkCallout,
};

export default meta;

type Story = StoryObj<typeof ExternalLinkCallout>;

export const Basic: Story = {
	render: () => (
		<Stack gap={1}>
			<H1>ExternalLinkCallout</H1>
			<Text>
				Interact with the link in this example using Apple VoiceOver or your
				chosen screen reader.
			</Text>
			<Text>
				Experiment with all of our Design System components in{' '}
				<TextLink href="https://design-system.agriculture.gov.au/playroom">
					Playroom
					<ExternalLinkCallout />
				</TextLink>
				.
			</Text>
		</Stack>
	),
};
