import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

export default {
	title: 'layout/Header',
	component: Header,
	// subcomponents: [HeaderContainer],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.parameters = {
	layout: 'fullscreen',
};
