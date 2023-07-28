import { PropsWithChildren } from 'react';
import { Box } from '../box';
import { packs, useLinkComponent } from '../core';
import { sideBarLocalPalette } from '../_collapsing-side-bar';

export type SideNavTitleProps = PropsWithChildren<{
	id: string;
	isCurrentPage: boolean;
	href?: string;
}>;

export function SideNavTitle({
	children,
	id,
	href,
	isCurrentPage,
}: SideNavTitleProps) {
	const Link = useLinkComponent();

	if (href) {
		return (
			<Box as="h2" id={id} borderBottom borderBottomWidth="xl">
				<Box
					as={Link}
					padding={1}
					color="text"
					fontSize="sm"
					fontWeight="bold"
					lineHeight="heading"
					display="block"
					focus
					href={href}
					aria-current={isCurrentPage ? 'page' : undefined}
					css={{
						textDecoration: 'none',
						'&:hover': {
							...packs.underline,
							backgroundColor: sideBarLocalPalette.hover,
						},
					}}
				>
					{children}
				</Box>
			</Box>
		);
	}

	return (
		<Box
			as="h2"
			id={id}
			borderBottom
			borderBottomWidth="xl"
			display="block"
			padding={1}
			color="text"
			fontSize="sm"
			fontWeight="bold"
			lineHeight="heading"
		>
			{children}
		</Box>
	);
}
