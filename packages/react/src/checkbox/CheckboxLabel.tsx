import { PropsWithChildren } from 'react';
import { Text } from '../text';
import { CheckboxSize } from './utils';

export type CheckboxLabelProps = PropsWithChildren<{
	disabled?: boolean;
	size: CheckboxSize;
}>;

const paddingTopMap = {
	sm: 0,
	md: '0.2rem',
} as const;

export function CheckboxLabel({
	children,
	disabled,
	size,
}: CheckboxLabelProps) {
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
