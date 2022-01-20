import { themeValues, mapSpacing, Spacing } from '@ag.ds-next/core';
import { DetailedHTMLProps, SVGAttributes } from 'react';

import { ICONS } from './icons';

export type IconNameType = keyof typeof ICONS;

type SvgProps = Omit<
	DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement>,
	'width' | 'height' | 'viewBox' | 'fill' | 'fillRule' | 'clipRule' | 'xmlns'
>;

const colors = {
	...themeValues.foreground,
	border: themeValues.border,
};

export type IconProps = SvgProps & {
	icon: IconNameType;
	size: Spacing;
	color?: keyof typeof colors;
};

export const Icon = ({ icon, size = 1, color, ...props }: IconProps) => (
	<svg
		aria-hidden="true"
		width={mapSpacing(size)}
		height={mapSpacing(size)}
		viewBox="0 0 24 24"
		fill={color ? colors[color] : 'currentColor'}
		fillRule="evenodd"
		clipRule="evenodd"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d={ICONS[icon]} />
	</svg>
);
