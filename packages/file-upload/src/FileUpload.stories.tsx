import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { FileUpload } from './FileUpload';

export default {
	title: 'forms/FileUpload',
	component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

export const OnLight: ComponentStory<typeof FileUpload> = (args) => (
	<FileUpload {...args} onChange={console.log} />
);
OnLight.args = {
	label: 'Drivers licence',
};

export const OnDark: ComponentStory<typeof FileUpload> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<FileUpload {...args} onChange={console.log} />
	</Box>
);
OnDark.args = {
	label: 'Drivers licence',
};

export const Required: ComponentStory<typeof FileUpload> = (args) => {
	return <FileUpload {...args} onChange={console.log} />;
};
Required.args = {
	label: 'Drivers licence',
	required: true,
};

export const Disabled: ComponentStory<typeof FileUpload> = (args) => {
	return <FileUpload {...args} onChange={console.log} />;
};
Disabled.args = {
	label: 'Drivers licence',
	disabled: true,
};

export const Invalid: ComponentStory<typeof FileUpload> = (args) => (
	<FileUpload {...args} onChange={console.log} />
);
Invalid.args = {
	label: 'Drivers licence',
	message: 'Please choose a valid file',
	invalid: true,
};

export const Valid: ComponentStory<typeof FileUpload> = (args) => (
	<FileUpload {...args} onChange={console.log} />
);
Valid.args = {
	label: 'Drivers licence',
	message: 'The file you have sublitted is valid',
	valid: true,
};

export const Multiple: ComponentStory<typeof FileUpload> = (args) => {
	return <FileUpload {...args} onChange={console.log} />;
};
Multiple.args = {
	label: 'Identity documents',
	multiple: true,
};

export const AcceptedFormats: ComponentStory<typeof FileUpload> = (args) => {
	return <FileUpload {...args} onChange={console.log} />;
};
AcceptedFormats.args = {
	label: 'Identity documents',
	required: true,
	hint: 'May include images of your passport, drivers licence etc.',
	maxSize: 200,
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

export const MultipleImages: ComponentStory<typeof FileUpload> = (args) => {
	return <FileUpload {...args} onChange={console.log} />;
};
MultipleImages.args = {
	label: 'Photos from your holiday',
	maxSize: 2000,
	maxFiles: 3,
	accept: ['image/jpeg', 'image/jpg', 'image/png', 'image/heic'],
	multiple: true,
};
