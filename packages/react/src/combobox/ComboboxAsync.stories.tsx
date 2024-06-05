import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Avatar } from '../avatar';
import { NotificationBadge } from '../notification-badge';
import { ComboboxAsync } from './ComboboxAsync';
import { ComboboxRenderItem } from './ComboboxRenderItem';
import { COUNTRY_OPTIONS, NAME_OPTIONS } from './test-utils';

const meta: Meta<typeof ComboboxAsync> = {
	title: 'forms/Combobox/ComboboxAsync',
	component: ComboboxAsync,
	render: function ComboboxAsyncStory(props) {
		const [value, setValue] = useState<Option | null>(null);
		return (
			<ComboboxAsync
				{...props}
				value={value}
				onChange={setValue}
				loadOptions={async function loadOptions() {
					// Simulate a slow network connection
					await new Promise((resolve) => setTimeout(resolve, 1000));
					return COUNTRY_OPTIONS;
				}}
			/>
		);
	},
};

export default meta;

type Option = (typeof COUNTRY_OPTIONS)[number];

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRY_OPTIONS,
};

type Story = StoryObj<typeof ComboboxAsync>;

export const Basic: Story = {
	args: defaultArgs,
};

export const Required: Story = {
	args: {
		...defaultArgs,
		required: true,
	},
};

export const HideOptionalLabel: Story = {
	args: {
		...defaultArgs,
		hideOptionalLabel: true,
	},
};

export const Disabled: Story = {
	args: {
		...defaultArgs,
		disabled: true,
	},
};

export const Invalid: Story = {
	args: {
		...defaultArgs,
		invalid: true,
		message: 'Country is required',
	},
};

export const Block: Story = {
	args: {
		...defaultArgs,
		block: true,
	},
};

export const Clearable: Story = {
	args: {
		...defaultArgs,
		clearable: true,
	},
};

type NameOption = (typeof NAME_OPTIONS)[number];

export const CustomRender: Story = {
	render: function Render() {
		const [value, setValue] = useState<NameOption | null>(null);
		return (
			<ComboboxAsync
				label="Search users"
				value={value}
				onChange={setValue}
				loadOptions={async function loadOptions() {
					// Simulate a slow network connection
					await new Promise((resolve) => setTimeout(resolve, 1000));
					return NAME_OPTIONS;
				}}
				renderItem={(item, inputValue) => (
					<ComboboxRenderItem
						itemLabel={item.label}
						inputValue={inputValue}
						secondaryText={`Role: ${item.jobTitle}`}
						tertiaryText={`Job: ${item.status}`}
						beforeElement={
							<Avatar name={item.fullName} size="sm" tone="action" />
						}
						endElement={
							item.unreadMessageCount > 0 ? (
								<NotificationBadge
									value={item.unreadMessageCount}
									tone="action"
								/>
							) : null
						}
					/>
				)}
			/>
		);
	},
};
