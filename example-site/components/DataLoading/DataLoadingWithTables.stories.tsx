import { Meta, StoryObj } from '@storybook/react';
import { DataLoadingWithTables } from './DataLoadingWithTables';

const meta: Meta<typeof DataLoadingWithTables> = {
	title: 'Patterns/Remote data',
	component: DataLoadingWithTables,
};

export default meta;

export const Tables: StoryObj<typeof DataLoadingWithTables> = {};
