import { Box, Flex } from '../../box/src';
import { boxPalette, packs } from '../../core/src';
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
