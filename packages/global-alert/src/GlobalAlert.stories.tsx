import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@ag.ds-next/text';
import { Prose } from '@ag.ds-next/prose';
import { GlobalAlert } from './GlobalAlert';

export default {
	title: 'content/GlobalAlert',
	component: GlobalAlert,
} as ComponentMeta<typeof GlobalAlert>;

export const Basic: ComponentStory<typeof GlobalAlert> = (args) => (
	<GlobalAlert {...args}>
		<Text as="p">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa nibh,
			aliquam vel dolor non, gravida porttitor nulla. Pellentesque cursus orci
			vulputate nibh sagittis blandit.
		</Text>
	</GlobalAlert>
);
Basic.args = {
	title: 'Alert title',
};

export const WithoutTitle: ComponentStory<typeof GlobalAlert> = (args) => (
	<GlobalAlert {...args}>
		<Text as="p">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa nibh,
			aliquam vel dolor non, gravida porttitor nulla. Pellentesque cursus orci
			vulputate nibh sagittis blandit.
		</Text>
	</GlobalAlert>
);
WithoutTitle.args = {
	title: '',
};

export const WithProse: ComponentStory<typeof GlobalAlert> = (args) => (
	<GlobalAlert {...args}>
		<Prose>
			<p>
				There is an issue with myGov ID which is preventing sign in to that
				shiny new authenticated state that Adham has been working on.
			</p>
			<p> Please try again later or call us on 9481 1111.</p>
		</Prose>
	</GlobalAlert>
);
WithProse.args = {
	title: 'Alert title',
};
