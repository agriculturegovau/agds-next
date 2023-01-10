import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../text';
import { Prose } from '../prose';
import { PageAlert } from './PageAlert';

export default {
	title: 'content/PageAlert',
	component: PageAlert,
} as ComponentMeta<typeof PageAlert>;

export const Basic: ComponentStory<typeof PageAlert> = (args) => (
	<PageAlert {...args}>
		<Text as="p">This is a Page alert component.</Text>
	</PageAlert>
);
Basic.args = {
	title: 'Page alert',
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
	title: 'Page alert',
	tone: 'error',
};
