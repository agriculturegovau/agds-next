import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { PageAlert } from './PageAlert';

export default {
	title: 'content/Page Alert',
	component: PageAlert,
} as ComponentMeta<typeof PageAlert>;

export const OnLight: ComponentStory<typeof PageAlert> = (args) => (
	<PageAlert {...args}>
		<Text as="p">This is a Page Alert component.</Text>
	</PageAlert>
);
OnLight.args = {
	title: 'Page Alert',
	tone: 'success',
};

export const OnDark: ComponentStory<typeof PageAlert> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<PageAlert {...args}>
			<Text as="p">This is a Page Alert component.</Text>
		</PageAlert>
	</Box>
);
OnDark.args = {
	title: 'Page Alert',
	tone: 'success',
};
