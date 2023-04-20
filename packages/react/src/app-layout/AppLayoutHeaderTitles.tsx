import { Flex } from '../box';
import {
	boxPalette,
	mapResponsiveProp,
	mapSpacing,
	mq,
	tokens,
	useLinkComponent,
} from '../core';
import { Text } from '../text';

export type AppLayoutHeaderTitlesProps = {
	href: string;
	logo: JSX.Element;
	subTitle: string;
	title: string;
};

export function AppLayoutHeaderTitles({
	title,
	subTitle,
	logo,
	href,
}: AppLayoutHeaderTitlesProps) {
	const Link = useLinkComponent();
	return (
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
					{title}
				</Text>
				<Text color="muted" fontSize="xs">
					{subTitle}
				</Text>
			</Flex>
		</Flex>
	);
}
