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
		<div role="group" aria-labelledby={id}>
			<Text
				display="block"
				padding={1}
				paddingBottom={0}
				lineHeight="heading"
				fontWeight="bold"
				fontSize="xs"
				color="muted"
				id={id}
			>
				{label}
			</Text>
			{children}
		</div>
	);
}
