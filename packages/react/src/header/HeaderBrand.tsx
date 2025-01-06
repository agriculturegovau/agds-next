import { ReactNode } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import {
	boxPalette,
	mapSpacing,
	packs,
	tokens,
	useLinkComponent,
} from '../core';
import { HeaderProps } from './Header';

const GAP_REM = 1.5;

type HeaderBrandProps = Pick<
	HeaderProps,
	| 'badgeLabel'
	| 'dividerPosition'
	| 'heading'
	| 'href'
	| 'logo'
	| 'secondHref'
	| 'secondLogo'
	| 'subline'
> &
	Required<Pick<HeaderProps, 'size'>> & { hasRightContent: boolean };

export function HeaderBrand({
	badgeLabel,
	dividerPosition,
	hasRightContent,
	heading,
	href = '/',
	logo,
	secondLogo,
	secondHref,
	size,
	subline,
}: HeaderBrandProps) {
	const Link = useLinkComponent();

	return logo && secondLogo ? (
		<Flex
			css={{ overflow: 'hidden' }}
			flexDirection={{ xs: 'column', lg: 'row' }}
			flexWrap={{ xs: 'wrap', xl: 'nowrap' }}
			gap={GAP_REM}
			inline
		>
			<Flex
				css={{
					marginRight:
						hasRightContent && dividerPosition === 'after'
							? mapSpacing(GAP_REM)
							: 0,
				}} // Create a gap when there is right content
				flexDirection={{ xs: 'column', sm: 'row' }}
				flexShrink={0}
				gap={GAP_REM}
			>
				<Flex
					as={Link}
					color="text"
					css={{
						' img, svg': { width: '100%' },
						...packs.print.hidden,
					}}
					focusRingFor="keyboard"
					href={href}
					maxWidth={logoWidthMap[size]}
				>
					{logo}
				</Flex>

				{dividerPosition === 'between' && (
					<DividingLine dividerPosition={dividerPosition} />
				)}

				<Flex
					alignSelf={{ xs: 'start', sm: 'center' }}
					as={secondHref ? Link : 'span'}
					color="text"
					css={{
						' img, svg': { width: '100%' },
						...packs.print.hidden,
					}}
					focusRingFor="keyboard"
					maxWidth={logoWidthMap[size]}
					{...(secondHref && { href: secondHref })}
				>
					{secondLogo}
				</Flex>
			</Flex>

			<Flex
				css={
					dividerPosition === 'after'
						? {
								[tokens.mediaQuery.min.lg]: {
									marginLeft: `calc(-${
										hasRightContent ? mapSpacing(GAP_REM) : 0 // Offset the gap when there is right content
									} - ${tokens.borderWidth.sm}px)`, // Hide the divider when the heading text flows to the second row
								},
						  }
						: undefined
				}
				gap={GAP_REM}
			>
				{dividerPosition === 'after' && (
					<DividingLine dividerPosition={dividerPosition} />
				)}

				<Stack
					as={Link}
					color="text"
					css={{
						textDecoration: 'none',
						':hover': packs.underline,
					}}
					focusRingFor="keyboard"
					href={href}
					justifyContent="center"
				>
					<Flex alignItems="flex-start" gap={0.5}>
						<Text
							fontSize={headingSizeMap[size]}
							fontWeight="bold"
							lineHeight="default"
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
		</Flex>
	) : (
		<Flex
			alignItems="stretch"
			as={Link}
			color="text"
			css={{
				textDecoration: 'none',
				':hover': packs.underline,
			}}
			flexDirection={{ xs: 'column', md: 'row' }}
			focusRingFor="keyboard"
			gap={1}
			href={href}
			inline
		>
			{logo ? (
				<Flex
					alignItems="flex-start"
					css={{
						' img, svg': { width: '100%' },
						...packs.print.hidden,
					}}
					maxWidth={logoWidthMap[size]}
				>
					{logo}
				</Flex>
			) : null}
			{logo ? (
				<Box
					borderRight
					css={packs.print.hidden}
					display={{ xs: 'none', md: 'block' }}
				/>
			) : null}
			<Stack justifyContent="center">
				<Flex alignItems="flex-start" gap={0.5}>
					<Text
						fontSize={headingSizeMap[size]}
						fontWeight="bold"
						lineHeight="default"
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
			border
			borderWidth="md"
			color="text"
			css={{
				// These values don't exist in our tokens
				fontSize: '0.75rem',
				paddingTop: '2px',
				paddingBottom: '2px',
				borderColor: boxPalette.foregroundText,
				borderRadius: '2em',
			}}
			fontWeight="bold"
			paddingLeft={0.5}
			paddingRight={0.5}
		>
			{children}
		</Box>
	);
};

const logoWidthMap = {
	sm: { xs: '12rem', sm: '14rem' },
	md: { xs: '12rem', sm: '16rem' },
} as const;

const headingSizeMap = {
	sm: { xs: 'md', sm: 'lg' },
	md: { xs: 'md', sm: 'xl' },
} as const;

const subHeadingSizeMap = {
	sm: 'sm',
	md: { xs: 'sm', sm: 'md' },
} as const;

const DividingLine = ({
	dividerPosition,
}: Pick<HeaderBrandProps, 'dividerPosition'>) => (
	<Box
		borderRight
		css={packs.print.hidden}
		display={{
			xs: 'none',
			sm: dividerPosition === 'between' ? 'block' : undefined,
			lg: 'block',
		}}
	/>
);
