import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextLinkExternal } from './TextLinkExternal';

export default {
	title: 'foundations/Text/TextLinkExternal',
	component: TextLinkExternal,
} as ComponentMeta<typeof TextLinkExternal>;

const Template: ComponentStory<typeof TextLinkExternal> = (args) => {
	return <TextLinkExternal {...args}>External link</TextLinkExternal>;
};

export const Basic = Template.bind({});
Basic.args = {
	children: 'External link',
	href: 'https://steelthreads.github.io/agds-next',
};
