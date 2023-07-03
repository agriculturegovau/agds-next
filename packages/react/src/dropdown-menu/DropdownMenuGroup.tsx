import { PropsWithChildren } from 'react';
import { Text } from '../text';

export type DropdownMenuItemGroupProps = PropsWithChildren<{
	label: string;
}>;

export function DropdownMenuGroup({
	children,
	label,
}: DropdownMenuItemGroupProps) {
	return (
		<div role="group">
			<Text
				display="block"
				padding={1}
				paddingBottom={0}
				fontSize="xs"
				color="muted"
			>
				{label}
			</Text>
			{children}
		</div>
	);
}
