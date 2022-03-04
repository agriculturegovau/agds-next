import { Box, Flex } from '@ag.ds-next/box';
import { boxPalette, globalPalette, packs, tokens } from '@ag.ds-next/core';
import { ControlSize } from './utils';

export type RadioIndicatorProps = {
	disabled?: boolean;
	invalid?: boolean;
	size: ControlSize;
	valid?: boolean;
};

export const RadioIndicator = ({
	disabled,
	invalid,
	size,
	valid,
}: RadioIndicatorProps) => {
	const { width, height, borderWidth } = packs.control[size];
	return (
		<Box
			width={width}
			height={height}
			border
			borderWidth="lg"
			style={{
				borderColor: 'transparent',
				borderRadius: '100%',
				opacity: disabled ? 0.3 : undefined,
			}}
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
					borderRadius: '100%',
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
				<Box
					width="100%"
					height="100%"
					css={{
						display: 'none',
						borderWidth: tokens.borderWidth.lg,
						borderStyle: 'solid',
						borderColor: boxPalette.backgroundBody,
						borderRadius: '100%',
						background: boxPalette.foregroundText,
					}}
				/>
			</Flex>
		</Box>
	);
};
