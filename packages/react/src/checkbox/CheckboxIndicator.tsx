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
			as="span"
			justifyContent="center"
			alignItems="center"
			width={width}
			height={height}
			flexShrink={0}
			css={{
				borderWidth,
				borderStyle: 'solid',
				borderColor: boxPalette.border,
				backgroundColor: boxPalette.backgroundBody,
				color: boxPalette.foregroundText,

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
			rounded
		>
			{indeterminate ? (
				<MinusIcon size={size} weight="bold" />
			) : (
				<CheckIcon size={size} weight="bold" />
			)}
		</Flex>
	);
};
