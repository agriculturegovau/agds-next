import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@ag.ds-next/text';
import { PageAlert } from './PageAlert';

export default {
	title: 'Components/Page Alert',
	component: PageAlert,
} as ComponentMeta<typeof PageAlert>;

export const Basic: ComponentStory<typeof PageAlert> = (args) => (
	<PageAlert {...args}>
		<Text as="p">This is a Page Alert component.</Text>
	</PageAlert>
);
Basic.args = {
	title: 'Page Alert',
	tone: 'success',
};
