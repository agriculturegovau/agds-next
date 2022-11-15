import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@ag.ds-next/text';
import { Prose } from '@ag.ds-next/prose';
import { PageAlert } from './PageAlert';

export default {
	title: 'content/Page Alert',
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

export const WithProse: ComponentStory<typeof PageAlert> = (args) => (
	<PageAlert {...args}>
		<Prose>
			<ul>
				<li>
					<a href="#">Full name must not be empty</a>
				</li>
				<li>
					<a href="#">Phone number must not be empty</a>
				</li>
			</ul>
		</Prose>
	</PageAlert>
);
WithProse.args = {
	title: 'Page Alert',
	tone: 'error',
};
