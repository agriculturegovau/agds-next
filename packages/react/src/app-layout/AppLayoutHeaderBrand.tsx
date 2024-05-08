import { PropsWithChildren } from 'react';
import { Flex } from '../flex';
import {
	boxPalette,
	mapSpacing,
	packs,
	tokens,
	useLinkComponent,
} from '../core';
import { Text } from '../text';
import { Box } from '../box';

export type AppLayoutHeaderBrandProps = {
	href: string;
	logo: JSX.Element;
	heading: string;
	subLine?: string;
	badgeLabel?: string;
};

export function AppLayoutHeaderBrand({
	heading,
	subLine,
	badgeLabel,
	logo,
	href,
}: AppLayoutHeaderBrandProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			as={Link}
			href={href}
			paddingY={1}
			flexDirection={{ xs: 'column', md: 'row' }}
			alignItems={{ xs: 'flex-start', md: 'center' }}
			gap={{ xs: 1, md: 0 }}
			focusFor="keyboard"
			color="text"
			css={{
				textDecoration: 'none',
				'&:hover': packs.underline,
				// Logo styles
				svg: { display: 'block', height: '3.75rem', flexShrink: 0 },
			}}
		>
			{logo}
			<Flex
				flexDirection="column"
				justifyContent="center"
				alignItems="flex-start"
				maxWidth={tokens.maxWidth.bodyText}
				css={{
					// Border between logo and heading/subLine
					[tokens.mediaQuery.min.md]: {
						paddingLeft: mapSpacing(1),
						marginLeft: mapSpacing(1),
						borderLeft: boxPalette.border,
						borderLeftStyle: 'solid',
						borderLeftColor: boxPalette.border,
					},
				}}
			>
				<Flex alignItems="flex-start" gap={0.5}>
					<Text fontSize="lg" fontWeight="bold">
						{heading}
					</Text>
					{badgeLabel && (
						<AppLayoutHeaderBrandBadge>{badgeLabel}</AppLayoutHeaderBrandBadge>
					)}
				</Flex>
				{subLine ? (
					<Text color="muted" fontSize="xs">
						{subLine}
					</Text>
				) : null}
			</Flex>
		</Flex>
	);
}

type AppLayoutHeaderBrandBadgeProps = PropsWithChildren<{}>;

// Note: This component has been copied over from the `Header` component
function AppLayoutHeaderBrandBadge({
	children,
}: AppLayoutHeaderBrandBadgeProps) {
	return (
		<Box
			fontWeight="bold"
			paddingLeft={0.5}
			paddingRight={0.5}
			border
			borderWidth="md"
			css={{
				// These values don't exist in our tokens
				fontSize: '0.75rem',
				paddingTop: '2px',
				paddingBottom: '2px',
				borderColor: boxPalette.foregroundText,
				borderRadius: '2em',
			}}
		>
			{children}
		</Box>
	);
}
