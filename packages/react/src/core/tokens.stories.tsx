import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { Card, CardInner } from '../card';
import { H2 } from '../heading';
import { Prose } from '../prose';
import { Columns } from '../columns';
import { ShadowTokenChart } from '../../../../docs/components/TokenCharts';
import { boxPalette } from './boxPalette';
import { mapSpacing, Spacing } from './tokens';

export default {
	title: 'foundations/Core/Tokens',
};

export const Color = () => {
	const palettes = ['light', 'dark'] as const;

	const boxPaletteTokens = Object.keys(
		boxPalette
	) as (keyof typeof boxPalette)[];

	return (
		<Stack gap={1.5}>
			{palettes.map((palette) => (
				<Stack
					key={palette}
					gap={2}
					padding={1.5}
					palette={palette}
					background="body"
				>
					<H2>{palette}</H2>
					<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
						{boxPaletteTokens.map((token) => (
							<Card key={token} as="li" shadow>
								<Box
									width="100%"
									height="6rem"
									background="body"
									css={{ backgroundColor: boxPalette[token] }}
								/>
								<Box borderColor="muted" borderTop>
									<CardInner>
										<Text fontSize="xs">{token}</Text>
									</CardInner>
								</Box>
							</Card>
						))}
					</Columns>
				</Stack>
			))}
		</Stack>
	);
};

const BackgroundRow = ({ palette }: { palette: 'light' | 'dark' }) => (
	<Flex palette={palette} width="100%">
		<Flex padding={2} background="body" flexGrow={1}>
			<Box flexGrow={1} color="text" paddingY={2} paddingX={1}>
				backgroundBody
			</Box>
			<Box
				flexGrow={1}
				color="text"
				paddingY={2}
				paddingX={1}
				background="shade"
			>
				backgroundShade
			</Box>
		</Flex>
		<Flex padding={2} background="bodyAlt" flexGrow={1}>
			<Box flexGrow={1} color="text" paddingY={2} paddingX={1}>
				backgroundBodyAlt
			</Box>
			<Box
				flexGrow={1}
				color="text"
				paddingY={2}
				paddingX={1}
				background="shadeAlt"
			>
				backgroundShadeAlt
			</Box>
		</Flex>
	</Flex>
);

export const Backgrounds = () => {
	return (
		<>
			<Prose>
				<h2>Backgrounds</h2>
				<p>A visualisation of how body and shade backgrounds work together.</p>
			</Prose>
			<BackgroundRow palette="light" />
			<BackgroundRow palette="dark" />
		</>
	);
};

export const Space = () => {
	const tokens: Spacing[] = [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6];
	return (
		<Stack as="ul" gap={1} fontSize="xs">
			{tokens.map((token) => (
				<Flex key={token} as="li" gap={1} alignItems="center">
					<Box height="1rem" background="bodyAlt" width={mapSpacing(token)} />
					<Text fontSize="xs">
						{token} ({mapSpacing(token)})
					</Text>
				</Flex>
			))}
		</Stack>
	);
};

export const Shadow = () => <ShadowTokenChart />;
