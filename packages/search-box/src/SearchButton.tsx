import { Button } from '@ag.ds-next/button';
import { Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';
import { boxPalette, tokens } from '@ag.ds-next/core';

export type SearchButtonProps = {
	children: string;
	iconOnly?: boolean;
	responsive?: boolean;
};

export const SearchButton = ({
	children,
	iconOnly,
	responsive,
}: SearchButtonProps) => {
	const inputStyles = getInputStyles();
	const buttonStyles = getButtonStyles({ iconOnly, responsive });
	return (
		<Flex flexShrink={0} css={inputStyles}>
			<Button type="submit" aria-label={children} css={buttonStyles}>
				<span>{children}</span>
				{iconOnly || responsive ? <Icon icon="search" size={1.5} /> : null}
			</Button>
		</Flex>
	);
};

const getInputStyles = () =>
	({
		position: 'relative',
		borderLeftWidth: 3,
		borderLeftStyle: 'solid',
		borderLeftColor: boxPalette.border,
	} as const);

const getButtonStyles = ({
	iconOnly,
	responsive,
}: Pick<SearchButtonProps, 'iconOnly' | 'responsive'>) =>
	({
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,

		'& > span': {
			display: iconOnly || responsive ? 'none' : undefined,
			[tokens.mediaQuery.min.sm]: {
				display: iconOnly ? 'none' : 'block',
			},
		},

		'& > svg': {
			display: iconOnly || responsive ? 'block' : undefined,
			[tokens.mediaQuery.min.sm]: {
				display: iconOnly ? 'block' : 'none',
			},
		},
	} as const);
