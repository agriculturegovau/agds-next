import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { CardList, Card, CardInner } from '@ag.ds-next/card';
import { boxPalette } from './boxPalette';
import { mapSpacing, Spacing } from './tokens';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'core/Tokens',
};

export const Color = () => {
	const palettes = ['light', 'dark'] as const;
	const tokens = Object.keys(boxPalette) as (keyof typeof boxPalette)[];
	return (
		<Stack gap={1.5}>
			{palettes.map((palette) => (
				<Box key={palette} padding={1.5} palette={palette} background="body">
					<CardList templateColumns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
						{tokens.map((token) => (
							<Card key={token} as="li">
								<Box
									width="100%"
									height="6rem"
									background="body"
									css={{ backgroundColor: boxPalette[token] }}
								/>
								<CardInner>
									<Text fontSize="xs">{token}</Text>
								</CardInner>
							</Card>
						))}
					</CardList>
				</Box>
			))}
		</Stack>
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
