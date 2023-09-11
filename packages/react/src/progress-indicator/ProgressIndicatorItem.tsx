import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { TextLink } from '../text-link';
import {
	ProgressBlockedIcon,
	ProgressDoingIcon,
	SuccessFilledIcon,
	ProgressTodoIcon,
} from '../icon';
import {
	backgroundContextPalette,
	boxPalette,
	LinkProps,
	packs,
	tokens,
} from '../core';
import { BaseButton } from '../button';

export type ProgressIndicatorItem = (
	| ProgressIndicatorItemButtonProps
	| ProgressIndicatorItemLinkProps
) & {
	label: string;
};

export type ProgressIndicatorItemStatus = keyof typeof statusMap;

export type ProgressIndicatorItemLinkProps = LinkProps & {
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
	status: ProgressIndicatorItemStatus;
}>;

const ProgressIndicatorItem = ({
	as,
	children,
	status,
	...props
}: ProgressIndicatorItemProps) => {
	const active = status === 'doing';
	const { label } = statusMap[status];

	const listItemLinkTextSelector = '> span:last-of-type > span:first-of-type';

	return (
		<Box
			as="li"
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
				gap={1}
				css={{
					width: '100%',
					textDecoration: 'none',
					[`[${progressIndicatorItemRingDataAttr}]:before`]: {
						backgroundColor: backgroundContextPalette.shade,
					},
					[listItemLinkTextSelector]: {
						fontWeight: active ? 'bold' : 'normal',
					},
					'&:hover': {
						backgroundColor: backgroundContextPalette.shade,
						[`[${progressIndicatorItemRingDataAttr}]:before`]: {
							backgroundColor: backgroundContextPalette.shade,
						},
						[listItemLinkTextSelector]: packs.underline,
					},
				}}
				focus
				{...props}
			>
				<ProgressIndicatorItemIcon status={status} />
				<Stack
					{...{ [progressIndicatorItemTextContainerDataAttr]: '' }}
					as="span"
					flexDirection="column-reverse"
					flexGrow={1}
					gap={0}
					justifyContent="center"
					paddingY={0.75}
					fontFamily="body"
					fontWeight={active ? 'bold' : 'normal'}
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
}: {
	status: ProgressIndicatorItemStatus;
}) => {
	const { icon: Icon, iconColor } = statusMap[status];
	const ringWidth = tokens.borderWidth.md;
	const ringGap = 3;
	const ringInset = ringWidth + ringGap;
	return (
		<Flex as="span" flexDirection="column" alignItems="center">
			<ProgressIndicatorItemTimeline />
			<span
				{...{ [progressIndicatorItemRingDataAttr]: '' }}
				css={{
					position: 'relative',
					paddingLeft: ringInset,
					paddingRight: ringInset,
					...(status === 'doing' && {
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
					color={iconColor}
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

const statusMap = {
	blocked: {
		label: 'Cannot start yet',
		icon: ProgressBlockedIcon,
		iconColor: 'border',
	},
	doing: {
		label: 'In progress',
		icon: ProgressDoingIcon,
		iconColor: 'selected',
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
} as const;
