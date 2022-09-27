import { PropsWithChildren } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { Columns, Column } from '@ag.ds-next/columns';
import { Prose, proseBlockClassname } from '@ag.ds-next/prose';
import { goldTheme } from '@ag.ds-next/core/src/goldTheme';
import { theme as agTheme } from '@ag.ds-next/ag-branding';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '@ag.ds-next/table';

type paletteName = 'light' | 'dark';

const theme = {
	...goldTheme,
	...agTheme,
};

const palettes = {
	light: {
		foreground: {
			text: {
				value: theme.lightForegroundText,
				desc: 'Used for primary text like body text, headings, and labels to ensure they’re prominent and legible.',
			},
			muted: {
				value: theme.lightForegroundMuted,
				desc: 'Used for secondary text to make it less prominent.',
			},
			action: {
				value: theme.lightForegroundAction,
				desc: 'Used to indicate interactive components like links and buttons. Don’t use the action colour for non-interactive components as it could confuse users. Also make sure you don’t rely on colour alone to indicate that a component is interactive, use additional visual cues.',
			},
			focus: {
				value: theme.lightForegroundFocus,
				desc: 'Used to highlight interactive components for those navigating via keyboard.',
			},
		},
		background: {
			body: {
				value: theme.lightBackgroundBody,
				desc: 'Used for the main background.',
			},
			bodyAlt: {
				value: theme.lightBackgroundBodyAlt,
				desc: 'Used to help differentiate or highlight interface components that sit on `body` background. For example, hover states for interactive components, callouts, and Zebra stripes on tables.',
			},
			shade: {
				value: theme.lightBackgroundShade,
				desc: 'Used as an alternative background.',
			},
			shadeAlt: {
				value: theme.lightBackgroundShadeAlt,
				desc: 'Used to help differentiate or highlight interface components that sit on `bodyAlt` background. For example, hover states for interactive components, callouts, and Zebra stripes on tables.',
			},
		},
		border: {
			border: {
				value: theme.lightBorder,
				desc: 'Used for borders of non-decorative interface components that require a 3:1 colour contrast ratio. For example, form input field borders are considered non-decorative because if they were removed, form input fields wouldn’t be recognisable.',
			},
			borderMuted: {
				value: theme.lightBorderMuted,
				desc: 'Used for decorative interface components that don’t require a 3:1 colour contrast ratio.',
			},
		},
		system: {
			accent: { value: theme.lightAccent, desc: '' },
			systemSuccess: {
				value: theme.lightSystemSuccess,
				desc: 'Used to indicate that a task was completed as expected.',
			},
			systemSuccessMuted: {
				value: theme.lightSystemSuccessMuted,
				desc: 'Used as a background for a Component with an `success` tone.',
			},
			systemError: {
				value: theme.lightSystemError,
				desc: 'Used to indicate that something is wrong, or a task has failed and needs urgent attention. For example, a form validation error.',
			},
			systemErrorMuted: {
				value: theme.lightSystemErrorMuted,
				desc: 'Used as a background for a Component with an `error` tone.',
			},
			systemInfo: {
				value: theme.lightSystemInfo,
				desc: 'Used to provide addition information.',
			},
			systemInfoMuted: {
				value: theme.lightSystemInfoMuted,
				desc: 'Used as a background for a Component with an `info` tone.',
			},
			systemWarning: {
				value: theme.lightSystemWarning,
				desc: 'Used to indicate that taking an action could be risky and that a user should be cautious.',
			},
			systemWarningMuted: {
				value: theme.lightSystemWarningMuted,
				desc: 'Used as a background for a Component with an `warning` tone.',
			},
		},
	},
	dark: {
		foreground: {
			text: { value: theme.darkForegroundText, desc: '' },
			muted: { value: theme.darkForegroundMuted, desc: '' },
			action: { value: theme.darkForegroundAction, desc: '' },
			focus: { value: theme.darkForegroundFocus, desc: '' },
		},
		background: {
			body: { value: theme.darkBackgroundBody, desc: '' },
			bodyAlt: { value: theme.darkBackgroundBodyAlt, desc: '' },
			shade: { value: theme.darkBackgroundShade, desc: '' },
			shadeAlt: { value: theme.darkBackgroundShadeAlt, desc: '' },
		},
		border: {
			border: { value: theme.darkBorder, desc: '' },
			borderMuted: { value: theme.darkBorderMuted, desc: '' },
		},
		system: {
			accent: { value: theme.darkAccent, desc: '' },
			systemSuccess: { value: theme.darkSystemSuccess, desc: '' },
			systemSuccessMuted: { value: theme.darkSystemSuccessMuted, desc: '' },
			systemError: { value: theme.darkSystemError, desc: '' },
			systemErrorMuted: { value: theme.darkSystemErrorMuted, desc: '' },
			systemInfo: { value: theme.darkSystemInfo, desc: '' },
			systemInfoMuted: { value: theme.darkSystemInfoMuted, desc: '' },
			systemWarning: { value: theme.darkSystemWarning, desc: '' },
			systemWarningMuted: { value: theme.darkSystemWarningMuted, desc: '' },
		},
	},
} as const;

