import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Button } from '@ag.ds-next/button';
import { Box } from '@ag.ds-next/box';
import { SearchIcon } from '@ag.ds-next/icon';
import {
	mapResponsiveProp,
	mapSpacing,
	mq,
	ResponsiveProp,
} from '@ag.ds-next/core';

export type SearchBoxButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	iconOnly?: ResponsiveProp<boolean>;
};

export const SearchBoxButton = forwardRef<
	HTMLButtonElement,
	SearchBoxButtonProps
>(function SearchBoxButton({ children, iconOnly }, ref) {
	const buttonStyles = getButtonStyles({ iconOnly });
	return (
		<Box
			flexShrink={0}
			css={{ position: 'relative' }}
			borderLeft
			borderWidth="lg"
		>
			<Button ref={ref} type="submit" css={buttonStyles}>
				<span>{children}</span>
				{iconOnly ? <SearchIcon size={1.5} /> : null}
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

		'& > span': {
			display: mapResponsiveProp(iconOnly, (value) =>
				value ? 'none' : 'block'
			),
		},

		'& > svg': {
			display: mapResponsiveProp(iconOnly, (value) =>
				value ? 'block' : 'none'
			),
		},
	});
