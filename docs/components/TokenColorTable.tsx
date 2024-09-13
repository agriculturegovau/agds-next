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
	TableRow,
} from '@ag.ds-next/react/table';

const theme: Theme = {
	...goldTheme,
	...agTheme,
};

type ColorTokenGroup = {
	[tokenName: string]: {
		dark: string | undefined;
		darkName: string;
		light: string | undefined;
		lightName: string;
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
			dark: theme.darkForegroundText,
			darkName: 'White',
			light: theme.lightForegroundText,
			lightName: 'Dark grey',
			desc: 'Used for primary text like body text, headings, and labels to ensure they’re prominent and legible.',
		},
		muted: {
			dark: theme.darkForegroundMuted,
			darkName: 'DARK TODO',
			light: theme.lightForegroundMuted,
			lightName: 'LIGHT TODO',
			desc: 'Used for secondary text to make it less prominent.',
		},
		action: {
			dark: theme.darkForegroundAction,
			darkName: 'DARK TODO',
			light: theme.lightForegroundAction,
			lightName: 'LIGHT TODO',
			desc: 'Used to indicate interactive components like links and buttons. Don’t use the action colour for non-interactive components as it could confuse users. Also make sure you don’t rely on colour alone to indicate that a component is interactive, use additional visual cues.',
		},
	},
	background: {
		body: {
			dark: theme.darkBackgroundBody,
			darkName: 'DARK TODO',
			light: theme.lightBackgroundBody,
			lightName: 'White',
			desc: 'Used for the main background.',
		},
		bodyAlt: {
			dark: theme.darkBackgroundBodyAlt,
			darkName: 'DARK TODO',
			light: theme.lightBackgroundBodyAlt,
			lightName: 'LIGHT TODO',
			desc: 'Used as an alternative background.',
		},
		shade: {
			dark: theme.darkBackgroundShade,
			darkName: 'DARK TODO',
			light: theme.lightBackgroundShade,
			lightName: 'LIGHT TODO',
			desc: 'Used to help decorate and highlight interface components that sit on `body` background. Used to fill interactive components like buttons to emphasise the hover state hen the label changes to another WCAG compliant colour and displays an underline. Also used in Callouts, and zebra striping on tables.',
		},
		shadeAlt: {
			dark: theme.darkBackgroundShadeAlt,
			darkName: 'DARK TODO',
			light: theme.lightBackgroundShadeAlt,
			lightName: 'LIGHT TODO',
			desc: 'Used to help decorate and highlight interface components that sit on `bodyAlt` background. Used to fill interactive components like buttons to emphasise the hover state hen the label changes to another WCAG compliant colour and displays an underline. Also used in Callouts, and zebra striping on tables.',
		},
	},
	border: {
		border: {
			dark: theme.darkBorder,
			darkName: 'DARK TODO',
			light: theme.lightBorder,
			lightName: 'LIGHT TODO',
			desc: 'Used for borders of non-decorative interface components that require a 3:1 colour contrast ratio. For example, form input field borders are considered non-decorative because if they were removed, form input fields wouldn’t be recognisable.',
		},
		borderMuted: {
			dark: theme.darkBorderMuted,
			darkName: 'DARK TODO',
			light: theme.lightBorderMuted,
			lightName: 'LIGHT TODO',
			desc: 'Used for decorative interface components that don’t require a 3:1 colour contrast ratio.',
		},
	},
	system: {
		systemSuccess: {
			dark: theme.darkSystemSuccess,
			darkName: 'DARK TODO',
			light: theme.lightSystemSuccess,
			lightName: 'LIGHT TODO',
			desc: 'Used to indicate that a task was completed as expected.',
		},
		systemSuccessMuted: {
			dark: theme.darkSystemSuccessMuted,
			darkName: 'DARK TODO',
			light: theme.lightSystemSuccessMuted,
			lightName: 'LIGHT TODO',
			desc: 'Used as a background for a Component with a `success` tone.',
		},
		systemError: {
			dark: theme.darkSystemError,
			darkName: 'DARK TODO',
			light: theme.lightSystemError,
			lightName: 'LIGHT TODO',
			desc: 'Used to indicate that something is wrong, or a task has failed and needs urgent attention. For example, a form validation error.',
		},
		systemErrorMuted: {
			dark: theme.darkSystemErrorMuted,
			darkName: 'DARK TODO',
			light: theme.lightSystemErrorMuted,
			lightName: 'LIGHT TODO',
			desc: 'Used as a background for a Component with an `error` tone.',
		},
		systemInfo: {
			dark: theme.darkSystemInfo,
			darkName: 'DARK TODO',
			light: theme.lightSystemInfo,
			lightName: 'LIGHT TODO',
			desc: 'Used to provide addition information.',
		},
		systemInfoMuted: {
			dark: theme.darkSystemInfoMuted,
			darkName: 'DARK TODO',
			light: theme.lightSystemInfoMuted,
			lightName: 'LIGHT TODO',
			desc: 'Used as a background for a Component with an `info` tone.',
		},
		systemWarning: {
			dark: theme.darkSystemWarning,
			darkName: 'DARK TODO',
			light: theme.lightSystemWarning,
			lightName: 'LIGHT TODO',
			desc: 'Used to indicate that taking an action could be risky and that a user should be cautious.',
		},
		systemWarningMuted: {
			dark: theme.darkSystemWarningMuted,
			darkName: 'DARK TODO',
			light: theme.lightSystemWarningMuted,
			lightName: 'LIGHT TODO',
			desc: 'Used as a background for a Component with a `warning` tone.',
		},
	},
	miscellaneous: {
		selected: {
			dark: theme.darkSelected,
			darkName: 'DARK TODO',
			light: theme.lightSelected,
			lightName: 'LIGHT TODO',
			desc: 'Used to indicate if an item is selected or active. For example, selected navigation items and tabs.',
		},
		selectedMuted: {
			dark: theme.darkSelectedMuted,
			darkName: 'DARK TODO',
			light: theme.lightSelectedMuted,
			lightName: 'LIGHT TODO',
			desc: 'Used as a background to communicate the selected state of input components. It is not intended to be used to convey the active item in navigational components.',
		},
		overlay: {
			dark: theme.darkOverlay,
			darkName: 'DARK TODO',
			light: theme.lightOverlay,
			lightName: 'LIGHT TODO',
			desc: 'Used as an overlay for modals and other components that sit on top of the main background. The main content area beneath is considered disabled and not interactive.',
		},
		overlayMuted: {
			dark: theme.darkOverlayMuted,
			darkName: 'DARK TODO',
			light: theme.lightOverlayMuted,
			lightName: 'LIGHT TODO',
			desc: 'Used as an overlay for drawers that sit on top of the main background, where maintaining some visibility of the main content area beneath may be beneficial. The main content area beneath is considered disabled and not interactive.',
		},
		focus: {
			dark: theme.darkForegroundFocus,
			darkName: 'DARK TODO',
			light: theme.lightForegroundFocus,
			lightName: 'LIGHT TODO',
			desc: 'Used to highlight interactive components for those navigating via keyboard.',
		},
		accent: {
			dark: theme.darkAccent,
			darkName: 'DARK TODO',
			light: theme.lightAccent,
			lightName: 'LIGHT TODO',
			desc: 'A decorative colour used to accent branding colours.',
		},
	},
};

function ColorSquare({ color }: { color: string | undefined }) {
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
		color: string | undefined;
		colorAsName: string;
		desc: string;
		name: string;
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
						<TableRow>
							<TableHeader width="25%" scope="col">
								Name
							</TableHeader>
							<TableHeader width="25%" scope="col">
								Value
							</TableHeader>
							<TableHeader width="50%" scope="col">
								Description
							</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{tokens.map(({ color, colorAsName, desc, name }) => {
							return (
								<TableRow key={name}>
									<TableCell>
										<Flex gap={0.5} alignItems="center">
											<ColorSquare color={color} />
											{name}
										</Flex>
									</TableCell>
									<TableCell>{color}</TableCell>
									<TableCell>
										{colorAsName}. {desc}
									</TableCell>
								</TableRow>
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
			darkName: string;
			light: string | undefined;
			lightName: string;
			desc: string;
		};
	},
	activePalette: 'light' | 'dark'
) =>
	Object.entries(obj).map(
		([tokenName, { [activePalette]: color, desc, darkName, lightName }]) => ({
			color,
			colorAsName: activePalette === 'light' ? lightName : darkName,
			desc,
			name: tokenName,
		})
	);
