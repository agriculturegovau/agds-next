import { HTMLAttributes, PropsWithChildren } from 'react';
import { Box } from '../box';
import { boxPalette, mapSpacing } from '../core';
import { Divider } from '../divider';

export type DividerWithTextProps = PropsWithChildren<{
	// /** If false, the first divider element will not be hidden from assistive technologies. */
	'aria-hidden'?: HTMLAttributes<HTMLHRElement>['aria-hidden'];
	/** Sets the horizontal alignment of the label on the divider. */
	textAlign?: 'left' | 'center';
}>;

const minimumDividerWidth = mapSpacing(1.5);
const defaultDividerWidth = `minmax(${minimumDividerWidth}, 1fr)`;
const maxTextWidth = '40rem'; // 640 px

export function DividerWithText(props: DividerWithTextProps) {
	const {
		'aria-hidden': ariaHidden = true,
		children,
		textAlign = 'center',
	} = props;

	const leftDividerWidth =
		textAlign === 'left' ? minimumDividerWidth : defaultDividerWidth;
	return (
		<Box
			css={{
				alignItems: 'center',
				display: 'grid',
				gap: mapSpacing(1),
				gridTemplateColumns: `${leftDividerWidth} fit-content(${maxTextWidth}) ${defaultDividerWidth}`,
			}}
		>
			<Divider aria-hidden={ariaHidden} />
			<Box
				css={{
					color: boxPalette.foregroundMuted,
					textAlign: textAlign,
				}}
			>
				{children}
			</Box>
			<Divider />
		</Box>
	);
}
