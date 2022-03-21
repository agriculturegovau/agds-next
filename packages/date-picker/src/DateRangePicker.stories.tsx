import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/box';
import { DatePicker } from './DatePicker';
import { DateRangePicker } from './DateRangePicker';

export default {
	title: 'forms/DateRangePicker',
	component: DateRangePicker,
} as ComponentMeta<typeof DateRangePicker>;

export const OnLight: ComponentStory<typeof DateRangePicker> = (args) => (
	<DateRangePicker {...args} />
);
OnLight.args = {
	label: 'Example',
};

export const OnDark: ComponentStory<typeof DateRangePicker> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<DateRangePicker {...args} />
	</Box>
);
OnDark.args = {
	label: 'Example',
};

// export const CalendarProps: ComponentStory<typeof DatePicker> = (args) => {
// 	const [value, setValue] = useState();
// 	const today = new Date();
// 	return (
// 		<DatePicker
// 			disabledDays={{ before: today }}
// 			fromMonth={today}
// 			label="Pay date"
// 			value={value}
// 			onChange={setValue}
// 			onClear={() => setValue(undefined)}
// 			showOverlay
// 		/>
// 	);
// };
// CalendarProps.args = {
// 	label: 'Example',
// };

// export const Disabled: ComponentStory<typeof DatePicker> = (args) => (
// 	<DatePicker {...args} />
// );
// Disabled.args = {
// 	disabled: true,
// };

// // export const DateRangePickerExample: ComponentStory<typeof DatePicker> = (
// // 	args
// // ) => (
// // 	<Box background="body" palette="dark" padding={1.5}>
// // 		<DateRangePicker />
// // 	</Box>
// // );
// // DateRangePickerExample.args = {
// // 	label: 'Example',
// // };

// export const Required: ComponentStory<typeof DatePicker> = (args) => (
// 	<DatePicker {...args} />
// );
// Required.args = {
// 	required: true,
// 	label: 'Example',
// };

// export const Invalid: ComponentStory<typeof DatePicker> = (args) => (
// 	<DatePicker {...args} />
// );
// Invalid.args = {
// 	label: 'Example',
// 	message: 'Enter a valid date',
// 	invalid: true,
// };

// export const Valid: ComponentStory<typeof DatePicker> = (args) => (
// 	<DatePicker {...args} />
// );
// Valid.args = {
// 	label: 'Example',
// 	message: 'The date you have entered is valid',
// 	valid: true,
// };

// export const Hint: ComponentStory<typeof DatePicker> = (args) => (
// 	<DatePicker {...args} />
// );
// Hint.args = {
// 	label: 'Example',
// 	hint: 'We will only use this to respond to your question',
// };

// export const Block: ComponentStory<typeof DatePicker> = (args) => (
// 	<DatePicker {...args} />
// );
// Block.args = {
// 	block: true,
// 	label: 'Block',
// };

// export const MaxWidths: ComponentStory<typeof DatePicker> = (args) => (
// 	<Stack gap={1}>
// 		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
// 			<DatePicker
// 				key={size}
// 				{...args}
// 				label={`DatePicker max width ${size}`}
// 				maxWidth={size}
// 			/>
// 		))}
// 	</Stack>
// );
// MaxWidths.args = {};

// export const RequiredLabel: ComponentStory<typeof DatePicker> = (args) => (
// 	<DatePicker {...args} />
// );
// RequiredLabel.args = {
// 	label: 'Example',
// 	requiredLabel: false,
// };
