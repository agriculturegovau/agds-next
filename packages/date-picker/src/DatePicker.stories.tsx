import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { DatePicker } from './DatePicker';

export default {
	title: 'forms/DatePicker/DatePicker',
	component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
	const [value, setValue] = useState<Date>();
	return <DatePicker {...args} value={value} onChange={setValue} />;
};

export const OnLight: ComponentStory<typeof DatePicker> = (args) => (
	<Template {...args} />
);
OnLight.args = {
	label: 'Example',
};

export const OnDark: ComponentStory<typeof DatePicker> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	label: 'Example',
};

export const CalendarProps = () => {
	const [value, setValue] = useState<Date>();
	const today = new Date();
	return (
		<DatePicker
			label="Example"
			disabledDays={{ before: today }}
			fromMonth={today}
			value={value}
			onChange={setValue}
		/>
	);
};
CalendarProps.args = {};

export const Disabled: ComponentStory<typeof DatePicker> = (args) => (
	<Template {...args} />
);
Disabled.args = {
	disabled: true,
};

export const Required: ComponentStory<typeof DatePicker> = (args) => (
	<Template {...args} />
);
Required.args = {
	required: true,
	label: 'Example',
};

export const Invalid: ComponentStory<typeof DatePicker> = (args) => (
	<Template {...args} />
);
Invalid.args = {
	label: 'Example',
	message: 'Enter a valid date',
	invalid: true,
};

export const Valid: ComponentStory<typeof DatePicker> = (args) => (
	<Template {...args} />
);
Valid.args = {
	label: 'Example',
	message: 'The date you have entered is valid',
	valid: true,
};

export const Hint: ComponentStory<typeof DatePicker> = (args) => (
	<Template {...args} />
);
Hint.args = {
	label: 'Example',
	hint: 'We will only use this to respond to your question',
};

export const Block: ComponentStory<typeof DatePicker> = (args) => (
	<Template {...args} />
);
Block.args = {
	block: true,
	label: 'Block',
};

export const MaxWidths: ComponentStory<typeof DatePicker> = (args) => (
	<Stack gap={1}>
		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
			<Template
				key={size}
				{...args}
				label={`DatePicker max width ${size}`}
				maxWidth={size}
			/>
		))}
	</Stack>
);
MaxWidths.args = {};

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
	label: 'Example',
	requiredLabel: false,
};
