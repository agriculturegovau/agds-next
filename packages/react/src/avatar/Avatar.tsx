import { HTMLAttributes } from 'react';
import { Flex } from '../box';
import { boxPalette, tokens } from '../core';
import { getInitialsFromName } from './utils';

type NativeDivProps = HTMLAttributes<HTMLDivElement>;

export type AvatarProps = {
	name: string;
	color?: AvatarColor;
	size?: AvatarSize;
	'aria-hidden'?: NativeDivProps['aria-hidden'];
	'aria-label'?: NativeDivProps['aria-label'];
};

export function Avatar({
	name,
	color: colorProp = 'neutral',
	size: sizeProp = 'md',
	'aria-hidden': ariaHidden = false,
	'aria-label': ariaLabel,
}: AvatarProps) {
	const initials = getInitialsFromName(name);
	const color = COLOR_MAP[colorProp];
	const { size, fontSize } = SIZE_MAP[sizeProp];
	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			css={{
				textDecoration: 'none',
				height: `${size}rem`,
				width: `${size}rem`,
				borderRadius: '50%',
				borderStyle: 'solid',
				borderWidth: tokens.borderWidth.sm,
				borderColor: color,
				color: color,
			}}
			fontSize={fontSize}
			fontWeight="bold"
			aria-hidden={ariaHidden}
			aria-label={ariaLabel}
		>
			{initials}
		</Flex>
	);
}

const COLOR_MAP = {
	neutral: boxPalette.foregroundMuted,
	action: boxPalette.foregroundAction,
};

type AvatarColor = keyof typeof COLOR_MAP;

const SIZE_MAP = {
	sm: { fontSize: 'xs', size: 2 },
	md: { fontSize: 'sm', size: 2.5 },
	lg: { fontSize: 'md', size: 3 },
	xl: { fontSize: 'lg', size: 4 },
	xxl: { fontSize: 'xl', size: 4.5 },
	xxxl: { fontSize: 'xl', size: 5 },
} as const;

type AvatarSize = keyof typeof SIZE_MAP;
