import { Flex } from '@ag.ds-next/react/flex';
import { proseBlockClassname } from '@ag.ds-next/react/prose';
import { goldTheme, Theme } from '@ag.ds-next/react/core';
import { theme as agTheme } from '@ag.ds-next/react/ag-branding';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '@ag.ds-next/react/table';

const theme: Theme = {
	...goldTheme,
	...agTheme,
};

type ColorTokenGroup = {
	[tokenName: string]: {
		dark: string | undefined;
		light: string | undefined;
		desc: string;
	};
};

export const colourTokens: {
	foreground: ColorTokenGroup;
	background: ColorTokenGroup;
	border: ColorTokenGroup;
	system: ColorTokenGroup;
	miscellaneous: ColorTokenGroup;
} = {
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
		selected: {
			light: theme.lightSelected,
			dark: theme.darkSelected,
			desc: 'Used to indicate if an item is selected or active. For example, selected navigation items and tabs.',
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
			desc: 'Used as an alternative background.',
		},
		shade: {
			light: theme.lightBackgroundShade,
			dark: theme.darkBackgroundShade,
			desc: 'Used to help differentiate or highlight interface components that sit on `body` background. For example, hover states for interactive components, callouts, and Zebra stripes on tables.',
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
	miscellaneous: {
		overlay: {
			light: theme.lightOverlay,
			dark: theme.darkOverlay,
			desc: 'Used as an overlay for modals and other components that sit on top of the main background. The main content area beneath is considered disabled and not interactive.',
		},
		focus: {
			light: theme.lightForegroundFocus,
			dark: theme.darkForegroundFocus,
			desc: 'Used to highlight interactive components for those navigating via keyboard.',
		},
		accent: {
			light: theme.lightAccent,
			dark: theme.darkAccent,
			desc: 'Used to add a highlight of branding colours to navigation elements',
		},
	},
};

function ColorSquare({ color }: { color?: string }) {
	return (
		<div
			css={{
				width: 32,
				height: 32,
				backgroundColor: color,
			}}
		/>
	);
}

export const ColorTable = ({
	'aria-labelledby': ariaLabelledby,
	'aria-describedby': ariaDescribedby,
	tokens,
}: {
	'aria-labelledby': string;
	'aria-describedby': string;
	tokens: {
		name: string;
		desc: string;
		color: string | undefined;
	}[];
}) => {
	return (
		<div className={proseBlockClassname}>
			<TableWrapper>
				<Table
					aria-labelledby={ariaLabelledby}
					aria-describedby={ariaDescribedby}
				>
					<TableHead>
						<tr>
							<TableHeader width="25%" scope="col">
								Name
							</TableHeader>
							<TableHeader width="25%" scope="col">
								Value
							</TableHeader>
							<TableHeader width="50%" scope="col">
								Description
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{tokens.map(({ name, color, desc }) => {
							return (
								<tr key={name}>
									<TableCell>
										<Flex gap={0.5} alignItems="center">
											<ColorSquare color={color} />
											{name}
										</Flex>
									</TableCell>
									<TableCell>{color}</TableCell>
									<TableCell>{desc}</TableCell>
								</tr>
							);
						})}
					</TableBody>
				</Table>
			</TableWrapper>
		</div>
	);
};

export const getTokensArrayFromObject = (
	obj: {
		[tokenName: string]: {
			dark: string | undefined;
			light: string | undefined;
			desc: string;
		};
	},
	activePalette: 'light' | 'dark'
) =>
	Object.entries(obj).map(([tokenName, { [activePalette]: color, desc }]) => ({
		name: tokenName,
		desc,
		color,
	}));
