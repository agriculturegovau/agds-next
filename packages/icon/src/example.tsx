import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

import { AlertFilledIcon } from './icons/AlertFilledIcon';
import { AlertIcon } from './icons/AlertIcon';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { ArrowUpIcon } from './icons/ArrowUpIcon';
import { AvatarIcon } from './icons/AvatarIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { ChevronUpIcon } from './icons/ChevronUpIcon';
import { CloseIcon } from './icons/CloseIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { IconProps } from './Icon';
import { InfoFilledIcon } from './icons/InfoFilledIcon';
import { MenuIcon } from './icons/MenuIcon';
import { ProgressDoingIcon } from './icons/ProgressDoingIcon';
import { ProgressDoneIcon } from './icons/ProgressDoneIcon';
import { ProgressTodoIcon } from './icons/ProgressTodoIcon';
import { SearchIcon } from './icons/SearchIcon';
import { SuccessFilledIcon } from './icons/SuccessFilledIcon';
import { SuccessIcon } from './icons/SuccessIcon';
import { WarningFilledIcon } from './icons/WarningFilledIcon';

const allIcons = {
	AlertFilledIcon,
	AlertIcon,
	ArrowDownIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	ArrowUpIcon,
	AvatarIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronUpIcon,
	CloseIcon,
	ExternalLinkIcon,
	InfoFilledIcon,
	MenuIcon,
	ProgressDoingIcon,
	ProgressDoneIcon,
	ProgressTodoIcon,
	SearchIcon,
	SuccessFilledIcon,
	SuccessIcon,
	WarningFilledIcon,
};

type IconNameType = keyof typeof allIcons;

export const IconExamples = ({ size, ...args }: IconProps) => {
	return (
		<Flex gap={0.5} flexWrap="wrap">
			{(Object.keys(allIcons) as IconNameType[]).sort().map((iconName) => {
				const Icon = allIcons[iconName];
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
