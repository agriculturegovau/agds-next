import {
	Column,
	Columns,
	Flex,
	goldTheme,
	Prose,
	proseBlockClassname,
	Stack,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
	theme as agTheme,
} from '@ag.ds-next/design-system';

type paletteName = 'light' | 'dark';

const theme = {
	...goldTheme,
	...agTheme,
};

const palettes = {
	foreground: {
		text: {
			light: theme.lightForegroundText,
			dark: theme.darkForegroundText,
			desc: 'Used for primary text like body text, headings, and labels to ensure they’re prominent and legible.',
		},
		muted: {
			light: theme.lightForegroundMuted,
			dark: theme.darkForegroundMuted,
			desc: 'Used for secondary text to make it less prominent.',
		},
		action: {
			light: theme.lightForegroundAction,
			dark: theme.darkForegroundAction,
			desc: 'Used to indicate interactive components like links and buttons. Don’t use the action colour for non-interactive components as it could confuse users. Also make sure you don’t rely on colour alone to indicate that a component is interactive, use additional visual cues.',
		},
		focus: {
			light: theme.lightForegroundFocus,
			dark: theme.darkForegroundFocus,
			desc: 'Used to highlight interactive components for those navigating via keyboard.',
		},
	},
	background: {
		body: {
			light: theme.lightBackgroundBody,
			dark: theme.darkBackgroundBody,
			desc: 'Used for the main background.',
		},
		bodyAlt: {
			light: theme.lightBackgroundBodyAlt,
			dark: theme.darkBackgroundBodyAlt,
			desc: 'Used to help differentiate or highlight interface components that sit on `body` background. For example, hover states for interactive components, callouts, and Zebra stripes on tables.',
		},
		shade: {
			light: theme.lightBackgroundShade,
			dark: theme.darkBackgroundShade,
			desc: 'Used as an alternative background.',
		},
		shadeAlt: {
			light: theme.lightBackgroundShadeAlt,
			dark: theme.darkBackgroundShadeAlt,
			desc: 'Used to help differentiate or highlight interface components that sit on `bodyAlt` background. For example, hover states for interactive components, callouts, and Zebra stripes on tables.',
		},
	},
	border: {
		border: {
			light: theme.lightBorder,
			dark: theme.darkBorder,
			desc: 'Used for borders of non-decorative interface components that require a 3:1 colour contrast ratio. For example, form input field borders are considered non-decorative because if they were removed, form input fields wouldn’t be recognisable.',
		},
		borderMuted: {
			light: theme.lightBorderMuted,
			dark: theme.darkBorderMuted,
			desc: 'Used for decorative interface components that don’t require a 3:1 colour contrast ratio.',
		},
	},
	system: {
		accent: { light: theme.lightAccent, dark: theme.darkAccent, desc: '' },
		systemSuccess: {
			light: theme.lightSystemSuccess,
			dark: theme.darkSystemSuccess,
			desc: 'Used to indicate that a task was completed as expected.',
		},
		systemSuccessMuted: {
			light: theme.lightSystemSuccessMuted,
			dark: theme.darkSystemSuccessMuted,
			desc: 'Used as a background for a Component with an `success` tone.',
		},
		systemError: {
			light: theme.lightSystemError,
			dark: theme.darkSystemError,
			desc: 'Used to indicate that something is wrong, or a task has failed and needs urgent attention. For example, a form validation error.',
		},
		systemErrorMuted: {
			light: theme.lightSystemErrorMuted,
			dark: theme.darkSystemErrorMuted,
			desc: 'Used as a background for a Component with an `error` tone.',
		},
		systemInfo: {
			light: theme.lightSystemInfo,
			dark: theme.darkSystemInfo,
			desc: 'Used to provide addition information.',
		},
		systemInfoMuted: {
			light: theme.lightSystemInfoMuted,
			dark: theme.darkSystemInfoMuted,
			desc: 'Used as a background for a Component with an `info` tone.',
		},
		systemWarning: {
			light: theme.lightSystemWarning,
			dark: theme.darkSystemWarning,
			desc: 'Used to indicate that taking an action could be risky and that a user should be cautious.',
		},
		systemWarningMuted: {
			light: theme.lightSystemWarningMuted,
			dark: theme.darkSystemWarningMuted,
			desc: 'Used as a background for a Component with an `warning` tone.',
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
						{Object.entries(palettes.foreground).map(
							([tokenName, { [activePalette]: color, desc }]) => {
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
						{Object.entries(palettes.background).map(
							([tokenName, { [activePalette]: color, desc }]) => {
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
						{Object.entries(palettes.border).map(
							([tokenName, { [activePalette]: color, desc }]) => {
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
						{Object.entries(palettes.system).map(
							([tokenName, { [activePalette]: color, desc }]) => {
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
