import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { Select } from '@ag.ds-next/select';
import { Body } from '@ag.ds-next/body';
import { DateRangePicker, DateRange } from './DateRangePicker';

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

export const OnLight = Template.bind({});
OnLight.args = {};

export const OnDark: ComponentStory<typeof DateRangePicker> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};

export const Required = Template.bind({});
Required.args = {
	required: true,
};

export const Labels = Template.bind({});
Labels.args = {
	fromLabel: 'From',
	toLabel: 'To',
};

export const FiltersExample = () => {
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

export const ScrollExample: ComponentStory<typeof DateRangePicker> = (args) => {
	return (
		<Box>
			<Box height="1000px"></Box>
			<Template {...args} />
			<Box height="1000px"></Box>
		</Box>
	);
};

export const ControlledExample = () => {
	const [range, setRange] = useState<DateRange>({
		from: undefined,
		to: undefined,
	});
	return (
		<Stack gap={4} alignItems="flex-start">
			<DateRangePicker value={range} onChange={setRange} />
			<ButtonGroup>
				<Button
					onClick={() =>
						setRange({
							from: new Date('2020-08-14'),
							to: new Date('2020-08-18'),
						})
					}
				>
					Set pre-defined range
				</Button>
				<Button
					variant="secondary"
					onClick={() => setRange({ from: undefined, to: undefined })}
				>
					Clear range
				</Button>
			</ButtonGroup>
		</Stack>
	);
};
