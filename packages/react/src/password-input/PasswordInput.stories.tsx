import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { Stack } from '../stack';
import { PasswordInput } from './PasswordInput';

export default {
	title: 'forms/PasswordInput',
	component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => (
	<PasswordInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	label: 'Example',
};

// export const Required = Template.bind({});
// Required.args = {
// 	required: true,
// 	label: 'Example',
// };

// export const HideOptionalLabel = Template.bind({});
// HideOptionalLabel.args = {
// 	label: 'Example',
// 	hideOptionalLabel: true,
// };

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	label: 'Password',
	value: 'Disabled',
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Password',
	message: 'Enter a password',
	invalid: true,
};

export const Hint = Template.bind({});
Hint.args = {
	label: 'Password',
	hint: 'Password should be at least 8 characters',
};

export const Block = Template.bind({});
Block.args = {
	block: true,
	label: 'Password',
};

// export const MaxWidths: ComponentStory<typeof PasswordInput> = (args) => (
// 	<Stack gap={1}>
// 		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
// 			<PasswordInput key={size} {...args} label={size} maxWidth={size} />
// 		))}
// 	</Stack>
// );
// MaxWidths.args = {};
