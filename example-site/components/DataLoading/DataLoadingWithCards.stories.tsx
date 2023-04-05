import { Meta, StoryObj } from '@storybook/react';
import { DataLoadingWithCards } from './DataLoadingWithCards';

const meta: Meta<typeof DataLoadingWithCards> = {
	title: 'Patterns/Remote data',
	component: DataLoadingWithCards,
};

export default meta;

export const Cards: StoryObj<typeof DataLoadingWithCards> = {};
