import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../text-input';
import {
	ConditionalReveal,
	type ConditionalRevealProps,
} from './ConditionalReveal';

const ComponentLayout = (props: ConditionalRevealProps) => {
	const { visible, children } = props;
	return <ConditionalReveal visible={visible}>{children}</ConditionalReveal>;
};

const meta: Meta<typeof ConditionalReveal> = {
	title: 'Forms/ConditionalReveal',
	component: ComponentLayout,
};

export default meta;

type Story = StoryObj<typeof ConditionalReveal>;

export const Basic: Story = {
	args: {
		visible: true,
		children: <TextInput label="Email address" required type="email" />,
	},
};
