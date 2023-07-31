import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { boxPalette, tokens, Spacing, FontSize } from '@ag.ds-next/react/core';
import { proseBlockClassname } from '@ag.ds-next/react/prose';
import { Text } from '@ag.ds-next/react/text';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '@ag.ds-next/react/table';

type Entries<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T][];

export const BreakpointsTokenChart = () => {
	const breakpoints = tokens.breakpoint;
	return (
		<div className={proseBlockClassname}>
			<TableWrapper>
				<Table>
					<TableCaption>Our Breakpoint tokens</TableCaption>
					<TableHead>
						<tr>
							<TableHeader scope="col">Token</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader scope="col">Media query</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{Object.entries(breakpoints).map(([token, value]) => {
							return (
								<tr key={token}>
									<TableCell as="th" scope="row">
										{token}
									</TableCell>
									<TableCell>{value}px and up</TableCell>
									<TableCell>
										{value === 0 ? (
											'Mobile devices'
										) : (
											<code>{`@media (min-width: ${value}px) { ... }`}</code>
										)}
									</TableCell>
								</tr>
							);
						})}
					</TableBody>
				</Table>
			</TableWrapper>
		</div>
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
						<Flex
							key={token}
							alignItems="center"
							padding={0.5}
							border
							borderWidth={token}
						>
							{label}
						</Flex>
					);
				}
			)}
		</Flex>
	);
};

export const SpacingTokenChart = () => {
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

export const LineHeightChart = () => {
	const fontSizes = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'] as FontSize[];
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
