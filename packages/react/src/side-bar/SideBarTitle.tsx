import { PropsWithChildren, ReactNode } from 'react';
import { Box } from '../box';
import { packs, useLinkComponent } from '../core';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';

export type SideBarTitleProps = PropsWithChildren<{
	id: string;
	title: string;
	titleHref?: string;
	subTitle?: string;
	action?: ReactNode;
}>;

/** Title of the SideBar nav */
export function SideBarTitle({
	title,
	titleHref,
	id,
	action,
	subTitle,
}: SideBarTitleProps) {
	const Link = useLinkComponent();

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
							// aria-current={isCurrentPage ? 'page' : undefined}
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
				<Text color="muted" fontSize="xs">
					{subTitle}
				</Text>
			</Stack>
			{action}
		</Flex>
	);
}
