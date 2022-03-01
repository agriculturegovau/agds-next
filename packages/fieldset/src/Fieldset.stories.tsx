import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import { TextInput } from '@ag.ds-next/text-input';
import { Fieldset } from './Fieldset';

export default {
	title: 'forms/Fieldset',
	component: Fieldset,
} as ComponentMeta<typeof Fieldset>;

const Template: ComponentStory<typeof Fieldset> = (args) => (
	<form>
		<Stack gap={2}>
			<Fieldset
				label="Billing address"
				hint="Please enter your billing address"
			>
				<TextInput label="First name" required />
				<TextInput label="Last name" required />
				<TextInput label="Street" required />
				<TextInput label="City" required />
			</Fieldset>
			<Fieldset
				label="Shipping address"
				hint="Please enter your billing address"
			>
				<TextInput label="First name" required />
				<TextInput label="Last name" required />
				<TextInput label="Street" required />
				<TextInput label="City" required />
			</Fieldset>
		</Stack>
	</form>
);

export const OnLight = Template.bind({});
OnLight.args = {};

export const OnDark: ComponentStory<typeof Fieldset> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	label: 'Choose your interests',
};

// export const Block = Template.bind({});
// Block.args = {
// 	label: 'Choose your interests',
// 	block: true,
// };

// export const Required = Template.bind({});
// Required.args = {
// 	label: 'Choose your interests',
// 	block: true,
// 	required: true,
// };

// export const Hint = Template.bind({});
// Hint.args = {
// 	label: 'Choose your interests',
// 	hint: 'This is a hint',
// 	block: true,
// };

// export const Invalid = Template.bind({});
// Invalid.args = {
// 	label: 'Choose your interests',
// 	message: 'Please select an interest',
// 	required: true,
// 	block: true,
// 	invalid: true,
// };
