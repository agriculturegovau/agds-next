import { PropsWithChildren, ReactNode } from 'react';
import { Box } from '../box';
import { packs, useLinkComponent } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';

export type SideBarTitleProps = PropsWithChildren<{
	id?: string;
	title: string;
	/** If the title is a link, this is the href. */
	href?: string;
	/** Whether the title href is the current page */
	isCurrentPage?: boolean;
	subtitle?: string;
	action?: ReactNode;
}>;

export function SideBarTitle({
	id,
	title,
	href,
	isCurrentPage,
	action,
	subtitle,
}: SideBarTitleProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			borderBottom
			paddingBottom={1}
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
					{href ? (
						<Box
							as={Link}
							color="text"
							focus
							href={href}
							aria-current={isCurrentPage ? 'page' : undefined}
							css={{
								textDecoration: 'none',
								'&:hover': packs.underline,
							}}
						>
							{title}
						</Box>
					) : (
						title
					)}
				</Box>
				{subtitle && (
					<Text color="muted" fontSize="xs">
						{subtitle}
					</Text>
				)}
			</Stack>
			{action}
		</Flex>
	);
}
