import { Flex } from '../flex';
import { boxPalette, mapSpacing, packs, Spacing } from '../core';
import { CheckboxSize } from './utils';

export const iconSize = {
	sm: 1,
	md: 1.5,
} as const;

export type CheckboxIndicatorProps = {
	disabled?: boolean;
	invalid?: boolean;
	size: CheckboxSize;
};

export const CheckboxIndicator = ({
	disabled,
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
				}),

				...(invalid && {
					borderColor: boxPalette.systemError,
					backgroundColor: boxPalette.systemErrorMuted,
				}),
			}}
			rounded
		>
			<CheckboxIcon size={iconSize[size]} />
		</Flex>
	);
};

const CheckboxIcon = ({ size }: { size: Spacing }) => (
	<svg
		aria-hidden="true"
		viewBox="0 0 24 24"
		clipRule="evenodd"
		xmlns="http://www.w3.org/2000/svg"
		focusable="false"
		css={{
			width: mapSpacing(size),
			height: mapSpacing(size),
			color: 'currentcolor',
			fill: 'none',
			stroke: 'currentColor',
		}}
		role="img"
	>
		<path
			d="M3 13.4286L8.4 19L21 6"
			strokeWidth={3}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
