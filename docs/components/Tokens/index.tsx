import { Box, Flex, Stack } from '@ag.ds-next/box';
import { boxPalette, tokens } from '@ag.ds-next/core';
import { Card } from '@ag.ds-next/card';
import { Columns, Column } from '@ag.ds-next/columns';
import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { goldTheme } from '@ag.ds-next/core/src/goldTheme';
import { theme as agTheme } from '@ag.ds-next/ag-branding';
import { H2, H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

type paletteName = 'light' | 'dark';

export const BreakpointsChart = () => {
	return (
		<Flex gap={0.5} className={proseBlockClassname}>
			<Text>Coming soon</Text>
		</Flex>
	);
};

export const BorderRadiusChart = () => {
	return (
		<Flex gap={0.5} className={proseBlockClassname}>
			<Text>Coming soon</Text>
		</Flex>
	);
};

export const BorderWidthChart = () => {
	const borderWidths = tokens.borderWidth as const;
	return (
		<Flex gap={0.5} className={proseBlockClassname}>
			{Object.entries(borderWidths).map(([token, value]) => {
				const label = `${token} (${value}px)`;
				return (
					<Box key={token} padding={0.5} border borderWidth={token}>
						<Text>{label}</Text>
					</Box>
				);
			})}
		</Flex>
	);
};

export const ShadowsChart = () => {
	return (
		<Flex gap={0.5} className={proseBlockClassname}>
			<Text>Coming soon</Text>
		</Flex>
	);
};

export const SpacingChart = () => {
	// copied from types for mapSpacing
	const spacingTokens = [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6];
	return (
		<Stack gap={0.5} className={proseBlockClassname}>
			{spacingTokens.map((token) => {
				const label = `${token} (${token * 16}px)`;
				return (
					<Flex key={token} gap={0.25}>
						<Box
							css={{
								backgroundColor: boxPalette.systemInfo,
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

export const ColorTable = ({
	activePalette,
}: {
	activePalette: paletteName;
}) => {
	const theme = {
		...goldTheme,
		...agTheme,
	};

	const palettes = {
		light: {
			foreground: {
				text: { value: theme.lightForegroundText },
				muted: { value: theme.lightForegroundMuted },
				action: { value: theme.lightForegroundAction },
				focus: { value: theme.lightForegroundFocus },
			},
			background: {
				body: { value: theme.lightBackgroundBody },
				bodyAlt: { value: theme.lightBackgroundBodyAlt },
				shade: { value: theme.lightBackgroundShade },
				shadeAlt: { value: theme.lightBackgroundShadeAlt },
			},
			border: {
				border: { value: theme.lightBorder },
				borderMuted: { value: theme.lightBorderMuted },
			},
			system: {
				accent: { value: theme.lightAccent },
				systemSuccess: { value: theme.lightSystemSuccess },
				systemSuccessMuted: { value: theme.lightSystemSuccessMuted },
				systemError: { value: theme.lightSystemError },
				systemErrorMuted: { value: theme.lightSystemErrorMuted },
				systemInfo: { value: theme.lightSystemInfo },
				systemInfoMuted: { value: theme.lightSystemInfoMuted },
				systemWarning: { value: theme.lightSystemWarning },
				systemWarningMuted: { value: theme.lightSystemWarningMuted },
			},
		},
		dark: {
			foreground: {
				text: { value: theme.darkForegroundText },
				muted: { value: theme.darkForegroundMuted },
				action: { value: theme.darkForegroundAction },
				focus: { value: theme.darkForegroundFocus },
			},
			background: {
				body: { value: theme.darkBackgroundBody },
				bodyAlt: { value: theme.darkBackgroundBodyAlt },
				shade: { value: theme.darkBackgroundShade },
				shadeAlt: { value: theme.darkBackgroundShadeAlt },
			},
			border: {
				border: { value: theme.darkBorder },
				borderMuted: { value: theme.darkBorderMuted },
			},
			system: {
				accent: { value: theme.darkAccent },
				systemSuccess: { value: theme.darkSystemSuccess },
				systemSuccessMuted: { value: theme.darkSystemSuccessMuted },
				systemError: { value: theme.darkSystemError },
				systemErrorMuted: { value: theme.darkSystemErrorMuted },
				systemInfo: { value: theme.darkSystemInfo },
				systemInfoMuted: { value: theme.darkSystemInfoMuted },
				systemWarning: { value: theme.darkSystemWarning },
				systemWarningMuted: { value: theme.darkSystemWarningMuted },
			},
		},
	} as const;

	const cols = { xs: 1, sm: 2, md: 3, lg: 4 } as const;

	return (
		<Stack gap={2} className={proseBlockClassname}>
			<Stack gap={1}>
				<H3>Foreground colors</H3>
				<Columns as="ul" cols={cols}>
					{Object.entries(palettes[activePalette].foreground).map(
						([tokenName, color]) => {
							return (
								<Card
									as="li"
									key={tokenName}
									shadow
									css={{
										'--agds-foreground-text': color.value,
									}}
								>
									<Stack width="100%" padding={1}>
										<Text fontWeight="bold" fontSize="xs">
											{tokenName}
										</Text>
										<Text>{color.value}</Text>
									</Stack>
								</Card>
							);
						}
					)}
				</Columns>
			</Stack>

			<Stack gap={1}>
				<H3>Background colors</H3>
				<Columns as="ul" cols={cols}>
					{Object.entries(palettes[activePalette].background).map(
						([token, color]) => (
							<ColorCard tokenName={token} color={color.value} key={token} />
						)
					)}
				</Columns>
			</Stack>

			<Stack gap={1}>
				<H3>Border colors</H3>
				<Columns as="ul" cols={cols}>
					{Object.keys(palettes[activePalette].border).map((tokenName) => {
						const color = palettes[activePalette]['border'][tokenName].value;

						return (
							<Card
								as="li"
								key={tokenName}
								css={{
									borderColor: color,
								}}
							>
								<Stack width="100%" padding={1}>
									<Text fontWeight="bold" fontSize="xs">
										{tokenName}
									</Text>

									<Text>{color}</Text>
								</Stack>
							</Card>
						);
					})}
				</Columns>
			</Stack>

			<Stack gap={1}>
				<H3>System</H3>
				<Columns as="ul" cols={cols}>
					{Object.keys(palettes[activePalette].system).map((token) => {
						const color = palettes[activePalette]['system'][token].value;
						return <ColorCard key={token} tokenName={token} color={color} />;
					})}
				</Columns>
			</Stack>
		</Stack>
	);
};

const ColorCard = ({ tokenName, varName, color, children }) => {
	return (
		<Card
			as="li"
			shadow
			css={{
				backgroundColor: color,
			}}
		>
			<Stack width="100%" padding={1}>
				<Text fontWeight="bold" fontSize="xs">
					{tokenName}
				</Text>
				<Text>{varName}</Text>
				<Text>{color}</Text>
				{children}
			</Stack>
		</Card>
	);
};

export const TypographyChart = () => {
	return (
		<Flex gap={1} className={proseBlockClassname}>
			<Flex flexDirection="column" gap={1}>
				<Text fontSize="sm" fontWeight="bold">
					Default
				</Text>
				{['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
					<Box key={size} background="shade">
						<Text fontSize={size}>{size.toUpperCase()}</Text>
					</Box>
				))}
			</Flex>
			<Flex flexDirection="column" gap={1}>
				<Text fontSize="sm" fontWeight="bold">
					Heading
				</Text>
				{['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
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
				{['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
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
