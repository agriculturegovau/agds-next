import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { DatePicker } from './DatePicker';
import { DateRangePicker } from './DateRangePicker';
import { Text } from '@ag.ds-next/text';

export default {
	title: 'forms/DatePicker',
	component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
	const [value, setValue] = useState<Date>();
	return (
		<Stack gap={4}>
			<DatePicker {...args} value={value} onChange={setValue} />
			{value ? (
				<Text fontSize="xs" color="muted">
					Value: {value.toLocaleDateString()}
				</Text>
			) : null}
		</Stack>
	);
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

export const CalendarProps: ComponentStory<typeof DatePicker> = (args) => {
	const [value, setValue] = useState();
	const today = new Date();
	return (
		<Template
			disabledDays={{ before: today }}
			fromMonth={today}
			label="Pay date"
			value={value}
			onChange={setValue}
			onClear={() => setValue(undefined)}
			showOverlay
		/>
	);
};
CalendarProps.args = {
	label: 'Example',
};

export const Disabled: ComponentStory<typeof DatePicker> = (args) => (
	<Template {...args} />
);
Disabled.args = {
	disabled: true,
};

// export const DateRangePickerExample: ComponentStory<typeof DatePicker> = (
// 	args
// ) => (
// 	<Box background="body" palette="dark" padding={1.5}>
// 		<DateRangePicker />
// 	</Box>
// );
// DateRangePickerExample.args = {
// 	label: 'Example',
// };

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
