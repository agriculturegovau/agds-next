import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToggleButton } from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
	title: 'Forms/ToggleButton',
	component: ToggleButton,
	render: function Render(props) {
		const [isPressed, setIsPressed] = useState(false);
		return (
			<ToggleButton {...props} onChange={setIsPressed} pressed={isPressed} />
		);
	},
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Flag: Story = {
	args: {
		size: 'md',
		label: 'Flag message',
		disabled: false,
		iconType: 'flag',
	},
};

export const Star: Story = {
	args: {
		size: 'md',
		label: 'Star message',
		disabled: false,
		iconType: 'star',
	},
};
