import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

export default {
	title: 'layout/Header',
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderDark = Template.bind({ theme: 'dark' });
export const HeaderDarkAlt = Template.bind({ theme: 'darkAlt' });
export const HeaderLight = Template.bind({ theme: 'light' });
export const HeaderLightAlt = Template.bind({ theme: 'lightAlt' });
