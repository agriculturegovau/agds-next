import { HTMLAttributes } from 'react';
import { Flex } from '../flex';
import { boxPalette, tokens } from '../core';
import { getInitialsFromName } from './utils';

type NativeDivProps = HTMLAttributes<HTMLDivElement>;

export type AvatarProps = {
	/** The name of the person represented by the avatar. */
	name: string;
	/** The colour tone to apply. */
	tone?: AvatarTone;
	/** The size to apply. */
	size?: AvatarSize;
	/** If true, the element will be hidden from assistive technologies. */
	'aria-hidden'?: NativeDivProps['aria-hidden'];
	/** Describes the element to assistive technologies. */
	'aria-label'?: NativeDivProps['aria-label'];
};

export function Avatar({
	name,
	tone: toneProp = 'neutral',
	size: sizeProp = 'md',
	'aria-hidden': ariaHidden,
	'aria-label': ariaLabel,
}: AvatarProps) {
	const initials = getInitialsFromName(name);
	const color = TONE_PROP[toneProp];
	const { size, fontSize } = SIZE_MAP[sizeProp];
	return (
		<Flex
			alignItems="center"
			aria-hidden={ariaHidden}
			aria-label={ariaLabel}
			as="span"
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
			flexShrink={0}
			fontSize={fontSize}
			fontWeight="bold"
			justifyContent="center"
		>
			{initials}
		</Flex>
	);
}

const TONE_PROP = {
	neutral: boxPalette.foregroundMuted,
	action: boxPalette.foregroundAction,
};

type AvatarTone = keyof typeof TONE_PROP;

const SIZE_MAP = {
	sm: { fontSize: 'xs', size: 2 },
	md: { fontSize: 'sm', size: 2.5 },
	lg: { fontSize: 'md', size: 3 },
	xl: { fontSize: 'lg', size: 4 },
	xxl: { fontSize: 'xl', size: 4.5 },
	xxxl: { fontSize: 'xl', size: 5 },
} as const;

type AvatarSize = keyof typeof SIZE_MAP;
