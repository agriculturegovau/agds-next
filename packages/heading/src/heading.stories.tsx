import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import { Heading, H1, H2, H3, H4, H5, H6 } from './Heading';

export default {
	title: 'Components/Heading',
	component: Heading,
	subcomponents: {
		H1,
		H2,
		H3,
		H4,
		H5,
		H6,
	},
} as ComponentMeta<typeof Heading>;

export const Basic: ComponentStory<typeof Heading> = (args) => (
	<Heading {...args} />
);
Basic.args = {
	type: 'h1',
	as: 'h1',
	children: 'Heading Example',
};

export const Sizes = () => (
	<Stack>
		<H1>Heading 1</H1>
		<H2>Heading 2</H2>
		<H3>Heading 3</H3>
		<H4>Heading 4</H4>
		<H5>Heading 5</H5>
		<H6>Heading 6</H6>
	</Stack>
);
