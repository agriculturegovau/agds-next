import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../text-input';
import {
	ConditionalRevealContainer,
	type ConditionalRevealContainerProps,
} from './ConditionalRevealContainer';

const ComponentLayout = (props: ConditionalRevealContainerProps) => {
	const { visible, children } = props;
	return (
		<ConditionalRevealContainer visible={visible}>
			{children}
		</ConditionalRevealContainer>
	);
};

const meta: Meta<typeof ConditionalRevealContainer> = {
	title: 'Forms/ConditionalRevealContainer',
	component: ComponentLayout,
};

export default meta;

type Story = StoryObj<typeof ConditionalRevealContainer>;

export const Basic: Story = {
	args: {
		visible: true,
		children: <TextInput label="Email address" required type="email" />,
	},
};
