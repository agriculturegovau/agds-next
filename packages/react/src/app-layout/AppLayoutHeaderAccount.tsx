import { Avatar } from '../avatar';
import { Flex } from '../flex';
import { mq, packs, useLinkComponent } from '../core';
import { Text } from '../text';
import type { AppLayoutHeaderProps } from './AppLayoutHeader';
import { AppLayoutHeaderAccountDropdown } from './AppLayoutHeaderAccountDropdown';

export type AppLayoutHeaderAccountProps = NonNullable<
	AppLayoutHeaderProps['accountDetails']
>;

export function AppLayoutHeaderAccount({
	name,
	secondaryText,
	href,
	dropdown,
}: AppLayoutHeaderAccountProps) {
	const Link = useLinkComponent();

	// Dropdown component
	if (dropdown) {
		return (
			<AppLayoutHeaderAccountDropdown name={name} secondaryText={secondaryText}>
				{dropdown}
			</AppLayoutHeaderAccountDropdown>
		);
	}

	const hasLink = Boolean(href);

	return (
		<Flex
			as="span"
			{...(hasLink && {
				as: Link,
				href,
				focusRingFor: 'keyboard',
			})}
			alignItems="center"
			flexShrink={0}
			gap={0.5}
			textAlign="right"
			css={mq({
				textDecoration: 'none',
				maxWidth: ['16rem', '18rem'],
				...(hasLink && {
					'&:hover': {
						'& > span > span': {
							textDecoration: 'underline',
						},
					},
				}),
			})}
		>
			<Flex as="span" flexDirection="column" css={{ overflow: 'hidden' }}>
				<Text
					color="action"
					fontWeight="bold"
					fontSize="xs"
					css={packs.truncate}
				>
					{name}
				</Text>
				{secondaryText ? (
					<Text color="muted" fontSize="xs" css={packs.truncate}>
						{secondaryText}
					</Text>
				) : null}
			</Flex>
			<Avatar name={name} tone="action" aria-hidden size="md" />
		</Flex>
	);
}
