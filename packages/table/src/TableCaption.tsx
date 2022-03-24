import { ReactNode } from 'react';
import { Text } from '@ag.ds-next/text';

export type TableCaptionProps = {
	children: ReactNode;
};

export const TableCaption = ({ children }: TableCaptionProps) => {
	return (
		<Text
			as="caption"
			fontSize="md"
			fontWeight="bold"
			paddingBottom={0.5}
			css={{
				display: 'table-caption',
			}}
		>
			{children}
		</Text>
	);
};
