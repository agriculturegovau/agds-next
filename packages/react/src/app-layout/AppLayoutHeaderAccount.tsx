import { useEffect, useRef } from 'react';
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
	const scrollbarWidthRef = useRef(0);

	useEffect(() => {
		scrollbarWidthRef.current =
			window.innerWidth - document.documentElement.offsetWidth;
	}, []);

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
			minHeight="5.25rem"
			textAlign="right"
			css={mq({
				marginLeft: 'auto',
				maxWidth: `calc(17.625rem - ${scrollbarWidthRef.current}px)`,
				textDecoration: 'none',
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
