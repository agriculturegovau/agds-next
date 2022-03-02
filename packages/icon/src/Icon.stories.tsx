import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

import { Icon } from './Icon';
import { IconExamples } from './example';
import { AlertIcon } from './icons/AlertIcon';
import { AlertFilledIcon } from './icons/AlertFilledIcon';
import { ArrowUpIcon } from './icons/ArrowUpIcon';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { AvatarIcon } from './icons/AvatarIcon';
import { ChevronUpIcon } from './icons/ChevronUpIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { CloseIcon } from './icons/CloseIcon';
import { DoingIcon } from './icons/DoingIcon';
import { DoneIcon } from './icons/DoneIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { MenuIcon } from './icons/MenuIcon';
import { SearchIcon } from './icons/SearchIcon';
import { SuccessIcon } from './icons/SuccessIcon';
import { SuccessFilledIcon } from './icons/SuccessFilledIcon';
import { TodoIcon } from './icons/TodoIcon';

export default {
	title: 'foundations/Icon',
	component: AlertIcon,
} as ComponentMeta<typeof AlertIcon>;

export const Basic: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
Basic.args = {
	icon: 'avatar',
	size: 4,
};

export const AllIcons: ComponentStory<typeof Icon> = () => <IconExamples />;

export const Align = () => <AlertIcon size={6} />;
export const AlignSmall = () => <AlertIcon size={2} />;
export const ChevronLeft = () => (
	<>
		<ChevronLeftIcon size={1.5} />
		<ChevronLeftIcon size={1} />
		<ChevronLeftIcon size={1.5} weight="bold" />
		<ChevronLeftIcon size={1} weight="bold" />
	</>
);

const allNewIcons = {
	AlertIcon,
	AlertFilledIcon,
	ArrowUpIcon,
	ArrowDownIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	AvatarIcon,
	ChevronUpIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CloseIcon,
	DoingIcon,
	DoneIcon,
	ExternalLinkIcon,
	MenuIcon,
	SearchIcon,
	SuccessIcon,
	SuccessFilledIcon,
	TodoIcon,
};

export const AllIcons2: ComponentStory<typeof ArrowUpIcon> = (args) => {
	return (
		<Flex gap={0.5} flexWrap="wrap">
			{Object.keys(allNewIcons)
				.sort()
				.map((iconName) => {
					const Icon = allNewIcons[iconName];
					return (
						<Flex
							key={iconName}
							flexDirection="column"
							alignItems="center"
							justifyContent="center"
							flexShrink={0}
							rounded
							gap={1}
							padding={2}
							background="shade"
							css={{ width: 180 }}
						>
							<Icon {...args} />
							<Text>{iconName}</Text>
						</Flex>
					);
				})}
		</Flex>
	);
};
AllIcons2.args = {
	size: 2,
};
