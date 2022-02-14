import { Button } from '@ag.ds-next/button';
import { Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';
import { tokens } from '@ag.ds-next/core';

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
	const styles = buttonStyles({ iconOnly, responsive });
	return (
		<Flex flexShrink={0} css={{ position: 'relative' }}>
			<Button type="submit" css={styles}>
				{!iconOnly ? <span>{children}</span> : null}
				{iconOnly || responsive ? <Icon icon="search" /> : null}
			</Button>
		</Flex>
	);
};

const buttonStyles = ({
	iconOnly,
	responsive,
}: Pick<SearchButtonProps, 'iconOnly' | 'responsive'>) => ({
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
});
