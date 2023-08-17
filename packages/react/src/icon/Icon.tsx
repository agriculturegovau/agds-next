import { ReactNode, SVGAttributes } from 'react';
import { boxPalette, ResponsiveProp, mq, mapResponsiveProp } from '../core';
import { foregroundColorMap } from '../box';

export const iconColors = {
	...foregroundColorMap,
	border: boxPalette.border,
};

type IconColor = keyof typeof iconColors;

const iconSizes = {
	sm: 1, // 16px
	md: 1.5, // 24px
	lg: 2, // 32px
	xl: 2.5, // 40px
} as const;

type IconSize = keyof typeof iconSizes;

// enables a visible difference between regular
// and bold icons for small sizes.
const iconWeights = {
	regular: {
		sm: 2,
		md: 2,
		lg: 2,
		xl: 2,
	},
	bold: {
		sm: 4,
		md: 3,
		lg: 3,
		xl: 3,
	},
};

type IconWeight = keyof typeof iconWeights;

type NativeSvgProps = SVGAttributes<SVGSVGElement>;

export type IconProps = {
	'aria-hidden'?: NativeSvgProps['aria-hidden'];
	'aria-label'?: NativeSvgProps['aria-label'];
	className?: string;
	color?: IconColor;
	size?: ResponsiveProp<IconSize>;
	style?: NativeSvgProps['style'];
	weight?: IconWeight;
};

export const createIcon = (children: ReactNode, name: string) => {
	const Icon = ({
		'aria-hidden': ariaHidden = 'true',
		'aria-label': ariaLabel,
		className,
		color,
		size = 'md',
		style,
		weight = 'regular',
	}: IconProps) => {
		const resolvedSize = mapResponsiveProp(size, (s) => `${iconSizes[s]}rem`);
		const resolvedWeight = mapResponsiveProp(
			size,
			(s) => iconWeights[weight][s]
		);
		// Focusable is the opposite of `aria-hidden`
		const focusable = [true, 'true'].includes(ariaHidden) ? 'false' : 'true';
		return (
			<svg
				// Note the width and height attribute is a fallback for older browsers.
				// This may not be required and could potentially be removed.
				width="24"
				height="24"
				viewBox="0 0 24 24"
				clipRule="evenodd"
				xmlns="http://www.w3.org/2000/svg"
				css={mq({
					width: resolvedSize,
					height: resolvedSize,
					fill: 'none',
					color: color ? iconColors[color] : 'currentcolor',
					stroke: 'currentcolor',
					strokeLinejoin: 'round',
					strokeLinecap: 'round',
					strokeWidth: resolvedWeight,
				})}
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
