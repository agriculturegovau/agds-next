import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { packs, useLinkComponent } from '../core';
import { collapsingSideBarHoverVar } from '../_collapsing-side-bar';

export type SideNavTitleProps = PropsWithChildren<{
	id: string;
	isCurrentPage: boolean;
	href?: string;
}>;

export function SideNavTitle({
	as,
	children,
	display,
	href,
	id,
	isCurrentPage,
	...props
}: SideNavTitleProps) {
	const Link = useLinkComponent();

	const conditionalProps = href
		? {
				'aria-current': isCurrentPage ? 'page' : undefined,
				as: Link,
				href,
				css: {
					textDecoration: 'none',
					'&:hover': {
						...packs.underline,
						backgroundColor: collapsingSideBarHoverVar,
					},
				},
		  }
		: undefined;

	return (
		<Box
			as={as}
			borderBottom
			borderBottomWidth="xl"
			display={display}
			id={id}
			{...props}
		>
			<Box
				color="text"
				display="block"
				focusRingFor="keyboard"
				fontSize="sm"
				fontWeight="bold"
				lineHeight="heading"
				padding={1}
				{...conditionalProps}
			>
				{children}
			</Box>
		</Box>
	);
}
