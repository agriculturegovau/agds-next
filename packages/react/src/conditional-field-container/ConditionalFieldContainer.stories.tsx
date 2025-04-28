import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../text-input';
import {
	ConditionalFieldContainer,
	type ConditionalFieldContainerProps,
} from './ConditionalFieldContainer';

const ComponentLayout = (props: ConditionalFieldContainerProps) => {
	const { visible, children } = props;
	return (
		<ConditionalFieldContainer visible={visible}>
			{children}
		</ConditionalFieldContainer>
	);
};

const meta: Meta<typeof ConditionalFieldContainer> = {
	title: 'Forms/ConditionalFieldContainer',
	component: ComponentLayout,
};

export default meta;

type Story = StoryObj<typeof ConditionalFieldContainer>;

export const Basic: Story = {
	args: {
		visible: true,
		children: <TextInput label="Email address" required type="email" />,
	},
};
