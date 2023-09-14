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
				paddingX={1}
				paddingTop={1.5}
				paddingBottom={0.5}
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
