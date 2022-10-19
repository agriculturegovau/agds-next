import { Box, Flex, Stack } from '@ag.ds-next/box';
import { boxPalette, tokens, Spacing } from '@ag.ds-next/core';
import { proseBlockClassname } from '@ag.ds-next/prose';
import { Text } from '@ag.ds-next/text';

type Entries<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T][];

export const BreakpointsChart = () => {
	const breakpoints = tokens.breakpoint;
	return (
		<ul>
			{Object.entries(breakpoints).map(([token, value]) => {
				const label = `${token} - ${value}px`;
				return <li key={token}>{label}</li>;
			})}
		</ul>
	);
};

export const BorderWidthChart = () => {
	const borderWidths = tokens.borderWidth;

	return (
		<Flex gap={0.5} className={proseBlockClassname}>
			{(Object.entries(borderWidths) as Entries<typeof borderWidths>).map(
				([token, value]) => {
					const label = `${token} (${value}px)`;
					return (
						<Box key={token} padding={0.5} border borderWidth={token}>
							<Text>{label}</Text>
						</Box>
					);
				}
			)}
		</Flex>
	);
};

export const BorderRadiusChart = () => {
	return (
		<Box border rounded padding={0.5} className={proseBlockClassname}>
			A Box with rounded corners
		</Box>
	);
};

export const SpacingChart = () => {
	// copied from types for mapSpacing
	const spacingTokens: Spacing[] = [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6];

	return (
		<Stack gap={0.5} className={proseBlockClassname}>
			{spacingTokens.map((token) => {
				const label = `${token} (${token * 16}px)`;
				return (
					<Flex key={token} gap={0.25}>
						<Box
							css={{
								backgroundColor: boxPalette.systemInfoMuted,
								width: token * 16,
							}}
						></Box>
						<Text>{label}</Text>
					</Flex>
				);
			})}
		</Stack>
	);
};

export const MaxWidthChart = () => {
	return (
		<Stack gap={0.5} className={proseBlockClassname}>
			{Object.entries(tokens.maxWidth).map(([token, value]) => {
				const label = `${token} (${value})`;
				return (
					<Flex key={token} gap={0.25}>
						<Box
							padding={0.5}
							css={{
								backgroundColor: boxPalette.systemInfoMuted,
								width: '100%',
								maxWidth: value,
							}}
						>
							<Text>{label}</Text>
						</Box>
					</Flex>
				);
			})}
		</Stack>
	);
};

export const TypographyChart = () => {
	const fontSizes = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'] as const;
	return (
		<Flex gap={1} className={proseBlockClassname}>
			<Flex flexDirection="column" gap={1}>
				<Text fontSize="sm" fontWeight="bold">
					Default
				</Text>
				{fontSizes.map((size) => (
					<Box key={size} background="shade">
						<Text fontSize={size}>{size.toUpperCase()}</Text>
					</Box>
				))}
			</Flex>
			<Flex flexDirection="column" gap={1}>
				<Text fontSize="sm" fontWeight="bold">
					Heading
				</Text>
				{fontSizes.map((size) => (
					<Box key={size} background="shade">
						<Text fontSize={size} lineHeight="heading">
							{size.toUpperCase()}
						</Text>
					</Box>
				))}
			</Flex>
			<Flex flexDirection="column" gap={1}>
				<Text fontSize="sm" fontWeight="bold">
					Nospace
				</Text>
				{fontSizes.map((size) => (
					<Box key={size} background="shade">
						<Text fontSize={size} lineHeight="nospace">
							{size.toUpperCase()}
						</Text>
					</Box>
				))}
			</Flex>
		</Flex>
	);
};
