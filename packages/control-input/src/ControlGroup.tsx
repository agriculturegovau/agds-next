import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

export type ControlGroupProps = {
	children: ReactNode;
	block?: boolean;
	title?: string;
};

export const ControlGroup = ({ children, block, title }: ControlGroupProps) => (
	<Flex as="fieldset" inline padding={0} css={{ margin: 0, border: 'none' }}>
		{title ? (
			<Text as="legend" padding={0} paddingBottom={1} css={{ margin: 0 }}>
				{title}
			</Text>
		) : null}
		<Flex gap={1} flexDirection={block ? 'column' : 'row'} width="100%">
			{children}
		</Flex>
	</Flex>
);
