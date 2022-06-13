import { Box } from '@ag.ds-next/box';
import { LinkProps, packs, useLinkComponent } from '@ag.ds-next/core';
import { localPalette } from './utils';

export type SideNavTitleProps = LinkProps & {
	isCurrentPage?: boolean;
};

export const SideNavTitle = ({
	children,
	id,
	isCurrentPage,
	...props
}: SideNavTitleProps) => {
	const Link = useLinkComponent();
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
				aria-current={isCurrentPage ? 'page' : undefined}
				{...props}
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
};
