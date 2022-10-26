import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../../text/src';
import { Details } from './Details';

export default {
	title: 'content/Details',
	component: Details,
} as ComponentMeta<typeof Details>;

export const Basic: ComponentStory<typeof Details> = (args) => (
	<Details {...args}>
		<Text as="p">
			This is a small paragraph of text that is supplementary to the main page
			content.
		</Text>
	</Details>
);
Basic.args = { label: 'Details' };

export const WithIcon: ComponentStory<typeof Details> = (args) => (
	<Details {...args}>
		<Text as="p">
			This is a small paragraph of text that is supplementary to the main page
			content.
		</Text>
	</Details>
);
WithIcon.args = { label: 'Details', iconBefore: true };
