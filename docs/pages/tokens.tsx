import { useState } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Card } from '@ag.ds-next/card';
import { Columns } from '@ag.ds-next/columns';
import { goldTheme } from '@ag.ds-next/core/src/goldTheme';
import { theme as agTheme } from '@ag.ds-next/ag-branding';
import { H1, H2, H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { PageContent } from '@ag.ds-next/content';
import { Switch } from '@ag.ds-next/switch';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';

type paletteName = 'light' | 'dark';

export default function TokensPage() {
	const [isDarkMode, setDarkMode] = useState<boolean>(false);

	return (
		<Box palette={isDarkMode ? 'dark' : 'light'} background="body">
			<DocumentTitle title="Tokens" />
			<AppLayout>
				<PageContent as="main" id="main-content">
					<Stack gap={1.5}>
						<Flex justifyContent="space-between">
							<H1>Design Tokens</H1>
							<Switch
								label="Dark palette"
								checked={isDarkMode}
								onChange={setDarkMode}
							/>
						</Flex>
						<Text as="p" fontSize="md">
							Our Design System tokens
						</Text>

						<H2>Color</H2>
						<ColorTable activePalette={isDarkMode ? 'dark' : 'light'} />
					</Stack>
				</PageContent>
			</AppLayout>
		</Box>
	);
}

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
				successMuted: { value: theme.successMuted },
				errorMuted: { value: theme.errorMuted },
				infoMuted: { value: theme.infoMuted },
				warningMuted: { value: theme.warningMuted },
			},
			border: {
				border: { value: theme.lightBorder },
				borderMuted: { value: theme.lightBorderMuted },
				borderInput: { value: theme.lightBorderInput },
			},
			system: {
				accent: { value: theme.accent },
				success: { value: theme.success },
				error: { value: theme.error },
				info: { value: theme.info },
				warning: { value: theme.warning },
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
				successMuted: { value: theme.successMuted },
				errorMuted: { value: theme.errorMuted },
				infoMuted: { value: theme.infoMuted },
				warningMuted: { value: theme.warningMuted },
			},
			border: {
				border: { value: theme.darkBorder },
				borderMuted: { value: theme.darkBorderMuted },
				borderInput: { value: theme.darkBorderInput },
			},
			system: {
				accent: { value: theme.accent },
				success: { value: theme.success },
				error: { value: theme.error },
				info: { value: theme.info },
				warning: { value: theme.warning },
			},
		},
	} as const;

	const cols = { xs: 1, sm: 2, md: 3, lg: 5 } as const;

	return (
		<Stack gap={3}>
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
				<H3>system</H3>
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
