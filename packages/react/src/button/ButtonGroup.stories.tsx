import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup as ButtonGroupComponent } from './ButtonGroup';
import { Button } from './Button';

const meta: Meta<typeof ButtonGroupComponent> = {
	title: 'forms/Button/ButtonGroup',
	component: ButtonGroupComponent,
};

export default meta;

type Story = StoryObj<typeof ButtonGroupComponent>;

export const ButtonGroup: Story = {
	render: () => (
		<ButtonGroupComponent>
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="tertiary">Tertiary</Button>
		</ButtonGroupComponent>
	),
};
