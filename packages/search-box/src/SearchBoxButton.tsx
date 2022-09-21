import { forwardRef } from 'react';
import { Button } from '@ag.ds-next/button';
import { Box } from '@ag.ds-next/box';
import { SearchIcon } from '@ag.ds-next/icon';
import {
	mapResponsiveProp,
	mapSpacing,
	mq,
	ResponsiveProp,
} from '@ag.ds-next/core';

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
			flexShrink={0}
			css={{ position: 'relative' }}
			borderLeft
			borderWidth="lg"
		>
			<Button ref={ref} type="submit" aria-label={children} css={buttonStyles}>
				<span>{children}</span>
				{iconOnly ? <SearchIcon size="md" /> : null}
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
