import { forwardRef } from 'react';
import { Button } from '../button';
import { Box } from '../box';
import { SearchIcon } from '../icon';
import { mapResponsiveProp, mapSpacing, mq, ResponsiveProp } from '../core';

export type SearchBoxButtonProps = {
	children: string;
	iconOnly?: ResponsiveProp<boolean>;
};

export const SearchBoxButton = forwardRef<
	HTMLButtonElement,
	SearchBoxButtonProps
>(function SearchBoxButton({ children, iconOnly }, ref) {
	const buttonStyles = getButtonStyles({ iconOnly });
	return (
		<Box
			borderLeft
			borderWidth="lg"
			css={{ position: 'relative' }}
			flexShrink={0}
		>
			<Button
				aria-label={children}
				css={buttonStyles}
				iconBefore={iconOnly ? SearchIcon : undefined}
				ref={ref}
				type="submit"
			>
				<span>{children}</span>
			</Button>
		</Box>
	);
});

const getButtonStyles = ({
	iconOnly,
}: Pick<SearchBoxButtonProps, 'iconOnly'>) =>
	mq({
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		paddingLeft: mapSpacing(1),
		paddingRight: mapSpacing(1),

		'& span': {
			display: mapResponsiveProp(iconOnly, (value) =>
				value ? 'none' : 'block'
			),
		},

		'& svg': {
			display: mapResponsiveProp(iconOnly, (value) =>
				value ? 'block' : 'none'
			),
		},
	});
