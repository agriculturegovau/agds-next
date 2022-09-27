import { Stack } from '@ag.ds-next/box';
import { Card } from '@ag.ds-next/card';
import { Columns } from '@ag.ds-next/columns';
import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { goldTheme } from '@ag.ds-next/core/src/goldTheme';
import { theme as agTheme } from '@ag.ds-next/ag-branding';
import { H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

type paletteName = 'light' | 'dark';

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

export const ColorTable = ({
	activePalette,
}: {
	activePalette: paletteName;
}) => {
	const cols = { xs: 1, sm: 2, md: 3, lg: 5 } as const;

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

export const ColorBlock = ({ isDarkMode }: { isDarkMode: boolean }) => {
	return (
		<Columns cols={{ xs: 1, md: 3 }} id="color">
			<Column columnSpan={{ xs: 1, md: 2 }}>
				<Stack gap={2}>
					<Prose>
						<h2>Color</h2>
						<p>
							The colour palette is designed and tested to provide colour
							pairings that pass accessibility contrast ratios while still being
							easy to implement. This means that designers and developers using
							the system do not need to be concerned about if a colour will pass
							WCAG requirements in a particular circumstance.
						</p>

						<p>
							We use semantic naming so that all colours labeled as foreground
							colours in a theme. These colours are manually tested to pass
							accessibility contrast ratios when used with all background
							colours within a theme and vice versa.
						</p>

						<ColorTable activePalette={isDarkMode ? 'dark' : 'light'} />
					</Prose>
				</Stack>
			</Column>
		</Columns>
	);
};
