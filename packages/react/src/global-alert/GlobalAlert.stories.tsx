import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../text';
import { GlobalAlert } from './GlobalAlert';

const meta: Meta<typeof GlobalAlert> = {
	title: 'content/GlobalAlert',
	component: GlobalAlert,
	args: {
		tone: 'warning',
	},
};

export default meta;

type Story = StoryObj<typeof GlobalAlert>;

export const Basic: Story = {
	args: {
		title: 'Alert title',
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

export const WithDismiss: Story = {
	args: {
		title: 'Alert title',
		onDismiss: console.log,
		children: (
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
				nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
				cursus orci vulputate nibh sagittis blandit.
			</Text>
		),
	},
};

export const WithoutTitle: Story = {
	args: {
		title: undefined,
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

export const WithDismissAndWithoutTitle: Story = {
	args: {
		title: undefined,
		onDismiss: console.log,
		children: (
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
				nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
				cursus orci vulputate nibh sagittis blandit.
			</Text>
		),
	},
};

export const WithLongMessage: Story = {
	args: {
		title: 'Alert title',
		onDismiss: undefined,
		children: (
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
				nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
				cursus orci vulputate nibh sagittis blandit. Nulla facilisis id orci vel
				placerat. Nam nisl enim, efficitur id mattis eget, commodo at tortor.
			</Text>
		),
	},
};
