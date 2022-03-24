import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { DateRangePicker, DateRange } from './DateRangePicker';
import { Text } from '@ag.ds-next/text';
import { Select } from '@ag.ds-next/select';
import { Body } from '@ag.ds-next/body';

export default {
	title: 'forms/DatePicker/DateRangePicker',
	component: DateRangePicker,
} as ComponentMeta<typeof DateRangePicker>;

const Template: ComponentStory<typeof DateRangePicker> = (args) => {
	const [range, setRange] = useState<DateRange>({
		from: undefined,
		to: undefined,
	});

	return <DateRangePicker {...args} value={range} onChange={setRange} />;
};

export const OnLight: ComponentStory<typeof DateRangePicker> = (args) => (
	<Template {...args} />
);
OnLight.args = {};

export const OnDark: ComponentStory<typeof DateRangePicker> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {};

// export const CalendarProps: ComponentStory<typeof DateRangePicker> = (args) => {
// 	const [value, setValue] = useState();
// 	const today = new Date();
// 	return (
// 		<Template
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

export const Disabled: ComponentStory<typeof DateRangePicker> = (args) => (
	<Template {...args} />
);
Disabled.args = {
	disabled: true,
};

// export const Required: ComponentStory<typeof DateRangePicker> = (args) => (
// 	<Template {...args} />
// );
// Required.args = {
// 	required: true,
// 	label: 'Example',
// };

// export const Invalid: ComponentStory<typeof DateRangePicker> = (args) => (
// 	<Template {...args} />
// );
// Invalid.args = {
// 	label: 'Example',
// 	message: 'Enter a valid date',
// 	invalid: true,
// };

// export const Valid: ComponentStory<typeof DateRangePicker> = (args) => (
// 	<Template {...args} />
// );
// Valid.args = {
// 	label: 'Example',
// 	message: 'The date you have entered is valid',
// 	valid: true,
// };

// export const Hint: ComponentStory<typeof DateRangePicker> = (args) => (
// 	<Template {...args} />
// );
// Hint.args = {
// 	label: 'Example',
// 	hint: 'We will only use this to respond to your question',
// };

export const Block: ComponentStory<typeof DateRangePicker> = (args) => (
	<Template {...args} />
);
Block.args = {
	block: true,
};

// export const MaxWidths: ComponentStory<typeof DateRangePicker> = (args) => (
// 	<Stack gap={1}>
// 		{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
// 			<Template
// 				key={size}
// 				{...args}
// 				label={`DateRangePicker max width ${size}`}
// 				maxWidth={size}
// 			/>
// 		))}
// 	</Stack>
// );
// MaxWidths.args = {};

export const Labels = Template.bind({});
Labels.args = { fromLabel: 'Start date', toLabel: 'End date' };

export const RequiredLabel = Template.bind({});
RequiredLabel.args = { requiredLabel: false };

export const ExampleFilters = () => {
	const [option, setOption] = useState<string>();

	const [range, setRange] = useState<DateRange>({
		from: undefined,
		to: undefined,
	});

	return (
		<Stack gap={3}>
			<Flex gap={2}>
				<Select
					label="Example"
					placeholder="Please select"
					options={[
						{ label: 'A', value: 'a' },
						{ label: 'B', value: 'b' },
						{ label: 'C', value: 'c' },
					]}
					value={option}
					onChange={(e) => setOption(e.target.value)}
				/>
				<DateRangePicker value={range} onChange={setRange} />
			</Flex>
			<Body>
				<ul>
					<li>Option: {option || 'Not set'}</li>
					<li>Date from: {range.from?.toLocaleDateString() || 'Not set'}</li>
					<li>Date to: {range.to?.toLocaleDateString() || 'Not set'}</li>
				</ul>
			</Body>
		</Stack>
	);
};
