import { Avatar } from '../avatar';
import { Flex } from '../box';
import { useLinkComponent } from '../core';
import { Text } from '../text';

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
				{organisation ? (
					<Text color="muted" fontSize="xs">
						{organisation}
					</Text>
				) : null}
			</Flex>
			<Avatar name={name} tone="action" aria-hidden size="md" />
		</Flex>
	);
}
