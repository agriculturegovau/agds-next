import { animated, useSpring } from '@react-spring/web';
import { Flex } from '../box';
import {
	boxPalette,
	mapResponsiveProp,
	mapSpacing,
	mq,
	tokens,
	useLinkComponent,
	usePrefersReducedMotion,
} from '../core';
import { Text } from '../text';
import { useAppLayoutContext } from './AppLayoutContext';
import { HEADER_HEIGHT } from './utils';

export type AppLayoutHeaderBrandProps = {
	href: string;
	logo: JSX.Element;
	heading: string;
	subLine: string;
};

export function AppLayoutHeaderBrand({
	heading,
	subLine,
	logo,
	href,
}: AppLayoutHeaderBrandProps) {
	const { isMenuOpen } = useAppLayoutContext();
	const Link = useLinkComponent();

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedStyles = useSpring({
		paddingLeft: isMenuOpen ? '0rem' : HEADER_HEIGHT.md,
		immediate: prefersReducedMotion,
	});

	return (
		<animated.div
			style={animatedStyles}
			css={{
				[tokens.mediaQuery.max.md]: {
					paddingLeft: '0 !important',
				},
			}}
		>
			<Flex
				as={Link}
				href={href}
				flexDirection={{ xs: 'column', md: 'row' }}
				justifyContent="flex-start"
				alignItems={{ xs: 'flex-start', lg: 'center' }}
				gap={{ xs: 1, md: 0 }}
				focus
				color="text"
				css={mq({
					textDecoration: 'none',
					svg: {
						display: 'block',
						height: mapResponsiveProp({ xs: '3.75rem', md: '3.5rem' }),
					},
				})}
			>
				{logo}
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="flex-start"
					css={{
						[tokens.mediaQuery.min.md]: {
							marginLeft: mapSpacing(1),
							paddingLeft: mapSpacing(1),
							borderLeft: `1px solid ${boxPalette.foregroundText}`,
						},
					}}
				>
					<Text fontSize="lg" fontWeight="bold">
						{heading}
					</Text>
					<Text color="muted" fontSize="xs">
						{subLine}
					</Text>
				</Flex>
			</Flex>
		</animated.div>
	);
}
