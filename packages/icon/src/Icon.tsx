import {
	boxPalette,
	mapSpacing,
	mapResponsiveProp,
	mq,
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

const iconSizes = {
	sm: 1,
	md: 1.5,
} as const;

type IconSize = keyof typeof iconSizes;

export type IconProps = SvgProps & {
	size?: IconSize;
	color?: IconColor;
	weight?: 'regular' | 'bold';
};

export const createIcon = (children: ReactNode, name: string) => {
	const Icon = ({
		className,
		size = 'md',
		color,
		weight = 'regular',
		style,
	}: IconProps) => {
		const resolvedSize = mapSpacing(iconSizes[size]);
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
					strokeWidth: weight === 'bold' ? 3 : 2,
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