export const ColorTable = ({
	activePalette,
}: {
	activePalette: paletteName;
}) => {
	return (
		<Stack gap={2} className={proseBlockClassname}>
			<TableWrapper>
				<Table>
					<TableCaption>Foreground colors</TableCaption>
					<TableHead>
						<tr>
							<TableHeader scope="col">Name</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader width="50%" scope="col">
								Description
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{Object.entries(palettes[activePalette].foreground).map(
							([tokenName, { value: color, desc }]) => {
								return (
									<tr key={tokenName}>
										<TableCell>{tokenName}</TableCell>
										<TableCell>
											<Flex gap={0.5} alignItems="center">
												<div
													css={{
														width: 32,
														height: 32,
														backgroundColor: color,
													}}
												/>

												{color}
											</Flex>
										</TableCell>
										<TableCell>{desc}</TableCell>
									</tr>
								);
							}
						)}
					</TableBody>
				</Table>
			</TableWrapper>

			<TableWrapper>
				<Table>
					<TableCaption>Background colors</TableCaption>
					<TableHead>
						<tr>
							<TableHeader scope="col">Name</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader width="50%" scope="col">
								Description
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{Object.entries(palettes[activePalette].background).map(
							([tokenName, { value: color, desc }]) => {
								return (
									<tr key={tokenName}>
										<TableCell>{tokenName}</TableCell>
										<TableCell>
											<Flex gap={0.5} alignItems="center">
												<div
													css={{
														width: 32,
														height: 32,
														backgroundColor: color,
													}}
												/>

												{color}
											</Flex>
										</TableCell>
										<TableCell>{desc}</TableCell>
									</tr>
								);
							}
						)}
					</TableBody>
				</Table>
			</TableWrapper>

			<TableWrapper>
				<Table>
					<TableCaption>Border colors</TableCaption>
					<TableHead>
						<tr>
							<TableHeader scope="col">Name</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader width="50%" scope="col">
								Description
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{Object.entries(palettes[activePalette].border).map(
							([tokenName, { value: color, desc }]) => {
								return (
									<tr key={tokenName}>
										<TableCell>{tokenName}</TableCell>
										<TableCell>
											<Flex gap={0.5} alignItems="center">
												<div
													css={{
														width: 32,
														height: 32,
														backgroundColor: color,
													}}
												/>

												{color}
											</Flex>
										</TableCell>
										<TableCell>{desc}</TableCell>
									</tr>
								);
							}
						)}
					</TableBody>
				</Table>
			</TableWrapper>

			<TableWrapper>
				<Table>
					<TableCaption>System colors</TableCaption>
					<TableHead>
						<tr>
							<TableHeader scope="col">Name</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader width="50%" scope="col">
								Description
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{Object.entries(palettes[activePalette].system).map(
							([tokenName, { value: color, desc }]) => {
								return (
									<tr key={tokenName}>
										<TableCell>{tokenName}</TableCell>
										<TableCell>
											<Flex gap={0.5} alignItems="center">
												<div
													css={{
														width: 32,
														height: 32,
														backgroundColor: color,
													}}
												/>

												{color}
											</Flex>
										</TableCell>
										<TableCell>{desc}</TableCell>
									</tr>
								);
							}
						)}
					</TableBody>
				</Table>
			</TableWrapper>
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
