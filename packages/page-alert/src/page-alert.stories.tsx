import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';

import { PageAlert } from './page-alert';

export default {
	title: 'content/PageAlert',
	component: PageAlert,
} as ComponentMeta<typeof PageAlert>;

export const OnLight: ComponentStory<typeof PageAlert> = (args) => (
	<PageAlert {...args}>
		<h3>Page Alert</h3>
		<p>This is a Page Alert component.</p>
	</PageAlert>
);
OnLight.args = {
	tone: 'success',
};

export const OnDark: ComponentStory<typeof PageAlert> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<PageAlert {...args}>
			<h3>Page Alert</h3>
			<p>This is a Page Alert component.</p>
		</PageAlert>
	</Box>
);
OnDark.args = {
	tone: 'success',
};
