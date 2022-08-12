import { ReactNode } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { useLinkComponent, boxPalette, packs } from '@ag.ds-next/core';

type HeaderBrandProps = {
	badgeLabel?: string;
	href?: string;
	heading: string;
	subline?: string;
	logo?: JSX.Element;
	size: keyof typeof logoWidthMap;
};

export function HeaderBrand({
	badgeLabel,
	href = '/',
	logo,
	size,
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
				':hover': packs.underline,
			}}
		>
			{logo ? (
				<Flex
					alignItems="flex-start"
					maxWidth={logoWidthMap[size]}
					css={{
						' img, svg': { width: '100%' },
						...packs.print.hidden,
					}}
				>
					{logo}
				</Flex>
			) : null}
			{logo ? (
				<Box
					borderRight
					display={{ xs: 'none', md: 'block' }}
					css={packs.print.hidden}
				/>
			) : null}
			<Stack justifyContent="center">
				<Flex alignItems="flex-start" gap={0.5}>
					<Text
						lineHeight="default"
						fontSize={headingSizeMap[size]}
						fontWeight="bold"
						maxWidth={tokens.maxWidth.bodyText}
					>
						{heading}
					</Text>
					{badgeLabel && <HeaderBadge>{badgeLabel}</HeaderBadge>}
				</Flex>
				{subline && (
					<Text color="muted" fontSize={subHeadingSizeMap[size]}>
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
};

const logoWidthMap = {
	small: { xs: '12rem', sm: '14rem' },
	medium: { xs: '12rem', sm: '16rem' },
};

const headingSizeMap = {
	small: { xs: 'md', sm: 'lg' },
	medium: { xs: 'md', sm: 'xl' },
};

const subHeadingSizeMap = {
	small: 'sm',
	medium: { xs: 'sm', sm: 'md' },
};
