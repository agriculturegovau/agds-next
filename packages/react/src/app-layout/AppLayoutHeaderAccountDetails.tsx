import { Avatar } from '../avatar';
import { Flex } from '../box';
import { useLinkComponent } from '../core';
import { Text } from '../text';
import type { AppLayoutHeaderProps } from './AppLayoutHeader';

export type AppLayoutHeaderAccountDetailsProps =
	AppLayoutHeaderProps['accountDetails'];

export function AppLayoutHeaderAccountDetails({
	name,
	secondaryText,
	href,
}: AppLayoutHeaderAccountDetailsProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			as={Link}
			display={{ xs: 'none', lg: 'flex' }}
			href={href}
			alignItems="center"
			focus
			gap={1}
			css={{
				marginLeft: 'auto',
				textDecoration: 'none',
				textAlign: 'right',
				'&:hover': {
					'& > div > span': {
						textDecoration: 'underline',
					},
				},
			}}
		>
			<Flex display={{ xs: 'none', lg: 'flex' }} flexDirection="column">
				<Text color="action" fontWeight="bold" fontSize="xs">
					{name}
				</Text>
				{secondaryText ? (
					<Text color="muted" fontSize="xs">
						{secondaryText}
					</Text>
				) : null}
			</Flex>
			<Avatar name={name} tone="action" aria-hidden size="md" />
		</Flex>
	);
}
