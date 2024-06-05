import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Avatar } from '../avatar';
import { NotificationBadge } from '../notification-badge';
import { Combobox } from './Combobox';
import { ComboboxRenderItem } from './ComboboxRenderItem';
import { COUNTRY_OPTIONS, NAME_OPTIONS } from './test-utils';

const meta: Meta<typeof Combobox> = {
	title: 'forms/Combobox/Combobox',
	component: Combobox,
	render: function ComboboxStory(props) {
		const [value, setValue] = useState<Option | null>(null);
		return <Combobox {...props} value={value} onChange={setValue} />;
	},
};

export default meta;

type Option = (typeof COUNTRY_OPTIONS)[number];

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRY_OPTIONS,
};

type Story = StoryObj<typeof Combobox>;

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
			<Combobox
				label="Search users"
				value={value}
				onChange={setValue}
				options={NAME_OPTIONS}
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
