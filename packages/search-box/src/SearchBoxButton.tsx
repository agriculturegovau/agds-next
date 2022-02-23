import { DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from 'react';
import { Button } from '@ag.ds-next/button';
import { Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';
import {
	boxPalette,
	mapResponsiveProp,
	mq,
	ResponsiveProp,
} from '@ag.ds-next/core';

export type SearchBoxButtonProps = Omit<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
	'children'
> & {
	children: string;
	iconOnly?: ResponsiveProp<boolean>;
};

export const SearchBoxButton = forwardRef<
	HTMLButtonElement,
	SearchBoxButtonProps
>(function SearchBoxInput({ children, iconOnly }, ref) {
	const containerStyles = getContainerStyles();
	const buttonStyles = getButtonStyles({ iconOnly });
	return (
		<Flex flexShrink={0} css={containerStyles}>
			<Button ref={ref} type="submit" aria-label={children} css={buttonStyles}>
				<span>{children}</span>
				{iconOnly ? <Icon icon="search" size={1.5} /> : null}
			</Button>
		</Flex>
	);
});

const getContainerStyles = () =>
	({
		position: 'relative',
		borderLeftWidth: 3,
		borderLeftStyle: 'solid',
		borderLeftColor: boxPalette.border,
	} as const);

const getButtonStyles = ({
	iconOnly,
}: Pick<SearchBoxButtonProps, 'iconOnly'>) =>
	mq({
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,

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
