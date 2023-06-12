import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '../stack';
import { Text } from '../text';
import { GlobalAlert } from './GlobalAlert';

export default {
	title: 'content/GlobalAlert',
	component: GlobalAlert,
} as ComponentMeta<typeof GlobalAlert>;

export const Basic: ComponentStory<typeof GlobalAlert> = (args) => {
	return (
		<GlobalAlert {...args}>
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
				nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
				cursus orci vulputate nibh sagittis blandit.
			</Text>
		</GlobalAlert>
	);
};
Basic.args = {
	title: '',
	onDismiss: undefined,
};

export const WithTitle: ComponentStory<typeof GlobalAlert> = (args) => (
	<GlobalAlert {...args}>
		<Text as="p">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa nibh,
			aliquam vel dolor non, gravida porttitor nulla. Pellentesque cursus orci
			vulputate nibh sagittis blandit.
		</Text>
	</GlobalAlert>
);
WithTitle.args = {
	title: 'Alert title',
	onDismiss: undefined,
};

export const WithDismiss: ComponentStory<typeof GlobalAlert> = (args) => {
	return (
		<GlobalAlert {...args}>
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
				nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
				cursus orci vulputate nibh sagittis blandit.
			</Text>
		</GlobalAlert>
	);
};
WithDismiss.args = {
	title: 'Alert title',
	onDismiss: console.log,
};

export const WithLongMessage: ComponentStory<typeof GlobalAlert> = (args) => (
	<GlobalAlert {...args}>
		<Stack gap={1}>
			<Text as="p">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa
				nibh, aliquam vel dolor non, gravida porttitor nulla. Pellentesque
				cursus orci vulputate nibh sagittis blandit.
			</Text>
			<Text as="p">
				Nulla facilisis id orci vel placerat. Nam nisl enim, efficitur id mattis
				eget, commodo at tortor.
			</Text>
		</Stack>
	</GlobalAlert>
);
WithLongMessage.args = {
	title: 'Alert title',
};
