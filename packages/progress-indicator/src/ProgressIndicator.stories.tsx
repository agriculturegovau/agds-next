import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useLinkComponent } from '@ag.ds-next/core';
import { Box } from '@ag.ds-next/box';
import {
	ProgressIndicator,
	ProgressIndicatorCollapseButton,
	ProgressIndicatorContainer,
	ProgressIndicatorList,
	ProgressIndicatorItem,
} from './index';

export default {
	title: 'forms/ProgressIndicator',
	component: ProgressIndicator,
	subcomponents: {
		ProgressIndicatorCollapseButton,
		ProgressIndicatorContainer,
		ProgressIndicatorList,
	},
} as ComponentMeta<typeof ProgressIndicator>;

const exampleLinkItems = [
	{ href: '#', label: 'Introduction', status: 'done' as const },
	{ href: '#', label: 'Business Contacts', status: 'doing' as const },
	{ href: '#', label: 'Case Studies', status: 'todo' as const },
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

export const OnLight: ComponentStory<typeof ProgressIndicator> = (args) => (
	<ProgressIndicator {...args} />
);
OnLight.args = {
	items: exampleLinkItems,
};

export const OnDark: ComponentStory<typeof ProgressIndicator> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<ProgressIndicator {...args} />
	</Box>
);
OnDark.args = {
	items: exampleLinkItems,
};

export const Button: ComponentStory<typeof ProgressIndicator> = (args) => (
	<ProgressIndicator {...args} />
);
Button.args = {
	items: exampleButtonItems,
};

export const ModularLinks = () => {
	const Link = useLinkComponent();
	return (
		<ProgressIndicatorList>
			{exampleLinkItems.map(({ label, status, href }, index) => (
				<ProgressIndicatorItem
					key={index}
					as={Link}
					href={href}
					status={status}
				>
					{label}
				</ProgressIndicatorItem>
			))}
		</ProgressIndicatorList>
	);
};

export const ModularButtons = () => (
	<ProgressIndicatorList>
		{exampleButtonItems.map(({ label, status, onClick }, index) => (
			<ProgressIndicatorItem key={index} onClick={onClick} status={status}>
				{label}
			</ProgressIndicatorItem>
		))}
	</ProgressIndicatorList>
);
