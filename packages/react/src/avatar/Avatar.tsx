import { HTMLAttributes } from 'react';
import { Flex } from '@ag.ds-next/react/box';
import { boxPalette } from '@ag.ds-next/react/core';
import { getInitialsFromName } from './getInitialsFromName';

const colorMap = {
	action: boxPalette.foregroundAction,
	neutral: boxPalette.foregroundMuted,
};

const sizeMap = {
	sm: { fontSize: 'xs', objectSize: 2 },
	md: { fontSize: 'sm', objectSize: 2.5 },
	lg: { fontSize: 'md', objectSize: 3 },
	xl: { fontSize: 'lg', objectSize: 4 },
	xxl: { fontSize: 'xl', objectSize: 4.5 },
	xxxl: { fontSize: 'xl', objectSize: 5 },
} as const;

export type AvatarProps = {
	name: string;
	color?: keyof typeof colorMap;
	size?: keyof typeof sizeMap;
	'aria-hidden'?: HTMLAttributes<HTMLDivElement>['aria-hidden'];
	'aria-label'?: HTMLAttributes<HTMLDivElement>['aria-label'];
	role?: HTMLAttributes<HTMLDivElement>['role'];
};

export function Avatar({
	name,
	color: _color = 'neutral',
	size = 'md',
	'aria-hidden': ariaHidden = false,
	'aria-label': ariaLabel,
	role,
}: AvatarProps) {
	const initials = getInitialsFromName(name);
	const color = colorMap[_color];
	const { objectSize, fontSize } = sizeMap[size];

	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			css={{
				textDecoration: 'none',
				height: `${objectSize}rem`,
				width: `${objectSize}rem`,
				borderRadius: '50%',
				borderStyle: 'solid',
				borderWidth: 1,
				borderColor: color,
				color: color,
			}}
			fontSize={fontSize}
			fontWeight="bold"
			aria-hidden={ariaHidden}
			aria-label={ariaLabel}
			role={role}
		>
			{initials}
		</Flex>
	);
}
