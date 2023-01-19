import { Flex } from '@ag.ds-next/react/box';
import { boxPalette, mapSpacing } from '@ag.ds-next/react/core';
import { getInitialsFromName } from './getInitialsFromName';

export type AvatarProps = {
	name: string;
};

const avatarStyles = {
	height: mapSpacing(2),
	width: mapSpacing(2),
	borderRadius: mapSpacing(2),
	backgroundColor: boxPalette.foregroundAction,
	color: boxPalette.backgroundBody,
};

export function Avatar({ name }: AvatarProps) {
	const initials = getInitialsFromName(name);

	return (
		<Flex alignItems="center" justifyContent="center" css={avatarStyles}>
			{initials}
		</Flex>
	);
}
