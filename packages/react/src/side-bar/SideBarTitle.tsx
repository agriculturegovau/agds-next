import { PropsWithChildren, ReactNode } from 'react';
import { Box } from '../box';
import { packs, useLinkComponent } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';

export type SideBarTitleProps = PropsWithChildren<{
	id?: string;
	title: string | { label: string; href?: string; isCurrentPage?: boolean };
	subtitle?: string;
	action?: ReactNode;
}>;

export function SideBarTitle({
	title,
	id,
	action,
	subtitle,
}: SideBarTitleProps) {
	const Link = useLinkComponent();
	const titlelabel = typeof title === 'object' ? title.label : title;
	const titleHref = typeof title === 'object' ? title.href : undefined;
	const isCurrentPage =
		typeof title === 'object' && title.href && title.isCurrentPage;

	return (
		<Flex
			borderBottom
			paddingY={1}
			justifyContent="space-between"
			alignItems="center"
			display={{ xs: 'none', md: 'flex' }}
			gap={1}
		>
			<Stack gap={0.5}>
				<Box
					as="h2"
					id={id}
					color="text"
					fontSize="lg"
					fontWeight="bold"
					lineHeight="heading"
				>
					{titleHref ? (
						<Box
							as={Link}
							color="text"
							focus
							href={titleHref}
							aria-current={isCurrentPage ? 'page' : undefined}
							css={{
								textDecoration: 'none',
								'&:hover': packs.underline,
							}}
						>
							{titlelabel}
						</Box>
					) : (
						titlelabel
					)}
				</Box>
				<Text color="muted" fontSize="xs">
					{subtitle}
				</Text>
			</Stack>
			{action}
		</Flex>
	);
}
