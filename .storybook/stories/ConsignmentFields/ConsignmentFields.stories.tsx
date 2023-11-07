import { Meta, StoryObj } from '@storybook/react';
import { ConsignmentFieldsPage } from './ConsignmentFields';

const meta: Meta<typeof ConsignmentFieldsPage> = {
	title: 'Testing/ConsignmentFieldsPage',
	component: ConsignmentFieldsPage,
};

export default meta;

type Story = StoryObj<typeof ConsignmentFieldsPage>;

export const Basic: Story = {};
