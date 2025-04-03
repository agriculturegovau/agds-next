import { HTMLAttributes, PropsWithChildren } from 'react';
import { boxPalette, mapSpacing } from '../core';
import { Divider } from '../divider';

export type DividerWithTextProps = PropsWithChildren<{
	/** If true, the <hr> element only will be hidden from assistive technologies. Children elements will not inherit this property. */
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
		<div
			css={{
				alignItems: 'center',
				display: 'grid',
				gap: mapSpacing(1),
				gridTemplateColumns: `${leftDividerWidth} fit-content(${maxTextWidth}) ${defaultDividerWidth}`,
			}}
		>
			<Divider aria-hidden={ariaHidden} />
			<div
				css={{
					'&& > * ': {
						// double ampersand to force color and text-align
						color: boxPalette.foregroundMuted,
						display: 'block',
						textAlign: textAlign,
					},
				}}
			>
				{children}
			</div>
			<Divider />
		</div>
	);
}
