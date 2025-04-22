import { Flex } from '../flex';
import { boxPalette, packs } from '../core';
import { CheckIcon, MinusIcon } from '../icon';
import { CheckboxSize } from './utils';

export type CheckboxIndicatorProps = {
	disabled?: boolean;
	indeterminate?: boolean;
	invalid?: boolean;
	size: CheckboxSize;
};

export const CheckboxIndicator = ({
	disabled,
	indeterminate,
	invalid,
	size,
}: CheckboxIndicatorProps) => {
	const { width, height, borderWidth } = packs.control[size];
	return (
		<Flex
			alignItems="center"
			as="span"
			css={{
				backgroundColor: boxPalette.backgroundBody,
				borderColor: boxPalette.border,
				borderStyle: 'solid',
				borderWidth,
				color: boxPalette.foregroundText,
				inset: 0,
				position: 'absolute',

				...(disabled && {
					color: boxPalette.borderMuted,
					borderColor: boxPalette.borderMuted,
					backgroundColor: boxPalette.backgroundShade,
					// See https://www.w3.org/TR/CSS21/ui.html#system-colors
					'@media (forced-colors: active)': {
						borderColor: 'GrayText',
						color: 'GrayText',
					},
				}),

				...(invalid && {
					borderColor: boxPalette.systemError,
					backgroundColor: boxPalette.systemErrorMuted,
				}),
			}}
			flexShrink={0}
			height={height}
			justifyContent="center"
			rounded
			width={width}
		>
			{indeterminate ? (
				<MinusIcon size={size} weight="bold" />
			) : (
				<CheckIcon size={size} weight="bold" />
			)}
		</Flex>
	);
};
