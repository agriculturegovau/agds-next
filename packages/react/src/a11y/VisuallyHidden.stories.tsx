import { ComponentMeta } from '@storybook/react';
import { Stack } from '../box';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { H1 } from '../heading';
import { VisuallyHidden, visuallyHiddenStyles } from './VisuallyHidden';

export default {
	title: 'foundations/A11y/VisuallyHidden',
	component: VisuallyHidden,
} as ComponentMeta<typeof VisuallyHidden>;

export const Basic = () => (
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
);

export const Styles = () => (
	<TextLink href="#">
		Read more
		<span css={visuallyHiddenStyles}>about how to visually hide content</span>
	</TextLink>
);
