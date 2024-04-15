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
	CornerDownRightIcon,
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
	levelTwoItem?: {
		label: string;
	} & (LinkProps | ButtonHTMLAttributes<HTMLButtonElement>);
};

export type ProgressIndicatorItemStatus = keyof typeof statusMap;

export type ProgressIndicatorItemLinkProps = LinkProps & {
	/** Determines the background colour of the progress indicator item. */
	background?: ProgressIndicatorBackground;
	/** Determines what style the item displays as.
	 *
	 * `blocked` = This step is not yet available for the user to start.
	 *
	 * `doing` = **(deprecated)** This step has been started and the user is actively working on this step (Use `started` with `isActive: true` instead).
	 *
	 * `done` = This step is complete. The user has submitted valid data and it has been verified (where necessary).
	 *
	 * `error` = This step has an error that requires attention.
	 *
	 * `saved` = This step has valid saved data that can still be changed.
	 *
	 * `started` = This step has been started and still needs to be completed.
	 *
	 * `todo` = This step is available for the user to start.
	 */
	status: ProgressIndicatorItemStatus;
	/** Set this item as currently active. Only supported for the `blocked`, `started`, and `started` statuses */
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

export const activeProgressStatusAllowedList: Array<ProgressIndicatorItemStatus> =
	['blocked', 'doing', 'started'];

export const activeProgressStatusBlockedList: Array<ProgressIndicatorItemStatus> =
	['done', 'error', 'saved', 'todo'];
export const allProgressStatuses: Array<ProgressIndicatorItemStatus> = [
	...activeProgressStatusAllowedList,
	...activeProgressStatusBlockedList,
];

type ProgressIndicatorItemProps = PropsWithChildren<{
	as: ElementType;
	isActive: boolean;
	status: ProgressIndicatorItemStatus;
	background?: ProgressIndicatorBackground;
	levelTwoItem?: ProgressIndicatorItem['levelTwoItem'];
}>;

const ProgressIndicatorItem = ({
	as,
	background = 'body',
	children,
	isActive,
	levelTwoItem,
	status,
	...props
}: ProgressIndicatorItemProps) => {
	const { label: statusLabel } = statusMap[status];

	if (isActive && !activeProgressStatusAllowedList.includes(status)) {
		throw new Error(
			`The "${status}" status cannot be set to active. Please use one of the following status types instead: ${activeProgressStatusAllowedList.join(
				', '
			)}`
		);
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
			<Box
				as="span"
				aria-current={isActive || undefined} // TODO: Should this be 'step'? Also, I think this has some browser/screen-reader combo issues e.g. edge + NVDA and chrome/firefox/edge + JAWS (from A11y Slack)
				columnGap={0.5}
				css={{
					display: 'grid',
					gridTemplateColumns: 'min-content 1fr',
					gridTemplateRows: 'min-content 1fr',
					textDecoration: 'none',
					width: '100%',
					[`[${progressIndicatorItemRingDataAttr}]:before`]: {
						backgroundColor: backgroundColorMap[background],
					},
				}}
				focus
				{...props}
			>
				<ProgressIndicatorItemIcon status={status} isActive={isActive} />

				<Stack
					{...{ [progressIndicatorItemTextContainerDataAttr]: '' }}
					as={as}
					css={{
						textDecoration: 'none',
						'&:hover': {
							backgroundColor: hoverColorMap[background],
						},
						'&:hover span:not(:last-of-type)': {
							...packs.underline,
						},
					}}
					flexGrow={1}
					fontFamily="body"
					gap={0.25}
					justifyContent="center"
					paddingLeft={0.5}
					paddingY={1}
					{...(!levelTwoItem && { borderBottom: true, borderColor: 'muted' })}
				>
					<Text
						fontWeight={isActive ? 'bold' : 'normal'}
						{...{ [progressIndicatorItemTextDataAttr]: '' }}
					>
						{children}
					</Text>

					<Text
						color="muted"
						fontSize="xs"
						gridColumnStart={2}
						lineHeight="nospace"
					>
						{statusLabel}
					</Text>
				</Stack>

				{levelTwoItem && (
					<>
						<ProgressIndicatorItemTimeline />

						<Flex
							alignItems="center"
							as={as}
							borderBottom
							borderColor="muted"
							color="text"
							css={{
								textDecoration: 'none',
								'&:hover': {
									backgroundColor: hoverColorMap[background],
									...packs.underline,
								},
							}}
							gap={0.5}
							gridColumnStart={2}
							padding={0.5}
							paddingBottom={1}
						>
							<CornerDownRightIcon color="selected" />

							<Text color="inherit" fontSize="xs" fontWeight="bold">
								{levelTwoItem.label}
							</Text>
						</Flex>
					</>
				)}
			</Box>
		</Box>
	);
};

const ProgressIndicatorItemTimeline = () => (
	<span
		css={{
			backgroundColor: boxPalette.border,
			flex: 1,
			justifySelf: 'center',
			width: tokens.borderWidth.md,
		}}
		{...{ [progressIndicatorItemTimelineDataAttr]: '' }}
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
	const processedIconColor =
		isActive && iconColor === 'border' ? 'selected' : iconColor;

	return (
		<Flex
			alignItems="center"
			as="span"
			css={{
				gridColumnStart: 1,
				gridRowStart: 1,
				height: '100%',
			}}
			flexDirection="column"
		>
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

const statusMap = {
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
} as const;
