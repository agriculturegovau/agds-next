import { Box, Stack, Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { CardList, Card, CardInner } from '@ag.ds-next/card';
import { boxPalette } from './boxPalette';
import { mapSpacing, spacing } from './tokens';

export default {
	title: 'core/Tokens',
};

export const Color = () => {
	const palettes = ['light', 'dark'];
	return (
		<Stack gap={1.5}>
			{palettes.map((p) => (
				<Box key={p} padding={1.5} palette={p} background="body">
					<CardList templateColumns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
						{Object.keys(boxPalette).map((token) => (
							<Card key={token} as="li" gap="sm" alignItems="center">
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

export const Spacing = () => {
	return (
		<Stack as="ul" gap="xs" fontSize="xs">
			{Object.keys(spacing).map((spacingToken) => (
				<Flex key={spacingToken} as="li" gap="xxs" alignItems="center">
					<Box
						height="1rem"
						background="bodyAlt"
						width={mapSpacing(spacingToken)}
					/>
					<Text fontSize="xs">
						{spacingToken} {mapSpacing(spacingToken)}
					</Text>
				</Flex>
			))}
		</Stack>
	);
};
