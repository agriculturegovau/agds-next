import { Meta, StoryObj } from '@storybook/react';
import { MainNavBottomBar } from './MainNavBottomBar';

const meta: Meta = {
	title: 'navigation/MainNav/MainNavBottomBar',
	component: MainNavBottomBar,
};

export default meta;

type Story = StoryObj<typeof MainNavBottomBar>;

export const Basic: Story = {};
