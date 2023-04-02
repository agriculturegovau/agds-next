import { forwardRef, HTMLAttributes } from 'react';
import { Flex } from '../../box';
import { boxPalette } from '../../core';

type ComboboxListItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'color'> & {
	isActiveItem: boolean;
	isInteractive: boolean;
};

export const ComboboxListItem = forwardRef<
	HTMLLIElement,
	ComboboxListItemProps
>(function ComboboxListItem(
	{ children, isActiveItem, isInteractive = true, ...props },
	ref
) {
	return (
		<Flex
			ref={ref}
			as="li"
			alignItems="center"
			background={isActiveItem ? 'shade' : undefined}
			paddingX={1}
			paddingY={0.75}
			borderBottom
			borderColor="muted"
			css={{
				cursor: isInteractive ? 'pointer' : undefined,
				'&:hover': {
					backgroundColor: isInteractive
						? boxPalette.backgroundShade
						: undefined,
				},
				'&:last-of-type': { borderBottom: 'none' },
			}}
			{...props}
		>
			{children}
		</Flex>
	);
});
