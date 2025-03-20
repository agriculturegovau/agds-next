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
		label: 'Flag message',
		iconType: 'flag',
		pressedLabel: 'Unflag message',
	},
};

export const Star: Story = {
	args: {
		label: 'Star message',
		iconType: 'star',
		pressedLabel: 'Unstar message',
	},
};
export const HiddenLabel: Story = {
	args: {
		hiddenLabel: true,
		label: 'Star message',
		iconType: 'star',
		pressedLabel: 'Unstar message',
	},
};
