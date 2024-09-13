import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { Avatar } from '../avatar';
import { NotificationBadge } from '../notification-badge';
import { Text } from '../text';
import { Popover } from '../_popover';
import { ComboboxListItem } from './ComboboxBase/ComboboxListItem';
import {
	ComboboxRenderItem,
	ComboboxRenderItemProps,
} from './ComboboxRenderItem';
import { NAME_OPTIONS } from './test-utils';

function ComboboxRenderItemTemplate(
	props: ComboboxRenderItemProps & { isActiveItem: boolean }
) {
	return (
		<Popover as="ul" style={{}}>
			<ComboboxListItem isActiveItem={false} isInteractive={true}>
				<ComboboxRenderItem {...props} />
			</ComboboxListItem>
		</Popover>
	);
}

const meta: Meta<typeof ComboboxRenderItem> = {
	title: 'forms/Combobox/Primitives/ComboboxRenderItem',
	component: ComboboxRenderItem,
	render: (props) => (
		<ComboboxRenderItemTemplate {...props} isActiveItem={false} />
	),
};

export default meta;

type Story = StoryObj<typeof ComboboxRenderItem>;

const nameOption = NAME_OPTIONS[0];

export const Basic: Story = {
	args: {
		itemLabel: nameOption.fullName,
	},
};

export const WithSecondaryText: Story = {
	args: {
		itemLabel: nameOption.fullName,
		secondaryText: `Role: ${nameOption.jobTitle}`,
	},
};

export const WithTertiaryText: Story = {
	args: {
		itemLabel: nameOption.fullName,
		secondaryText: `Role: ${nameOption.jobTitle}`,
		tertiaryText: `Status: ${nameOption.status}`,
	},
};

export const WithBeforeElement: Story = {
	args: {
		itemLabel: nameOption.fullName,
		secondaryText: `Role: ${nameOption.jobTitle}`,
		tertiaryText: `Status: ${nameOption.status}`,
		beforeElement: (
			<Avatar name={nameOption.fullName} size="sm" tone="action" />
		),
	},
};

export const WithEndElement: Story = {
	args: {
		itemLabel: nameOption.fullName,
		secondaryText: `Role: ${nameOption.jobTitle}`,
		tertiaryText: `Status: ${nameOption.status}`,
		beforeElement: (
			<Avatar name={nameOption.fullName} size="sm" tone="action" />
		),
		endElement: <NotificationBadge value={2} tone="action" />,
	},
};

export const WithFourLinesText: Story = {
	args: {
		itemLabel: nameOption.fullName,
		secondaryText: (
			<Fragment>
				<Text color="muted" fontSize="xs">
					Role: {nameOption.jobTitle}
				</Text>
				<Text color="muted" fontSize="xs">
					Status: {nameOption.status}
				</Text>
				<Text color="muted" fontSize="xs">
					Another text line
				</Text>
			</Fragment>
		),
	},
};
