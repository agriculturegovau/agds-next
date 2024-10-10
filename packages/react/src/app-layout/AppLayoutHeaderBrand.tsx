import { PropsWithChildren, ReactElement } from 'react';
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
import { Stack } from '../stack';
import { AppLayoutHeaderProps } from './AppLayoutHeader';

const GAP_REM = 1.5;
const LOGO_HEIGHT = '3.75rem';

export type AppLayoutHeaderBrandProps = {
	href: string;
	logo: ReactElement;
	hasAccountDetails: boolean;
	heading: string;
	badgeLabel?: string;
	dividerPosition?: AppLayoutHeaderProps['dividerPosition'];
	secondHref?: AppLayoutHeaderProps['secondHref'];
	secondLogo?: AppLayoutHeaderProps['secondLogo'];
	subLine?: string;
};

export function AppLayoutHeaderBrand({
	badgeLabel,
	dividerPosition,
	logo,
	heading,
	hasAccountDetails,
	href,
	secondHref,
	secondLogo,
	subLine,
}: AppLayoutHeaderBrandProps) {
	const Link = useLinkComponent();

	return logo && secondLogo ? (
		<Flex
			css={{
				marginLeft: '-0.5rem',
				marginRight: '-0.5rem',
				overflow: 'hidden',
			}}
			flexDirection={{ xs: 'column', lg: 'row' }}
			flexWrap={{ xs: 'wrap', xl: 'nowrap' }}
			gap={{ xs: 1, md: GAP_REM }}
			inline
			padding={0.5}
		>
			<Flex
				css={{
					marginRight:
						hasAccountDetails && dividerPosition === 'after'
							? mapSpacing(GAP_REM)
							: 0,
				}} // Create a gap when there is right content
				flexDirection={{ xs: 'column', sm: 'row' }}
				flexShrink={0}
				gap={GAP_REM}
			>
				<Flex
					alignSelf={{ xs: 'start', sm: 'center' }}
					as={Link}
					color="text"
					css={{
						' img, svg': { height: LOGO_HEIGHT },
						...packs.print.hidden,
					}}
					focusRingFor="keyboard"
					href={href}
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
										hasAccountDetails ? mapSpacing(GAP_REM) : 0 // Offset the gap when there is right content
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
						<Text fontSize="lg" fontWeight="bold">
							{heading}
						</Text>

						{badgeLabel && (
							<AppLayoutHeaderBrandBadge>
								{badgeLabel}
							</AppLayoutHeaderBrandBadge>
						)}
					</Flex>

					{subLine && (
						<Text color="muted" fontSize="xs">
							{subLine}
						</Text>
					)}
				</Stack>
			</Flex>
		</Flex>
	) : (
		<Flex
			as={Link}
			href={href}
			paddingY={0.5}
			flexDirection={{ xs: 'column', md: 'row' }}
			alignItems={{ xs: 'flex-start', md: 'center' }}
			gap={{ xs: 1, md: 0 }}
			focusRingFor="keyboard"
			color="text"
			css={{
				textDecoration: 'none',
				'&:hover': packs.underline,
				// Logo styles
				svg: { display: 'block', height: LOGO_HEIGHT, flexShrink: 0 },
			}}
		>
			{logo}

			<DividingLine singleLogo />

			<Flex
				flexDirection="column"
				justifyContent="center"
				alignItems="flex-start"
				maxWidth={tokens.maxWidth.bodyText}
			>
				<Flex alignItems="flex-start" gap={0.5}>
					<Text fontSize="lg" fontWeight="bold">
						{heading}
					</Text>

					{badgeLabel && (
						<AppLayoutHeaderBrandBadge>{badgeLabel}</AppLayoutHeaderBrandBadge>
					)}
				</Flex>

				{subLine && (
					<Text color="muted" fontSize="xs">
						{subLine}
					</Text>
				)}
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

const DividingLine = ({
	dividerPosition,
	singleLogo,
}: Pick<AppLayoutHeaderBrandProps, 'dividerPosition'> & {
	singleLogo?: boolean;
}) => (
	<Box
		borderLeft
		css={{
			margin: singleLogo ? '0 1rem' : undefined,
			...packs.print.hidden,
		}}
		display={
			singleLogo
				? { xs: 'none', md: 'block' }
				: {
						xs: 'none',
						sm: dividerPosition === 'between' ? 'block' : undefined,
						lg: 'block',
				  }
		}
		height={singleLogo ? LOGO_HEIGHT : undefined}
	/>
);
