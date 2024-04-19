import { ElementType, PropsWithChildren, useEffect } from 'react';
import { Box, backgroundColorMap } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { CornerDownRightIcon } from '../icon';
import { boxPalette, packs, tokens } from '../core';
import {
	hoverColorMap,
	ProgressIndicatorBackground,
	progressIndicatorItemRingDataAttr,
	ProgressIndicatorItemStatus,
	progressIndicatorItemTextContainerDataAttr,
	progressIndicatorItemTextDataAttr,
	progressIndicatorItemTimelineDataAttr,
	ProgressIndicatorItemWithLevelTwoItems,
	statusMap,
} from './utils';
import { ProgressIndicatorProps } from './ProgressIndicator';

type ProgressIndicatorItemProps = PropsWithChildren<{
	status: ProgressIndicatorItemStatus;
	activePath?: ProgressIndicatorProps['activePath'];
	as: ElementType;
	background?: ProgressIndicatorBackground;
	isActive?: boolean;
	items?: ProgressIndicatorItemWithLevelTwoItems<{
		isActive: boolean;
	}>['items'];
}>;

export const ProgressIndicatorItem = ({
	activePath,
	as,
	background = 'body',
	children,
	isActive,
	items,
	status,
	...props
}: ProgressIndicatorItemProps) => {
	const { label: statusLabel } = statusMap[status];

	useEffect(() => {
		if (status === 'doing') {
			console.warn(
				'The "doing" status is deprecated. Use the "started" status with `activePath`.'
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
			>
				<ProgressIndicatorItemIcon status={status} isActive={isActive} />

				<Stack
					{...{ [progressIndicatorItemTextContainerDataAttr]: '' }}
					aria-current={(isActive && !items) || undefined} // TODO: Should this be 'step'? Also, I think this has some browser/screen-reader combo issues e.g. edge + NVDA and chrome/firefox/edge + JAWS (from A11y Slack)
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
					paddingX={0.5}
					paddingY={1}
					{...(!items && { borderBottom: true, borderColor: 'muted' })}
					{...props}
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

				{isActive && items?.some((item) => item.isActive) && (
					<>
						<ProgressIndicatorItemTimeline />

						<Flex
							alignItems="center"
							aria-current={true} // TODO: should this be "step"?
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
								{items.find((item) => item.isActive)?.label}
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
	isActive?: boolean;
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
