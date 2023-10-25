import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Avatar } from '../avatar';
import { NotificationBadge } from '../notification-badge';
import { ComboboxMulti } from './ComboboxMulti';
import { ComboboxRenderItem } from './defaultRenderItem';
import { COUNTRY_OPTIONS, NAME_OPTIONS } from './test-utils';

const meta: Meta<typeof ComboboxMulti> = {
	title: 'forms/Combobox/ComboboxMulti',
	component: ComboboxMulti,
	render: function ComboboxMultiStory(props) {
		const [value, onChange] = useState<Option[]>([]);
		return <ComboboxMulti {...props} value={value} onChange={onChange} />;
	},
};

export default meta;

type Option = (typeof COUNTRY_OPTIONS)[number];

const defaultArgs = {
	label: 'Select country',
	hint: 'Start typing to see results',
	options: COUNTRY_OPTIONS,
};

type Story = StoryObj<typeof ComboboxMulti>;

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

type NameOption = (typeof NAME_OPTIONS)[number];

export const CustomRender: Story = {
	render: function Render() {
		const [value, onChange] = useState<NameOption[]>([]);
		return (
			<ComboboxMulti
				label="Search users"
				value={value}
				onChange={onChange}
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
