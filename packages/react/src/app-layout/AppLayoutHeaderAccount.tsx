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
			css={mq({
				marginLeft: 'auto',
				// 17.625rem is the available space beside the hamburger at 375px
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
			flexShrink={0}
			gap={0.5}
			minHeight="5.25rem"
			textAlign="right"
		>
			<Flex as="span" css={{ overflow: 'hidden' }} flexDirection="column">
				<Text
					color="action"
					css={packs.truncate}
					fontSize="xs"
					fontWeight="bold"
				>
					{name}
				</Text>
				{secondaryText ? (
					<Text color="muted" css={packs.truncate} fontSize="xs">
						{secondaryText}
					</Text>
				) : null}
			</Flex>
			<Avatar aria-hidden name={name} size="md" tone="action" />
		</Flex>
	);
}
