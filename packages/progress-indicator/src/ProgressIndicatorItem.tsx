import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import {
	ProgressBlockedIcon,
	ProgressDoingIcon,
	SuccessFilledIcon,
	ProgressTodoIcon,
} from '@ag.ds-next/icon';
import { boxPalette, LinkProps, packs } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button';
import { hoverColorMap, ProgressIndicatorBackground } from './utils';

export type ProgressIndicatorItem = (
	| ProgressIndicatorItemButtonProps
	| ProgressIndicatorItemLinkProps
) & {
	label: string;
};

export type ProgressIndicatorItemStatus = keyof typeof statusMap;

export type ProgressIndicatorItemLinkProps = LinkProps & {
	background?: ProgressIndicatorBackground;
	status: ProgressIndicatorItemStatus;
};

export const ProgressIndicatorItemLink = ({
	children,
	...props
}: ProgressIndicatorItemLinkProps) => (
	<ProgressIndicatorItem as={TextLink} {...props}>
		{children}
	</ProgressIndicatorItem>
);

export type ProgressIndicatorItemButtonProps =
	ButtonHTMLAttributes<HTMLButtonElement> & {
		background?: ProgressIndicatorBackground;
		status: ProgressIndicatorItemStatus;
	};

export const ProgressIndicatorItemButton = ({
	children,
	...props
}: ProgressIndicatorItemButtonProps) => (
	<ProgressIndicatorItem as={BaseButton} {...props}>
		{children}
	</ProgressIndicatorItem>
);

type ProgressIndicatorItemProps = PropsWithChildren<{
	as: ElementType;
	background?: ProgressIndicatorBackground;
	status: ProgressIndicatorItemStatus;
}>;

const ProgressIndicatorItemTimeline = () => (
	<div
		css={{
			width: 2,
			backgroundColor: boxPalette.border,
			flex: 1,
		}}
	/>
);

const ProgressIndicatorItemIcon = ({
	status,
}: {
	status: ProgressIndicatorItemStatus;
}) => {
	const { icon: Icon, iconColor } = statusMap[status];
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			width="46px"
		>
			<ProgressIndicatorItemTimeline />
			<Icon size="md" color={iconColor} />
			<ProgressIndicatorItemTimeline />
		</Flex>
	);
};

const ProgressIndicatorItem = ({
	as,
	background = 'body',
	children,
	status,
	...props
}: ProgressIndicatorItemProps) => {
	const active = status === 'doing';
	const { label } = statusMap[status];

	const listItemTimelineBeginningPathSelector =
		'> :first-child > div:first-of-type > div:first-of-type';

	const listItemTimelineEndPathSelector =
		'> :first-child > div:first-of-type > div:last-of-type';

	const listItemTextContainerSelector = '> :first-child > span:last-of-type';

	const listItemLinkTextSelector = '> span:last-of-type > span:first-of-type';

	return (
		<Box
			as="li"
			background={background}
			css={{
				'&:first-of-type': {
					[listItemTimelineBeginningPathSelector]: {
						opacity: 0,
					},
				},
				'&:last-of-type': {
					[listItemTimelineEndPathSelector]: {
						opacity: 0,
					},
					[listItemTextContainerSelector]: {
						borderBottomWidth: 0,
					},
				},
			}}
		>
			<Flex
				as={as}
				css={{
					textDecoration: 'none',
					[listItemLinkTextSelector]: {
						...packs.underline,
						color: boxPalette.foregroundAction,
						fontWeight: active ? 'bold' : 'normal',
					},
					'&:hover': {
						backgroundColor: hoverColorMap[background],
						[listItemLinkTextSelector]: {
							textDecoration: 'none',
							color: boxPalette.foregroundText,
						},
					},
				}}
			>
				<ProgressIndicatorItemIcon status={status} />

				<Stack
					as="span"
					flexDirection="column-reverse"
					gap={0}
					justifyContent="center"
					paddingY={0.75}
					fontFamily="body"
					fontWeight={active ? 'bold' : 'normal'}
					borderBottom
					width="100%"
					focus
					{...props}
				>
					<Text>{children}</Text>
					<Text
						color="muted"
						fontSize="xs"
						lineHeight="nospace"
						css={{ textDecoration: 'none' }}
					>
						{label}
					</Text>
				</Stack>
			</Flex>
		</Box>
	);
};

const statusMap = {
	blocked: {
		label: 'Cannot start yet',
		icon: ProgressBlockedIcon,
		iconColor: 'border',
	},
	doing: {
		label: 'In progress',
		icon: ProgressDoingIcon,
		iconColor: 'action',
	},
	todo: {
		label: 'Not started',
		icon: ProgressTodoIcon,
		iconColor: 'border',
	},
	done: {
		label: 'Completed',
		icon: SuccessFilledIcon,
		iconColor: 'success',
	},
} as const;
