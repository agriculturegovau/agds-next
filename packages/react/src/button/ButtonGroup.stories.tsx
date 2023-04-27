import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup as ButtonGroupComponent } from './ButtonGroup';
import { Button } from './Button';

const meta: Meta<typeof ButtonGroupComponent> = {
	title: 'forms/Button/ButtonGroup',
	component: ButtonGroupComponent,
};

export default meta;

export const ButtonGroup: StoryObj<typeof ButtonGroupComponent> = {
	render: () => (
		<ButtonGroupComponent>
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="tertiary">Tertiary</Button>
		</ButtonGroupComponent>
	),
};
