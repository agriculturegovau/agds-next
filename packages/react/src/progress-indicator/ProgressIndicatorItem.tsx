import {
	ButtonHTMLAttributes,
	ElementType,
	PropsWithChildren,
	useEffect,
} from 'react';
import { Box, backgroundColorMap } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { TextLink } from '../text-link';
import {
	ProgressBlockedIcon,
	ProgressDoingIcon,
	SuccessFilledIcon,
	ProgressTodoIcon,
	SuccessIcon,
	AlertIcon,
} from '../icon';
import { boxPalette, LinkProps, packs, tokens } from '../core';
import { BaseButton } from '../button';
import { hoverColorMap, ProgressIndicatorBackground } from './utils';

export type ProgressIndicatorItem = (
	| ProgressIndicatorItemButtonProps
	| ProgressIndicatorItemLinkProps
) & {
	label: string;
	isActive?: boolean;
};

export type ProgressIndicatorItemStatus =
	| 'blocked'
	| 'doing'
	| 'started'
	| 'todo'
	| 'done'
	| 'saved'
	| 'error';

export type ProgressIndicatorItemLinkProps = LinkProps & {
	background?: ProgressIndicatorBackground;
	status: ProgressIndicatorItemStatus;
	isActive?: boolean;
};

export const ProgressIndicatorItemLink = ({
	children,
	isActive,
	status,
	...props
}: ProgressIndicatorItemLinkProps) => (
	<ProgressIndicatorItem
		as={TextLink}
		isActive={Boolean(isActive)}
		status={status}
		{...props}
	>
		{children}
	</ProgressIndicatorItem>
);

export type ProgressIndicatorItemButtonProps =
	ButtonHTMLAttributes<HTMLButtonElement> & {
		background?: ProgressIndicatorBackground;
		status: ProgressIndicatorItemStatus;
		isActive: boolean;
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
	isActive: boolean;
}>;

const ProgressIndicatorItem = ({
	as,
	background = 'body',
	children,
	status,
	isActive,
	...props
}: ProgressIndicatorItemProps) => {
	const { label } = statusMap[status];

	const listItemLinkTextSelector = '> span:last-of-type > span:first-of-type';

	if (isActive) {
		const activeStatusWhiteList: Array<ProgressIndicatorItemStatus> = [
			'blocked',
			'doing',
			'started',
		];
		if (!activeStatusWhiteList.includes(status)) {
			throw new Error(
				`The "${status}" status cannot be set to active. Please use one of the following status types instead: ${activeStatusWhiteList.join(
					', '
				)}`
			);
		}
	}

	useEffect(() => {
		if (status === 'doing') {
			console.warn(
				'The "doing" status is deprecated. Use the "started" status with "isActive: true" applied instead.'
			);
		}
	}, [status]);

	return (
		<Box
			as="li"
			background={background}
			css={{
				'&:first-of-type': {
					[`[${progressIndicatorItemTimelineDataAttr}]:first-of-type`]: {
						opacity: 0,
					},
				},
				'&:last-of-type': {
					[`[${progressIndicatorItemTimelineDataAttr}]:last-of-type`]: {
						opacity: 0,
					},
					[`[${progressIndicatorItemTextContainerDataAttr}]`]: {
						borderBottomWidth: 0,
					},
				},
			}}
		>
			<Flex
				as={as}
				aria-current={isActive || undefined}
				gap={1}
				css={{
					width: '100%',
					textDecoration: 'none',
					[`[${progressIndicatorItemRingDataAttr}]:before`]: {
						backgroundColor: backgroundColorMap[background],
					},
					[listItemLinkTextSelector]: {
						fontWeight: isActive ? 'bold' : 'normal',
					},
					'&:hover': {
						backgroundColor: hoverColorMap[background],
						[`[${progressIndicatorItemRingDataAttr}]:before`]: {
							backgroundColor: hoverColorMap[background],
						},
						[listItemLinkTextSelector]: packs.underline,
					},
				}}
				focus
				{...props}
			>
				<ProgressIndicatorItemIcon status={status} isActive={isActive} />
				<Stack
					{...{ [progressIndicatorItemTextContainerDataAttr]: '' }}
					as="span"
					flexDirection="column-reverse"
					flexGrow={1}
					gap={0.25}
					justifyContent="center"
					paddingY={1}
					fontFamily="body"
					fontWeight={isActive ? 'bold' : 'normal'}
					borderBottom
					borderColor="muted"
				>
					<Text {...{ [progressIndicatorItemTextDataAttr]: '' }}>
						{children}
					</Text>
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

const ProgressIndicatorItemTimeline = () => (
	<span
		{...{ [progressIndicatorItemTimelineDataAttr]: '' }}
		css={{
			width: tokens.borderWidth.md,
			backgroundColor: boxPalette.border,
			flex: 1,
		}}
	/>
);

const ProgressIndicatorItemIcon = ({
	status,
	isActive,
}: {
	status: ProgressIndicatorItemStatus;
	isActive: boolean;
}) => {
	const { icon: Icon, iconColor } = statusMap[status];
	const ringWidth = tokens.borderWidth.md;
	const ringGap = 3;
	const ringInset = ringWidth + ringGap;
	const processedIconColor: IconColour =
		isActive && iconColor === 'border' ? 'selected' : iconColor;

	return (
		<Flex as="span" flexDirection="column" alignItems="center">
			<ProgressIndicatorItemTimeline />
			<span
				{...{ [progressIndicatorItemRingDataAttr]: '' }}
				css={{
					position: 'relative',
					paddingLeft: ringInset,
					paddingRight: ringInset,
					...(isActive && {
						':before': {
							position: 'absolute',
							top: -ringInset,
							bottom: -ringInset,
							left: 0,
							right: 0,
							borderRadius: '100%',
							content: '""',
							border: `${ringWidth}px solid ${boxPalette.selected}`,
						},
					}),
				}}
			>
				<Icon
					size="md"
					color={processedIconColor}
					css={{
						position: 'relative',
						display: 'block',
						margin: -1,
					}}
				/>
			</span>
			<ProgressIndicatorItemTimeline />
		</Flex>
	);
};

const progressIndicatorItemTimelineDataAttr =
	'data-agds-progress-indicator-item-timeline-action';
const progressIndicatorItemRingDataAttr =
	'data-agds-progress-indicator-item-ring';
const progressIndicatorItemTextContainerDataAttr =
	'data-agds-progress-indicator-item-text-container';
const progressIndicatorItemTextDataAttr =
	'data-agds-progress-indicator-item-text';

type IconColour = 'border' | 'selected' | 'success' | 'error';

type StatusMapCollection = Record<ProgressIndicatorItemStatus, StatusMapItem>;

interface StatusMapItem {
	label: string;
	icon: typeof ProgressBlockedIcon;
	iconColor: IconColour;
}

const statusMap: StatusMapCollection = {
	blocked: {
		label: 'Cannot start yet',
		icon: ProgressBlockedIcon,
		iconColor: 'border',
	},
	doing: {
		label: 'In progress',
		icon: ProgressDoingIcon,
		iconColor: 'border',
	},
	started: {
		label: 'In progress',
		icon: ProgressDoingIcon,
		iconColor: 'border',
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
	saved: {
		label: 'Saved',
		icon: SuccessIcon,
		iconColor: 'success',
	},
	error: {
		label: 'Error',
		icon: AlertIcon,
		iconColor: 'error',
	},
};
