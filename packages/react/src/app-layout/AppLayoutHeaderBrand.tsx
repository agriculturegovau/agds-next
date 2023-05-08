import { Flex } from '../box';
import {
	boxPalette,
	mapSpacing,
	packs,
	tokens,
	useLinkComponent,
} from '../core';
import { Text } from '../text';

export type AppLayoutHeaderBrandProps = {
	href: string;
	logo: JSX.Element;
	heading: string;
	subLine?: string;
};

export function AppLayoutHeaderBrand({
	heading,
	subLine,
	logo,
	href,
}: AppLayoutHeaderBrandProps) {
	const Link = useLinkComponent();
	return (
		<Flex
			as={Link}
			href={href}
			flexDirection={{ xs: 'column', md: 'row' }}
			alignItems={{ xs: 'flex-start', md: 'center' }}
			gap={{ xs: 1, md: 0 }}
			focus
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
				<Text fontSize="lg" fontWeight="bold">
					{heading}
				</Text>
				{subLine ? (
					<Text color="muted" fontSize="xs">
						{subLine}
					</Text>
				) : null}
			</Flex>
		</Flex>
	);
}
