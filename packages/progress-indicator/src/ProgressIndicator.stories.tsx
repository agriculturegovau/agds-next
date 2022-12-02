import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import {
	ProgressIndicator,
	ProgressIndicatorCollapseButton,
	ProgressIndicatorHeading,
	ProgressIndicatorItemButton,
	ProgressIndicatorItemLink,
	ProgressIndicatorList,
} from './index';

export default {
	title: 'forms/ProgressIndicator',
	component: ProgressIndicator,
	subcomponents: {
		ProgressIndicatorCollapseButton,
		ProgressIndicatorHeading,
		ProgressIndicatorItemButton,
		ProgressIndicatorItemLink,
		ProgressIndicatorList,
	},
} as ComponentMeta<typeof ProgressIndicator>;

const exampleLinkItems = [
	{ href: '#', label: 'Introduction', status: 'done' as const },
	{ href: '#', label: 'Business Contacts', status: 'doing' as const },
	{ href: '#', label: 'Case Studies', status: 'todo' as const },
	{ href: '#', label: 'Attachments', status: 'blocked' as const },
];

const exampleButtonItems = [
	{ onClick: console.log, label: 'Introduction', status: 'done' as const },
	{
		onClick: console.log,
		label: 'Business Contacts',
		status: 'doing' as const,
	},
	{ onClick: console.log, label: 'Case Studies', status: 'todo' as const },
];

export const Basic: ComponentStory<typeof ProgressIndicator> = (args) => (
	<ProgressIndicator {...args} />
);
Basic.args = {
	items: exampleLinkItems,
};

export const OnBodyAlt: ComponentStory<typeof ProgressIndicator> = (args) => (
	<Box background="bodyAlt" padding={1.5}>
		<ProgressIndicator {...args} />
	</Box>
);
OnBodyAlt.storyName = 'On bodyAlt background';
OnBodyAlt.args = {
	background: 'bodyAlt',
	items: exampleLinkItems,
};

export const Button: ComponentStory<typeof ProgressIndicator> = (args) => (
	<ProgressIndicator {...args} />
);
Button.args = {
	items: exampleButtonItems,
};
