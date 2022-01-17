import { themeVars, mapSpacing, Spacing } from '@ag.ds-next/core';

import { ICONS } from './icons';

export type IconType = keyof typeof ICONS;

const colors = {
	// foreground: themeVars.colors.text.default,
	// link: themeVars.colors.action,
};

export const Icon = ({
	icon,
	size = 1,
	color,
}: {
	icon: IconType;
	size: Spacing;
	color?: keyof typeof colors;
}) => {
	return (
		<svg
			width={mapSpacing(size)}
			height={mapSpacing(size)}
			viewBox="0 0 24 24"
			// fill={color ? colors[color] : 'currentColor'}
			fill="#333"
			fillRule="evenodd"
			clipRule="evenodd"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d={ICONS[icon]} />
		</svg>
	);
};
