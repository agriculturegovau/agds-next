import { StoryObj, Meta } from '@storybook/react';
import { FilterSidebar } from './FilterSidebar';

const meta: Meta<typeof FilterSidebar> = {
	title: 'Layout/FilterSidebar',
	component: FilterSidebar,
};

export default meta;

type Story = StoryObj<typeof FilterSidebar>;

export const Basic: Story = {};
