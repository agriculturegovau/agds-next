import { PropsWithChildren } from 'react';
import { Box } from '../../box/src';
import { packs, useLinkComponent } from '../../core/src';
import { localPalette } from './utils';

export type SideNavTitleProps = PropsWithChildren<{
	id: string;
	href?: string;
	isCurrentPage: boolean;
}>;

export function SideNavTitle({
	children,
	id,
	isCurrentPage,
	href,
}: SideNavTitleProps) {
	const Link = useLinkComponent();

	if (href) {
		return (
			<Box as="h2" id={id}>
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
							backgroundColor: localPalette.hover,
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
