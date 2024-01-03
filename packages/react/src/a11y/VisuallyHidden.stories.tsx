import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../stack';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { H1 } from '../heading';
import { VisuallyHidden, visuallyHiddenStyles } from './VisuallyHidden';

const meta: Meta<typeof VisuallyHidden> = {
	title: 'foundations/A11y/VisuallyHidden',
	component: VisuallyHidden,
};

export default meta;

type Story = StoryObj<typeof VisuallyHidden>;

export const Basic: Story = {
	render: () => (
		<Stack gap={1}>
			<H1>VisuallyHidden</H1>
			<Text>
				Interact with the link in this example using Apple VoiceOver or your
				chosen screen reader.
			</Text>
			<TextLink href="#">
				Read more
				<VisuallyHidden> about how to visually hide content</VisuallyHidden>
			</TextLink>
		</Stack>
	),
};

export const Styles: Story = {
	render: () => (
		<Stack gap={1}>
			<H1>visuallyHiddenStyles</H1>
			<Text>
				Interact with the link in this example using Apple VoiceOver or your
				chosen screen reader.
			</Text>
			<TextLink href="#">
				Read more
				<span css={visuallyHiddenStyles}>
					about how to visually hide content
				</span>
			</TextLink>
		</Stack>
	),
};
