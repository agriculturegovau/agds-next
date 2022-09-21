import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@ag.ds-next/text';
import { Detail } from './Detail';

export default {
	title: 'Layout/Detail',
	component: Detail,
} as ComponentMeta<typeof Detail>;

export const Basic: ComponentStory<typeof Detail> = (args) => (
	<Detail {...args}>
		<Text>
			This is a small paragraph of text that is supplimentary to the main page
			content.
		</Text>
	</Detail>
);
Basic.args = { label: 'Details' };
