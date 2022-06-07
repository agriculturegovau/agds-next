import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { globalPalette } from '@ag.ds-next/core';
import { AlertFilledIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';

type FileRejectionProps = {
	children: ReactNode;
};

export const FileRejection = ({ children }: FileRejectionProps) => {
	return (
		<Flex
			as="li"
			gap={0.5}
			alignItems="center"
			rounded
			padding={1}
			css={{
				background: globalPalette.errorMuted,
			}}
		>
			<AlertFilledIcon color="error" size="md" />
			<Text color="error">{children}</Text>
		</Flex>
	);
};
