import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToggleButton } from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
	title: 'Forms/ToggleButton',
	component: ToggleButton,
	render: function Render(props) {
		const [isPressed, setIsPressed] = useState(false);
		return (
			<ToggleButton {...props} onClick={setIsPressed} pressed={isPressed} />
		);
	},
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Flag: Story = {
	args: {
		iconType: 'flag',
		label: 'Flag message',
		pressedLabel: 'Unflag message',
	},
};

export const Star: Story = {
	args: {
		iconType: 'star',
		label: 'Star message',
		pressedLabel: 'Unstar message',
	},
};
export const HiddenLabel: Story = {
	args: {
		hiddenLabel: true,
		iconType: 'star',
		label: 'Star message',
		pressedLabel: 'Unstar message',
	},
};
