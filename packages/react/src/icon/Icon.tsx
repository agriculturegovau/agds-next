import { ReactNode, SVGAttributes } from 'react';
import { foregroundColorMap } from '../box';
import {
	boxPalette,
	mq,
	tokens,
	type mapResponsiveProp,
	type ResponsiveProp,
} from '../core';

export const iconColors = {
	...foregroundColorMap,
	border: boxPalette.border,
};

type IconColor = keyof typeof iconColors;

export const iconSizes = {
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

export const scaleIconOnHover = (size: IconSize = 'md') => {
	return {
		transition: `transform ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
		transform: `scale(${(iconSizes[size] + 2 / 16) / iconSizes[size]})`,
	};
};

export type IconProps = {
	'aria-hidden'?: NativeSvgProps['aria-hidden'];
	'aria-label'?: NativeSvgProps['aria-label'];
	className?: string;
	color?: IconColor;
	id?: NativeSvgProps['id'];
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
		id,
		size = 'md',
		style,
		weight = 'regular',
	}: IconProps) => {
		const resolvedSize = mapResponsiveProp(size, (s) => `${iconSizes[s]}rem`);
		const resolvedWeight = mapResponsiveProp(
			size,
			(s) => iconWeights[weight][s]
		);
		return (
			<svg
				aria-hidden={ariaHidden}
				aria-label={ariaLabel}
				className={className}
				clipRule="evenodd"
				css={mq({
					color: color ? iconColors[color] : 'currentcolor',
					fill: 'none',
					flexShrink: 0,
					height: resolvedSize,
					stroke: 'currentcolor',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeWidth: resolvedWeight,
					width: resolvedSize,
				})}
				fillRule="evenodd"
				focusable="false"
				// Note the width and height attribute is a fallback for older browsers.
				// This may not be required and could potentially be removed.
				height="24"
				id={id}
				role="img"
				style={style}
				viewBox="0 0 24 24"
				width="24"
				xmlns="http://www.w3.org/2000/svg"
			>
				{children}
			</svg>
		);
	};

	Icon.displayName = name;

	return Icon;
};
