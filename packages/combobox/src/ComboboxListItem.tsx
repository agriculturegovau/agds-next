import { PropsWithChildren, forwardRef } from 'react';
import { Box } from '@ag.ds-next/box';

type ComboboxListItemProps = PropsWithChildren<{
	isActiveItem: boolean;
}>;

export const ComboboxListItem = forwardRef<
	HTMLLIElement,
	ComboboxListItemProps
>(function ComboboxListItem({ children, isActiveItem, ...props }, ref) {
	return (
		<Box
			ref={ref}
			as="li"
			background={isActiveItem ? 'shade' : undefined}
			paddingX={1}
			paddingY={0.75}
			borderBottom
			borderColor="muted"
			color="action"
			css={{ cursor: 'pointer', '&:last-of-type': { borderBottom: 'none' } }}
			{...props}
		>
			{children}
		</Box>
	);
});
