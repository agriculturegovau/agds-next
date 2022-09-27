import { PropsWithChildren } from 'react';
import { Stack } from '@ag.ds-next/box';
import { Card } from '@ag.ds-next/card';
import { Columns, Column } from '@ag.ds-next/columns';
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
			text: theme.lightForegroundText,
			muted: theme.lightForegroundMuted,
			action: theme.lightForegroundAction,
			focus: theme.lightForegroundFocus,
		},
		background: {
			body: theme.lightBackgroundBody,
			bodyAlt: theme.lightBackgroundBodyAlt,
			shade: theme.lightBackgroundShade,
			shadeAlt: theme.lightBackgroundShadeAlt,
		},
		border: {
			border: theme.lightBorder,
			borderMuted: theme.lightBorderMuted,
		},
		system: {
			accent: theme.lightAccent,
			systemSuccess: theme.lightSystemSuccess,
			systemSuccessMuted: theme.lightSystemSuccessMuted,
			systemError: theme.lightSystemError,
			systemErrorMuted: theme.lightSystemErrorMuted,
			systemInfo: theme.lightSystemInfo,
			systemInfoMuted: theme.lightSystemInfoMuted,
			systemWarning: theme.lightSystemWarning,
			systemWarningMuted: theme.lightSystemWarningMuted,
		},
	},
	dark: {
		foreground: {
			text: theme.darkForegroundText,
			muted: theme.darkForegroundMuted,
			action: theme.darkForegroundAction,
			focus: theme.darkForegroundFocus,
		},
		background: {
			body: theme.darkBackgroundBody,
			bodyAlt: theme.darkBackgroundBodyAlt,
			shade: theme.darkBackgroundShade,
			shadeAlt: theme.darkBackgroundShadeAlt,
		},
		border: {
			border: theme.darkBorder,
			borderMuted: theme.darkBorderMuted,
		},
		system: {
			accent: theme.darkAccent,
			systemSuccess: theme.darkSystemSuccess,
			systemSuccessMuted: theme.darkSystemSuccessMuted,
			systemError: theme.darkSystemError,
			systemErrorMuted: theme.darkSystemErrorMuted,
			systemInfo: theme.darkSystemInfo,
			systemInfoMuted: theme.darkSystemInfoMuted,
			systemWarning: theme.darkSystemWarning,
			systemWarningMuted: theme.darkSystemWarningMuted,
		},
	},
} as const;

const ColorCard = ({
	tokenName,
	color,
	children,
}: PropsWithChildren<{
	tokenName: string;
	color: string;
}>) => {
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
										'--agds-foreground-text': color,
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
						}
					)}
				</Columns>
			</Stack>

			<Stack gap={1}>
				<H3>Background colors</H3>
				<Columns as="ul" cols={cols}>
					{Object.entries(palettes[activePalette].background).map(
						([token, color]) => (
							<ColorCard tokenName={token} color={color} key={token} />
						)
					)}
				</Columns>
			</Stack>

			<Stack gap={1}>
				<H3>Border colors</H3>
				<Columns as="ul" cols={cols}>
					{Object.entries(palettes[activePalette].border).map(
						([tokenName, color]) => (
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
						)
					)}
				</Columns>
			</Stack>

			<Stack gap={1}>
				<H3>System</H3>
				<Columns as="ul" cols={cols}>
					{Object.entries(palettes[activePalette].system).map(
						([tokenName, color]) => {
							return (
								<ColorCard
									key={tokenName}
									tokenName={tokenName}
									color={color}
								/>
							);
						}
					)}
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
