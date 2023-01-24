import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileInput } from './FileInput';

export default {
	title: 'Forms/FileInput',
	component: FileInput,
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args) => (
	<FileInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	label: 'Example',
};

export const Required = Template.bind({});
Required.args = {
	required: true,
	label: 'Example',
};

export const AcceptableFileTypes = Template.bind({});
AcceptableFileTypes.args = {
	label: 'Example',
	hint: 'Acceptable file types: .jpg, .png, .heic',
	accept: 'image/*',
};

export const HideOptionalLabel = Template.bind({});
HideOptionalLabel.args = {
	label: 'Example',
	hideOptionalLabel: true,
};

export const Multiple = Template.bind({});
Multiple.args = {
	multiple: true,
	label: 'Example',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	label: 'Example',
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Example',
	message: 'Please choose a valid file',
	invalid: true,
};

export const Hint = Template.bind({});
Hint.args = {
	label: 'Example',
	hint: 'General hint information',
};
