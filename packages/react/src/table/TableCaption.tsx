import { ReactNode } from 'react';
import { Text } from '../text';

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
			display="table-caption"
			textAlign="left"
		>
			{children}
		</Text>
	);
};
