import { Box, Flex } from '@ag.ds-next/box';
import { boxPalette, packs } from '@ag.ds-next/core';
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
		<Flex
			justifyContent="center"
			alignItems="center"
			width={width}
			height={height}
			css={{
				borderWidth,
				borderRadius: '100%',
				borderStyle: 'solid',
				borderColor: boxPalette.borderInput,
				opacity: disabled ? 0.3 : undefined,
				...(invalid
					? {
							borderColor: boxPalette.systemError,
							backgroundColor: boxPalette.systemErrorMuted,
					  }
					: valid
					? {
							borderColor: boxPalette.systemSuccess,
							backgroundColor: boxPalette.systemSuccessMuted,
					  }
					: undefined),
			}}
			background="body"
			color="text"
			rounded
		>
			<Box
				width="calc(100% - 0.5rem)"
				height="calc(100% - 0.5rem)"
				css={{
					display: 'none',
					borderRadius: '100%',
					background: boxPalette.foregroundText,
				}}
			/>
		</Flex>
	);
};
