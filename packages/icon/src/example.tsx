import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

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
import { ProgressDoingIcon } from './icons/ProgressDoingIcon';
import { ProgressDoneIcon } from './icons/ProgressDoneIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { MenuIcon } from './icons/MenuIcon';
import { SearchIcon } from './icons/SearchIcon';
import { SuccessIcon } from './icons/SuccessIcon';
import { SuccessFilledIcon } from './icons/SuccessFilledIcon';
import { ProgressTodoIcon } from './icons/ProgressTodoIcon';

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
	ProgressDoingIcon,
	ProgressDoneIcon,
	ExternalLinkIcon,
	MenuIcon,
	SearchIcon,
	SuccessIcon,
	SuccessFilledIcon,
	ProgressTodoIcon,
};

export const IconExamples = ({ size = 3, ...args }) => {
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
							<Icon size={size} {...args} />
							<Text>{iconName}</Text>
						</Flex>
					);
				})}
		</Flex>
	);
};
