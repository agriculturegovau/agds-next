import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../box';
import { Text } from '../text';
import { GlobalAlert } from './GlobalAlert';

const meta: Meta<typeof GlobalAlert> = {
	title: 'content/GlobalAlert',
	component: GlobalAlert,
	args: {
		title: '',
		onDismiss: undefined,
		children: (
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
				nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
				cursus orci vulputate nibh sagittis blandit.
			</Text>
		),
	},
};

export default meta;

type Story = StoryObj<typeof GlobalAlert>;

export const Basic: Story = {};

export const WithTitle: Story = {
	args: {
		title: 'Alert title',
	},
};

export const WithDismiss: Story = {
	args: {
		title: 'Alert title',
		onDismiss: console.log,
	},
};

export const WithLongMessage: Story = {
	args: {
		title: 'Alert title',
		children: (
			<Stack gap={1}>
				<Text as="p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
					nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
					cursus orci vulputate nibh sagittis blandit.
				</Text>
				<Text as="p">
					Nulla facilisis id orci vel placerat. Nam nisl enim, efficitur id
					mattis eget, commodo at tortor.
				</Text>
			</Stack>
		),
	},
};
