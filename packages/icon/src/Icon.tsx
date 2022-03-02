import { boxPalette, mapSpacing, mq, Spacing } from '@ag.ds-next/core';
import { foregroundColorMap } from '@ag.ds-next/box';
import { FC, SVGAttributes } from 'react';

import { ICONS } from './icons_old';

export type IconNameType = keyof typeof ICONS;

type SvgProps = Omit<
	SVGAttributes<SVGSVGElement>,
	'width' | 'height' | 'viewBox' | 'fill' | 'fillRule' | 'clipRule' | 'xmlns'
>;

const colors = {
	...foregroundColorMap,
	border: boxPalette.border,
};

export type IconProps = SvgProps & {
	icon: IconNameType;
	size?: Spacing;
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

type IconProps2 = {
	size?: Spacing;
	color?: keyof typeof colors;
	weight?: 'regular' | 'bold';
};

export const createIcon = (children: React.ReactNode, name: string) => {
	const Icon: FC<IconProps2> = ({ size = 1, weight = 'regular' }) => {
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
					fill: 'none',
					stroke: 'currentColor',
					strokeLinejoin: 'round',
					strokeLinecap: 'round',
					strokeWidth: weight === 'bold' ? 3 : 2,
				})}
				role="img"
			>
				{children}
			</svg>
		);
	};

	Icon.displayName = name;

	return Icon;
};
