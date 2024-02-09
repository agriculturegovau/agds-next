import { StoryObj, Meta } from '@storybook/react';
import { GroupedFields } from './GroupedFields';

const meta: Meta<typeof GroupedFields> = {
	title: 'Forms/GroupedFields',
	component: GroupedFields,
};

export default meta;

type Story = StoryObj<typeof GroupedFields>;

export const Basic: Story = {};
