import { PropsWithChildren } from 'react';
import { Text } from '../text';
import { RadioSize } from './utils';

export type RadioLabelProps = PropsWithChildren<{
	disabled?: boolean;
	size: RadioSize;
}>;

const paddingTopMap = {
	sm: 0,
	md: '0.2rem',
} as const;

export function RadioLabel({ children, disabled, size }: RadioLabelProps) {
	const paddingTop = paddingTopMap[size];
	return (
		<Text
			color={disabled ? 'muted' : 'text'}
			css={{
				// Ensures the label is vertically aligned with the indicator across multiple lines.
				paddingTop,
			}}
			flexGrow={1}
		>
			{children}
		</Text>
	);
}
