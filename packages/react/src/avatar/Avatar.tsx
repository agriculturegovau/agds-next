import { Flex } from '@ag.ds-next/react/box';
import { boxPalette, mapSpacing } from '@ag.ds-next/react/core';
import { getInitialsFromName } from './getInitialsFromName';

const colorMap = {
	action: boxPalette.foregroundAction,
	default: boxPalette.foregroundMuted,
};

const sizeMap = {
	sm: { fontSize: 'xs', objectSize: mapSpacing(2) },
	md: { fontSize: 'sm', objectSize: mapSpacing(2.5) },
	lg: { fontSize: 'md', objectSize: mapSpacing(3) },
	xl: { fontSize: 'lg', objectSize: mapSpacing(4) },
	xxl: { fontSize: 'xl', objectSize: mapSpacing(4.5) },
	xxxl: { fontSize: 'xl', objectSize: mapSpacing(5) },
};

export type AvatarProps = {
	name: string;
	color?: keyof typeof colorMap;
	size?: keyof typeof sizeMap;
};

export function Avatar({
	name,
	color: _color = 'default',
	size = 'md',
}: AvatarProps) {
	const initials = getInitialsFromName(name);
	const color = colorMap[_color];
	const { objectSize, fontSize } = sizeMap[size];

	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			css={{
				height: objectSize,
				width: objectSize,
				borderRadius: objectSize,
				borderStyle: 'solid',
				borderWidth: 1,
				borderColor: color,
				color: color,
			}}
			fontSize={fontSize}
			fontWeight="bold"
		>
			{initials}
		</Flex>
	);
}
