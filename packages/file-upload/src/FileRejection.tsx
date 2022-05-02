import React, { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { AlertFilledIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';

type FileRejectionProps = {
	children: ReactNode;
};

export const FileRejection = ({ children }: FileRejectionProps) => {
	return (
		<Flex as="li" gap={0.5} alignItems="center" padding={1} background="error">
			<AlertFilledIcon color="error" size="md" />
			<Text fontWeight="bold" color="error">
				{children}
			</Text>
		</Flex>
	);
};
