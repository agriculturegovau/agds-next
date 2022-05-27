import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './Text';
import { TextLinkExternal } from './TextLinkExternal';

export default {
	title: 'foundations/Text/TextLinkExternal',
	component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof TextLinkExternal> = (args) => {
	return <TextLinkExternal {...args}>External link</TextLinkExternal>;
};

export const Basic = Template.bind({});
Basic.args = {
	children: 'External link',
	href: 'https://steelthreads.github.io/agds-next',
};
