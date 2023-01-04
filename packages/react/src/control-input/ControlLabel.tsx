import { PropsWithChildren } from 'react';
import { Text } from '../text';
import { ControlSize } from './utils';

export type ControlLabelProps = PropsWithChildren<{
	disabled?: boolean;
	size: ControlSize;
}>;

const paddingTopMap = {
	sm: 0,
	md: '0.2rem',
} as const;

export const ControlLabel = ({
	children,
	disabled,
	size,
}: ControlLabelProps) => {
	const paddingTop = paddingTopMap[size];
	return (
		<Text
			flexGrow={1}
			color={disabled ? 'muted' : 'text'}
			css={{
				// Ensures the label is vertically aligned with the indicator across multiple lines.
				paddingTop,
			}}
		>
			{children}
		</Text>
	);
};
