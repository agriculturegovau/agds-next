import { StoryObj, Meta } from '@storybook/react';
import { DividerWithText } from './DividerWithText';

const meta: Meta<typeof DividerWithText> = {
	title: 'Content/DividerWithText',
	component: DividerWithText,
};

export default meta;

type Story = StoryObj<typeof DividerWithText>;

export const Basic: Story = {};
