import { ElementType, PropsWithChildren, ReactNode } from 'react';
import { Flex } from '../flex';
import { InfoFilledIcon } from '../icon';
import { Stack } from '../stack';
import { CalloutTitle } from './CalloutTitle';

export type CalloutProps = PropsWithChildren<{
	as?: ElementType;
	/** @deprecated Use `onBodyAlt` instead to flag if the Callout is placed on an area with a "bodyAlt" background. */
	background?: 'shade' | 'shadeAlt';
	/** Specify a custom icon to overwrite the default icon */
	icon?: ReactNode;
	/** If the Callout component is placed on a page with `bodyAlt` background, set this prop to `true`. */
	onBodyAlt?: boolean;
	/** Title will appear in bold */
	title?: string;
	/** Tone will change the background color */
	tone?: keyof typeof calloutToneMap;
	/** Variant will change the padding and gap */
	variant?: keyof typeof calloutVariantMap;
}>;

export const Callout = ({
	as,
	background: backgroundProp,
	children,
	icon: iconProp,
	onBodyAlt: onBodyAltProp,
	title,
	tone = 'neutral',
	variant = 'regular',
}: CalloutProps) => {
	const { background, border, icon } = calloutToneMap[tone];
	const { gap, padding } = calloutVariantMap[variant];

	/** Decides whether the neutral tone should use the norman 'shade' or 'shadeAlt' bg. */
	const onBodyAlt =
		tone === 'neutral' && (onBodyAltProp ?? backgroundProp === 'shadeAlt');

	return (
		<Flex
			as={as}
			flexDirection="row"
			rounded
			gap={gap}
			background={onBodyAlt ? 'shadeAlt' : background}
			borderColor={border}
			padding={padding}
			borderLeft
			borderLeftWidth="xl"
			highContrastOutline
		>
			{iconProp || icon ? <Flex flexShrink={0}>{iconProp || icon}</Flex> : null}
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
