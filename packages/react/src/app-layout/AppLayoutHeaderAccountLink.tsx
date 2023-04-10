import { Fragment } from 'react';
import { Avatar } from '../avatar';
import { Box, Flex } from '../box';
import { useLinkComponent } from '../core';
import { Text } from '../text';
import { AvatarIcon } from '../icon';
import { HEADER_BUTTON_HEIGHT } from './utils';

export type AppLayoutHeaderAccountLinkProps = {
	/** The name of the currently authenticated user. */
	name: string;
	/** The name of the organisation that the currently authenticated user belongs to. */
	organisation?: string;
	/** The href to link to, for example "/account". */
	href: string;
};

export function AppLayoutHeaderAccountLink({
	name,
	href,
	organisation,
}: AppLayoutHeaderAccountLinkProps) {
	const Link = useLinkComponent();
	return (
		<Fragment>
			<Flex
				as={Link}
				display={{ xs: 'none', lg: 'flex' }}
				href={href}
				alignItems="center"
				focus
				gap={1}
				css={{
					textDecoration: 'none',
					'&:hover': {
						'& span:first-of-type': {
							textDecoration: 'underline',
						},
					},
				}}
			>
				<Box
					display={{ xs: 'none', lg: 'flex' }}
					flexDirection="column"
					css={{ textAlign: 'right' }}
				>
					<Text color="action" fontWeight="bold" fontSize="xs">
						{name}
					</Text>
					{organisation ? (
						<Text color="muted" fontSize="xs">
							{organisation}
						</Text>
					) : null}
				</Box>
				<Avatar name={name} tone="action" aria-hidden size="md" />
			</Flex>
			<Flex
				as={Link}
				href={href}
				width={HEADER_BUTTON_HEIGHT}
				height={HEADER_BUTTON_HEIGHT}
				display={{ xs: 'flex', lg: 'none' }}
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				focus
				css={{
					textDecoration: 'none',
					'&:hover': {
						'& span:first-of-type': {
							textDecoration: 'underline',
						},
					},
				}}
			>
				<AvatarIcon color="action" aria-hidden />
				<Text color="action">Account</Text>
			</Flex>
		</Fragment>
	);
}
