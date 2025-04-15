import { Box } from '../box';
import { Flex } from '../flex';
import { boxPalette, packs } from '../core';
import { RadioSize } from './utils';

export type RadioIndicatorProps = {
	disabled?: boolean;
	invalid?: boolean;
	size: RadioSize;
};

export function RadioIndicator({
	disabled,
	invalid,
	size,
}: RadioIndicatorProps) {
	const { width, height, borderWidth } = packs.control[size];
	return (
		<Flex
			alignItems="center"
			as="span"
			css={{
				backgroundColor: boxPalette.backgroundBody,
				borderColor: boxPalette.border,
				borderRadius: '100%',
				borderStyle: 'solid',
				borderWidth,
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
			<Box
				as="span"
				css={{
					borderRadius: '100%',
					backgroundColor: boxPalette.foregroundText,
					'@media (forced-colors: active)': {
						backgroundColor: 'MenuText',
					},

					...(disabled && {
						backgroundColor: boxPalette.borderMuted,
						'@media (forced-colors: active)': {
							backgroundColor: 'GrayText',
						},
					}),
				}}
				height="calc(100% - 0.5rem)"
				highContrastOutline
				width="calc(100% - 0.5rem)"
			/>
		</Flex>
	);
}
