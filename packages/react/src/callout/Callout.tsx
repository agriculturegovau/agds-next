import { ElementType, PropsWithChildren } from 'react';
import { Flex } from '../flex';
import { InfoFilledIcon } from '../icon';
import { Stack } from '../stack';
import { CalloutTitle } from './CalloutTitle';

export type CalloutProps = PropsWithChildren<{
	as?: ElementType;
	/** Variant will change the padding and gap */
	variant?: keyof typeof calloutVariantMap;
	/** Title will appear in bold */
	title?: string;
	/** Tone will change the background color */
	tone?: keyof typeof calloutToneMap;
}>;

export const Callout = ({
	as,
	children,
	variant = 'regular',
	title,
	tone = 'neutral',
}: CalloutProps) => {
	const { background, border, icon } = calloutToneMap[tone];
	const { gap, padding } = calloutVariantMap[variant];

	return (
		<Flex
			as={as}
			flexDirection="row"
			gap={gap}
			background={background}
			padding={padding}
			borderColor={border}
			borderLeft
			borderLeftWidth="xl"
			highContrastOutline
		>
			{icon}
			<Stack gap={gap}>
				{title ? <CalloutTitle variant={variant}>{title}</CalloutTitle> : null}
				{children}
			</Stack>
		</Flex>
	);
};

export const calloutToneMap = {
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
} as const;

export const calloutVariantMap = {
	regular: {
		gap: 1,
		padding: 1.5,
	},
	compact: {
		gap: 0.5,
		padding: 1,
	},
} as const;
