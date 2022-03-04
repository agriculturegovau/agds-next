import {
	boxPalette,
	mapSpacing,
	mapResponsiveProp,
	mq,
	Spacing,
} from '@ag.ds-next/core';
import { foregroundColorMap } from '@ag.ds-next/box';
import { ReactNode, SVGAttributes } from 'react';

type SvgProps = Omit<
	SVGAttributes<SVGSVGElement>,
	| 'width'
	| 'height'
	| 'viewBox'
	| 'fill'
	| 'fillRule'
	| 'clipRule'
	| 'xmlns'
	| 'color'
>;

export const iconColors = {
	...foregroundColorMap,
	border: boxPalette.border,
};
type IconColor = keyof typeof iconColors;

export type IconProps = SvgProps & {
	size?: Spacing;
	color?: IconColor;
	weight?: 'regular' | 'bold';
};

export const createIcon = (children: ReactNode, name: string) => {
	const Icon = ({
		className,
		size = 1,
		color,
		weight = 'regular',
		style,
	}: IconProps) => {
		const resolvedSize = mapSpacing(size);

		return (
			<svg
				aria-hidden="true"
				width={resolvedSize}
				height={resolvedSize}
				viewBox="0 0 24 24"
				clipRule="evenodd"
				xmlns="http://www.w3.org/2000/svg"
				focusable="false"
				css={mq({
					color: color
						? mapResponsiveProp(color, (t) => iconColors[t])
						: undefined,
					fill: 'none',
					stroke: 'currentColor',
					strokeLinejoin: 'round',
					strokeLinecap: 'round',
					strokeWidth: weight === 'bold' ? '12.5%' : '8%',
				})}
				role="img"
				style={style}
				className={className}
			>
				{children}
			</svg>
		);
	};

	Icon.displayName = name;

	return Icon;
};
