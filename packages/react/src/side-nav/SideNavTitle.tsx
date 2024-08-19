import { Box } from '../box';
import { packs, useLinkComponent } from '../core';
import { collapsingSideBarHoverVar } from '../_collapsing-side-bar';
import { type SideNavTitleProps } from './types';

export function SideNavTitle({
	as,
	children,
	className,
	display,
	href,
	id,
	isCurrentPage,
}: SideNavTitleProps) {
	const Link = useLinkComponent();

	const linkProps = href
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
			className={className}
			display={display}
			id={id}
		>
			<Box
				as="span"
				color="text"
				display="block"
				focusRingFor="keyboard"
				fontSize="sm"
				fontWeight="bold"
				lineHeight="heading"
				padding={1}
				{...linkProps}
			>
				{children}
			</Box>
		</Box>
	);
}
