import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../box';
import { Heading, H1, H2, H3, H4, H5, H6 } from './Heading';

const meta: Meta<typeof Heading> = {
	title: 'content/Heading',
	component: Heading,
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Basic: Story = {
	args: {
		type: 'h1',
		as: 'h1',
		children: 'Heading Example',
	},
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
