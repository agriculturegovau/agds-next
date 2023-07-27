import { StoryObj, Meta } from '@storybook/react';
import { UnorderedList } from './UnorderedList';

const meta: Meta<typeof UnorderedList> = {
	title: 'Content/UnorderedList',
	component: UnorderedList,
};

export default meta;

type Story = StoryObj<typeof UnorderedList>;

export const Basic: Story = {};
