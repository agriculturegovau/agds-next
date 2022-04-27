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
	label: 'Identity documents',
	multiple: true,
	maxFiles: 2,
};

export const AcceptedFormats: ComponentStory<typeof FileUpload> = (args) => {
	return <FileUpload {...args} onChange={console.log} />;
};
AcceptedFormats.args = {
	label: 'Identity documents',
	hint: 'Formats accepted: .png, .jpg, .pdf, .docx, .xlsx.',
	accept: [
		'image/jpeg',
		'image/jpg',
		'image/png',
		'application/pdf',
		'application/msword',
		'application/vnd.ms-excel',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	],
	multiple: true,
};

export const Disabled: ComponentStory<typeof FileUpload> = (args) => {
	return <FileUpload {...args} onChange={console.log} />;
};
Disabled.args = {
	label: 'Drivers licence',
	disabled: true,
};
