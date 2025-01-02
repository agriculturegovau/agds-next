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

const meta = {
	title: 'foundations/Core/Tokens',
};

export default meta;

export const Color = () => {
	const palettes = ['light', 'dark'] as const;

	const boxPaletteTokens = Object.keys(
		boxPalette
	) as (keyof typeof boxPalette)[];

	return (
		<Stack gap={1.5}>
			{palettes.map((palette) => (
				<Stack
					background="body"
					gap={2}
					key={palette}
					padding={1.5}
					palette={palette}
				>
					<H2>{palette}</H2>
					<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
						{boxPaletteTokens.map((token) => (
							<Card as="li" key={token} shadow>
								<Box
									background="body"
									css={{ backgroundColor: boxPalette[token] }}
									height="6rem"
									width="100%"
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
		<Flex background="body" flexGrow={1} padding={2}>
			<Box color="text" flexGrow={1} paddingX={1} paddingY={2}>
				backgroundBody
			</Box>
			<Box
				background="shade"
				color="text"
				flexGrow={1}
				paddingX={1}
				paddingY={2}
			>
				backgroundShade
			</Box>
		</Flex>
		<Flex background="bodyAlt" flexGrow={1} padding={2}>
			<Box color="text" flexGrow={1} paddingX={1} paddingY={2}>
				backgroundBodyAlt
			</Box>
			<Box
				background="shadeAlt"
				color="text"
				flexGrow={1}
				paddingX={1}
				paddingY={2}
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
		<Stack as="ul" fontSize="xs" gap={1}>
			{tokens.map((token) => (
				<Flex alignItems="center" as="li" gap={1} key={token}>
					<Box background="bodyAlt" height="1rem" width={mapSpacing(token)} />
					<Text fontSize="xs">
						{token} ({mapSpacing(token)})
					</Text>
				</Flex>
			))}
		</Stack>
	);
};

export const Shadow = () => <ShadowTokenChart />;
