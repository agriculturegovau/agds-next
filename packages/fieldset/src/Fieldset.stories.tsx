import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { TextInput } from '@ag.ds-next/text-input';
import { Fieldset, FieldsetContainer, FieldsetLegend } from './index';

export default {
	title: 'forms/Fieldset',
	component: Fieldset,
} as ComponentMeta<typeof Fieldset>;

const Template: ComponentStory<typeof Fieldset> = (args) => (
	<Fieldset {...args}>
		<Stack alignItems="flex-start" gap={1.5}>
			<TextInput label="Street and number" required maxWidth="xl" />
			<TextInput label="Suburb" required maxWidth="xl" />
			<TextInput label="Country" required maxWidth="xl" />
			<TextInput label="Postcode" required maxWidth="sm" />
		</Stack>
	</Fieldset>
);

export const OnLight = Template.bind({});
OnLight.args = {
	legend: 'What is your address?',
	hint: 'We will only use this to respond to your requests',
};

export const OnDark: ComponentStory<typeof Fieldset> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	legend: 'What is your address?',
	hint: 'We will only use this to respond to your requests',
};
export const LegendAsPageHeading: ComponentStory<typeof Fieldset> = (args) => (
	<Stack as="form" alignItems="flex-start" gap={1.5}>
		<Fieldset {...args}>
			<Stack alignItems="flex-start" gap={1.5}>
				<TextInput type="number" label="Day" required />
				<TextInput type="number" label="Month" required />
				<TextInput type="number" label="Year" required />
			</Stack>
		</Fieldset>
		<Button type="submit">Continue</Button>
	</Stack>
);
LegendAsPageHeading.args = {
	legend: 'What is your date of birth?',
	legendAsPageHeading: true,
	hint: 'We will only use this to respond to your request',
};

export const Modular = () => (
	<FieldsetContainer>
		<FieldsetLegend hint="We will only use this to respond to your request">
			What is your address?
		</FieldsetLegend>
		<Stack alignItems="flex-start" gap={1.5}>
			<TextInput label="Street and number" required maxWidth="xl" />
			<TextInput label="Suburb" required maxWidth="xl" />
			<TextInput label="Country" required maxWidth="xl" />
			<TextInput label="Postcode" required maxWidth="sm" />
		</Stack>
	</FieldsetContainer>
);
