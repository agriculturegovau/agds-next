import { HTMLAttributes } from 'react';
import { Box } from '../box';
import { boxPalette, type FontSize, type FontWeight } from '../core';
import { Divider } from '../divider';

export type DividerWithTextProps = {
	/** If false, the first divider element will not be hidden from assistive technologies. */
	'aria-hidden'?: HTMLAttributes<HTMLHRElement>['aria-hidden'];
	/** Element type for the label. */
	as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
	/** Sets the font-size of the label. */
	fontSize?: FontSize; // multiple font sizes? `xs` and `sm`
	/** Sets the font-weight of the label. */
	fontWeight?: FontWeight;
	/** Text label placed between dividers. */
	label: string;
	/** Sets the horizontal alignment of the label on the divider. */
	labelAlign: 'left' | 'center';
};

const minimumDividerWidth = '1.5rem';
const defaultDividerWidth = `minmax(${minimumDividerWidth}, 1fr)`;
const maxWidthText = '40rem'; // 640 px

export function DividerWithText(props: DividerWithTextProps) {
	const {
		'aria-hidden': ariaHidden = true,
		as = 'p',
		fontWeight = 'normal',
		fontSize,
		label,
		labelAlign,
	} = props;

	const leftDividerWidth =
		labelAlign === 'left' ? minimumDividerWidth : defaultDividerWidth;
	return (
		<Box
			css={{
				alignItems: 'center',
				display: 'grid',
				gap: '1rem',
				gridTemplateColumns: `${leftDividerWidth} fit-content(${maxWidthText}) ${defaultDividerWidth}`,
			}}
		>
			<Divider aria-hidden={ariaHidden} />
			<Box
				as={as}
				css={{ textAlign: labelAlign, color: boxPalette.foregroundMuted }}
				fontSize={fontSize}
				fontWeight={fontWeight}
			>
				{label}
			</Box>
			<Divider />
		</Box>
	);
}
