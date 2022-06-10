import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@ag.ds-next/box';
import { BaseButton } from '@ag.ds-next/button';
import { DirectionLink } from './DirectionLink';

export default {
	title: 'navigation/DirectionLink',
	component: DirectionLink,
} as ComponentMeta<typeof DirectionLink>;

const Template: ComponentStory<typeof DirectionLink> = (args) => {
	return <DirectionLink {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
	children: 'Continue',
	direction: 'right',
	href: '#',
};

export const AsButton = Template.bind({});
AsButton.args = {
	as: BaseButton,
	children: 'Button element',
	direction: 'right',
	onClick: console.log,
};

export const AllDirections = () => (
	<Stack gap={1}>
		<DirectionLink href="#" direction="left">
			Back
		</DirectionLink>
		<DirectionLink href="#" direction="right">
			Next
		</DirectionLink>
		<DirectionLink href="#" direction="up">
			Top
		</DirectionLink>
		<DirectionLink href="#" direction="down">
			Skip to footer
		</DirectionLink>
	</Stack>
);
