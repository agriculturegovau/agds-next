import { Box, Flex } from '@ag.ds-next/box';
import {
	boxPalette,
	globalPalette,
	mapSpacing,
	packs,
	Spacing,
} from '@ag.ds-next/core';
import { ControlSize, iconSize } from './utils';

export type CheckboxIndicatorProps = {
	disabled?: boolean;
	invalid?: boolean;
	size: ControlSize;
	valid?: boolean;
};

export const CheckboxIndicator = ({
	disabled,
	invalid,
	size,
	valid,
}: CheckboxIndicatorProps) => {
	const { width, height, borderWidth } = packs.control[size];
	return (
		<Box
			width={width}
			height={height}
			style={{
				borderWidth,
				borderStyle: 'solid',
				borderColor: 'transparent',
				opacity: disabled ? 0.3 : undefined,
			}}
			rounded
		>
			<Flex
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="100%"
				css={{
					borderWidth,
					borderStyle: 'solid',
					borderColor: boxPalette.border,
					...(invalid
						? { borderColor: globalPalette.error }
						: valid
						? { borderColor: globalPalette.success }
						: undefined),
				}}
				background="body"
				color="text"
				rounded
			>
				<CheckboxIcon size={iconSize[size]} css={{ display: 'none' }} />
			</Flex>
		</Box>
	);
};

const CheckboxIcon = ({
	className,
	size,
}: {
	className?: string;
	size: Spacing;
}) => (
	<svg
		aria-hidden="true"
		width={mapSpacing(size)}
		height={mapSpacing(size)}
		viewBox="0 0 24 24"
		fill="currentColor"
		fillRule="evenodd"
		clipRule="evenodd"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path d="M21.35 8.15C21.55 7.95 21.55 7.65 21.35 7.45L19.05 5.15C18.85 4.95 18.55 4.95 18.35 5.15L9.75 13.75L6.15 10.15C5.95 9.95 5.65 9.95 5.45 10.15L3.15 12.45C2.95 12.65 2.95 12.95 3.15 13.15L9.45 19.45C9.65 19.65 9.95 19.65 10.15 19.45L21.35 8.15V8.15Z" />
	</svg>
);
