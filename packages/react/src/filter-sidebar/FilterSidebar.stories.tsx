import { StoryObj, Meta } from '@storybook/react';
import { TextInput } from '../text-input';
import { FilterSidebar } from './FilterSidebar';

const meta: Meta<typeof FilterSidebar> = {
	title: 'Layout/FilterSidebar',
	component: FilterSidebar,
	args: {
		children: <TextInput label="Example input" value="Example" />,
	},
};

export default meta;

type Story = StoryObj<typeof FilterSidebar>;

export const Basic: Story = {};
