import { PropsWithChildren } from 'react';
import { Text } from '../text';
import { useDropdownMenuGroupId } from './utils';

export type DropdownMenuItemGroupProps = PropsWithChildren<{
	/** The label of the group. */
	label: string;
}>;

export function DropdownMenuGroup({
	children,
	label,
}: DropdownMenuItemGroupProps) {
	const id = useDropdownMenuGroupId();
	return (
		<div aria-labelledby={id} role="group">
			<Text
				color="muted"
				display="block"
				fontSize="xs"
				fontWeight="bold"
				id={id}
				lineHeight="heading"
				paddingBottom={0.5}
				paddingTop={1.5}
				paddingX={1}
			>
				{label}
			</Text>
			{children}
		</div>
	);
}
