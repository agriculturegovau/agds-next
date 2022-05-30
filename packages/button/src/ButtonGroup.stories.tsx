import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';

export default {
	title: 'forms/Button/ButtonGroup',
	component: ButtonGroup,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof ButtonGroup> = () => (
	<ButtonGroup>
		<Button variant="primary">Primary</Button>
		<Button variant="secondary">Secondary</Button>
		<Button variant="tertiary">Tertiary</Button>
	</ButtonGroup>
);
