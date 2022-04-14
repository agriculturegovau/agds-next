import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUpload } from './FileUpload';

export default {
	title: 'forms/FileUpload',
	component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

export const Basic: ComponentStory<typeof FileUpload> = (args) => {
	return <FileUpload {...args} onChange={console.log} />;
};
Basic.args = {
	label: 'Drivers licence',
};

export const Multiple: ComponentStory<typeof FileUpload> = (args) => {
	return <FileUpload {...args} onChange={console.log} />;
};
Multiple.args = {
	label: 'Drivers licence',
	multiple: true,
};
