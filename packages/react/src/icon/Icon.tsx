import { ReactNode, SVGAttributes } from 'react';
import { boxPalette, mapSpacing } from '../core';
import { foregroundColorMap } from '../box';

export const iconColors = {
	...foregroundColorMap,
	border: boxPalette.border,
};

type IconColor = keyof typeof iconColors;

const iconSizes = {
	sm: 1,
	md: 1.5,
	lg: 2,
} as const;

type IconSize = keyof typeof iconSizes;

type NativeSvgProps = SVGAttributes<SVGSVGElement>;

export type IconProps = {
	'aria-hidden'?: NativeSvgProps['aria-hidden'];
	'aria-label'?: NativeSvgProps['aria-label'];
	className?: string;
	color?: IconColor;
	size?: IconSize;
	style?: NativeSvgProps['style'];
	weight?: 'regular' | 'bold';
};

export const createIcon = (children: ReactNode, name: string) => {
	const Icon = ({
		'aria-hidden': ariaHidden = 'true',
		'aria-label': ariaLabel,
		className,
		size = 'md',
		color,
		weight = 'regular',
		style,
	}: IconProps) => {
		const resolvedSize = mapSpacing(iconSizes[size]);
		// Focusable is the opposite of `aria-hidden`
		const focusable = [true, 'true'].includes(ariaHidden) ? 'false' : 'true';
		return (
			<svg
				// Note the width and height attribute is a fallback for older browsers. This may not be required and could potentially be removed.
				width="24"
				height="24"
				viewBox="0 0 24 24"
				clipRule="evenodd"
				xmlns="http://www.w3.org/2000/svg"
				css={{
					width: resolvedSize,
					height: resolvedSize,
					fill: 'none',
					color: color ? iconColors[color] : 'currentColor',
					stroke: 'currentColor',
					strokeLinejoin: 'round',
					strokeLinecap: 'round',
					strokeWidth: weight === 'bold' ? 3 : 2,
				}}
				role="img"
				style={style}
				className={className}
				focusable={focusable}
				aria-hidden={ariaHidden}
				aria-label={ariaLabel}
			>
				{children}
			</svg>
		);
	};

	Icon.displayName = name;

	return Icon;
};
