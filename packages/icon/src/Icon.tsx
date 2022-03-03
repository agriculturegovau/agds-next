import {
	boxPalette,
	mapSpacing,
	mapResponsiveProp,
	mq,
	Spacing,
} from '@ag.ds-next/core';
import { Box, foregroundColorMap } from '@ag.ds-next/box';
import { FC, SVGAttributes } from 'react';

type SvgProps = Omit<
	SVGAttributes<SVGSVGElement>,
	'width' | 'height' | 'viewBox' | 'fill' | 'fillRule' | 'clipRule' | 'xmlns'
>;

const colors = {
	...foregroundColorMap,
	border: boxPalette.border,
};

export type IconProps = SvgProps & {
	size?: Spacing;
	color?: keyof typeof colors;
	weight?: 'regular' | 'bold';
};

export const createIcon = (children: React.ReactNode, name: string) => {
	const Icon: FC<IconProps> = ({
		size = 1,
		color,
		weight = 'regular',
		...props
	}) => {
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
						? mapResponsiveProp(color, (t) => foregroundColorMap[t])
						: undefined,
					fill: 'none',
					stroke: 'currentColor',
					strokeLinejoin: 'round',
					strokeLinecap: 'round',
					strokeWidth: weight === 'bold' ? 3 : 2,
				})}
				role="img"
				{...props}
			>
				{children}
			</svg>
		);
	};

	Icon.displayName = name;

	return Icon;
};
