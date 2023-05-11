import { Avatar } from '../avatar';
import { Flex, FlexProps } from '../box';
import { useLinkComponent } from '../core';
import { Text } from '../text';
import type { AppLayoutHeaderProps } from './AppLayoutHeader';

export type AppLayoutHeaderAccountProps =
	AppLayoutHeaderProps['accountDetails'] & {
		display?: FlexProps['display'];
	};

export function AppLayoutHeaderAccount({
	name,
	secondaryText,
	href,
	display,
}: AppLayoutHeaderAccountProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			as={Link}
			display={display}
			href={href}
			alignItems="center"
			focus
			flexShrink={0}
			gap={0.5}
			css={{
				textDecoration: 'none',
				textAlign: 'right',
				'&:hover': {
					'& > div > span': {
						textDecoration: 'underline',
					},
				},
			}}
		>
			<Flex
				flexDirection="column"
				css={{
					// Wrap long names at a sensible width
					maxWidth: '16rem',
				}}
			>
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
