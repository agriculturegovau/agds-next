import { ReactNode } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { useLinkComponent, boxPalette } from '@ag.ds-next/core';

type HeaderBrandProps = {
	badgeLabel?: string;
	href?: string;
	heading: string;
	subline?: string;
	logo?: JSX.Element;
};

export function HeaderBrand({
	badgeLabel,
	href = '/',
	logo,
	heading,
	subline,
}: HeaderBrandProps) {
	const Link = useLinkComponent();

	return (
		<Flex
			as={Link}
			href={href}
			flexDirection={{ xs: 'column', md: 'row' }}
			color="text"
			gap={1}
			focus
			alignItems="stretch"
			css={{
				textDecoration: 'none',
				':hover': {
					textDecoration: 'underline',
					textDecorationSkipInk: 'auto',
				},
			}}
		>
			{logo ? (
				<Flex
					alignItems="flex-start"
					maxWidth={{ xs: '12rem', sm: '16rem' }}
					css={{
						' img, svg': { width: '100%' },
					}}
				>
					{logo}
				</Flex>
			) : null}
			{logo ? <Box borderRight display={{ xs: 'none', md: 'block' }} /> : null}
			<Stack justifyContent="center">
				<Flex alignItems="center" gap={0.5}>
					<Text
						lineHeight="heading"
						fontSize={{ xs: 'md', sm: 'xl' }}
						fontWeight="bold"
					>
						{heading}
					</Text>
					{badgeLabel && <HeaderBadge>{badgeLabel}</HeaderBadge>}
				</Flex>
				{subline && (
					<Text color="muted" fontSize={{ xs: 'sm', sm: 'md' }}>
						{subline}
					</Text>
				)}
			</Stack>
		</Flex>
	);
}

type HeaderBadgeProps = { children: ReactNode };

const HeaderBadge = ({ children }: HeaderBadgeProps) => {
	return (
		<Box
			fontSize="xs"
			paddingLeft={0.5}
			paddingRight={0.5}
			border
			borderWidth="md"
			css={{
				// These values don't exist in our tokens
				paddingTop: '2px',
				paddingBottom: '2px',
				borderColor: boxPalette.foregroundText,
				borderRadius: '2em',
			}}
		>
			{children}
		</Box>
	);
};
