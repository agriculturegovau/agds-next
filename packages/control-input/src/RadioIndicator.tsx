import { Box, Flex } from '@ag.ds-next/box';
import { boxPalette, packs } from '@ag.ds-next/core';
import { ControlSize } from './utils';

export type RadioIndicatorProps = {
	disabled?: boolean;
	invalid?: boolean;
	size: ControlSize;
};

export const RadioIndicator = ({
	disabled,
	invalid,
	size,
}: RadioIndicatorProps) => {
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
				borderRadius: '100%',
				borderStyle: 'solid',
				borderColor: boxPalette.border,
				opacity: disabled ? 0.3 : undefined,
				...(invalid && {
					borderColor: boxPalette.systemError,
					backgroundColor: boxPalette.systemErrorMuted,
				}),
			}}
			background="body"
			color="text"
			rounded
		>
			<Box
				as="span"
				width="calc(100% - 0.5rem)"
				height="calc(100% - 0.5rem)"
				highContrastOutline
				css={{
					display: 'none',
					borderRadius: '100%',
					background: boxPalette.foregroundText,
				}}
			/>
		</Flex>
	);
};
