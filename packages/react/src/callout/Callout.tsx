import { ElementType, PropsWithChildren, ReactNode } from 'react';
import { BackgroundColor, BorderColor } from '../box';
import { Flex } from '../flex';
import { InfoFilledIcon, WarningFilledIcon } from '../icon';
import { Stack } from '../stack';
import { CalloutTitle } from './CalloutTitle';

export type CalloutProps = PropsWithChildren<{
	as?: ElementType;
	/** If Callout is placed on "bodyAlt" background, please set this to "shadeAlt". */
	background?: 'shade' | 'shadeAlt';
	/** Title will appear in bold */
	title?: string;
	/** Tone will change the background color */
	tone?: keyof typeof calloutToneMap;
}>;

export const Callout = ({
	as,
	children,
	title,
	tone = 'neutral',
}: CalloutProps) => {
	const { background, border, icon } = calloutToneMap[tone];

	return (
		<Flex
			as={as}
			flexDirection="row"
			gap={1}
			background={background}
			padding={1.5}
			borderColor={border}
			borderLeft
			borderLeftWidth="xl"
			highContrastOutline
		>
			{icon}
			<Stack gap={1}>
				{title ? <CalloutTitle>{title}</CalloutTitle> : null}
				{children}
			</Stack>
		</Flex>
	);
};

export const calloutToneMap: {
	[key: string]: {
		background: BackgroundColor;
		border: BorderColor;
		icon?: ReactNode;
	};
} = {
	neutral: {
		background: 'shade',
		border: 'border',
		icon: undefined,
	},
	neutralAlt: {
		background: 'shadeAlt',
		border: 'border',
		icon: undefined,
	},
	info: {
		background: 'info',
		border: 'info',
		icon: (
			<InfoFilledIcon
				aria-hidden="false"
				aria-label="Information"
				color="info"
			/>
		),
	},
	warning: {
		background: 'warning',
		border: 'warning',
		icon: (
			<WarningFilledIcon
				aria-hidden="false"
				aria-label="Warning"
				color="warning"
			/>
		),
	},
};
