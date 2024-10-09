import { type ElementType, type PropsWithChildren } from 'react';
import { Box, backgroundColorMap } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { CornerDownRightIcon } from '../icon';
import { boxPalette, mapSpacing, packs, tokens } from '../core';
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

type ProgressIndicatorItemProps = PropsWithChildren<{
	as: ElementType;
	status: ProgressIndicatorItemStatus;
	background?: ProgressIndicatorBackground;
	isActive?: boolean;
	items?: ProgressIndicatorItemWithLevelTwoItems<{
		isActive: boolean;
	}>['items'];
}>;

const fallbackSubLevelItem = {
	isActive: false,
	label: '',
};

export const ProgressIndicatorItem = ({
	as,
	background = 'body',
	children,
	isActive,
	items,
	status,
	...props
}: ProgressIndicatorItemProps) => {
	const { label: statusLabel } = statusMap[status];

	if (process.env.NODE_ENV !== 'production' && status === 'doing') {
		console.warn(
			'ProgressIndicator: The "doing" status is deprecated. Use the "started" status with `activePath`.'
		);
	}

	const subLevelItem = isActive
		? items?.find((item) => item.isActive) || fallbackSubLevelItem
		: fallbackSubLevelItem;
	const {
		label: subLevelItemLabel,
		isActive: _subLevelItemIsActive,
		...subLevelItemRestProps
	} = subLevelItem;

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
					textDecoration: 'none',
					width: '100%',
					[`[${progressIndicatorItemRingDataAttr}]::before`]: {
						backgroundColor: backgroundColorMap[background],
					},
				}}
				focusRingFor="keyboard"
			>
				<ProgressIndicatorItemIcon status={status} isActive={isActive} />

				<Stack
					{...{ [progressIndicatorItemTextContainerDataAttr]: '' }}
					aria-current={isActive || undefined}
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

					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{statusLabel}
					</Text>
				</Stack>

				{subLevelItemLabel && (
					<>
						<ProgressIndicatorItemTimeline />

						<Box as="ul">
							<Box as="li" css={{ position: 'relative' }}>
								<Flex
									{...subLevelItemRestProps}
									alignItems="center"
									aria-current={true}
									as={as}
									borderBottom
									borderColor="muted"
									color="text"
									css={{
										textDecoration: 'none',
										'&:hover': {
											backgroundColor: hoverColorMap[background],
											...packs.underline,

											// Extra highlighted space on hover for visual balance (not when focused which avoids hover styles covering the focus ring)
											':not(:focus-visible)::before': {
												backgroundColor: hoverColorMap[background],
												content: '""',
												height: mapSpacing(0.5),
												left: 0,
												position: 'absolute',
												top: `-${mapSpacing(0.5)}`,
												width: '100%',
											},
										},
									}}
									gap={0.5}
									padding={0.5}
									paddingBottom={1}
								>
									<CornerDownRightIcon color="selected" />

									<Text color="inherit" fontSize="xs" fontWeight="bold">
										{subLevelItemLabel}
									</Text>
								</Flex>
							</Box>
						</Box>
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
			// See https://www.w3.org/TR/CSS21/ui.html#system-colors
			'@media (forced-colors: active)': {
				backgroundColor: 'GrayText',
			},
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
		<Flex alignItems="center" as="span" flexDirection="column">
			<ProgressIndicatorItemTimeline />

			<span
				{...{ [progressIndicatorItemRingDataAttr]: '' }}
				css={{
					position: 'relative',
					paddingLeft: ringInset,
					paddingRight: ringInset,
					...(isActive && {
						'::before': {
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
