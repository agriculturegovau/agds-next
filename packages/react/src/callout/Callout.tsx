import { ElementType, PropsWithChildren, ReactNode } from 'react';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { CalloutTitle } from './CalloutTitle';
import {
	CalloutTone,
	calloutToneMap,
	CalloutVariant,
	calloutVariantMap,
} from './utils';

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
	tone?: CalloutTone;
	/** Variant will change the padding and gap */
	variant?: CalloutVariant;
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
	const { textGap, iconGap, padding, flexDirection, titlePaddingTop } =
		calloutVariantMap[variant];
	const { background, border, icon } = calloutToneMap(variant)[tone];

	/** Decides whether the neutral tone should use the norman 'shade' or 'shadeAlt' bg. */
	const onBodyAlt =
		tone === 'neutral' && (onBodyAltProp ?? backgroundProp === 'shadeAlt');

	return (
		<Flex
			as={as}
			background={onBodyAlt ? 'shadeAlt' : background}
			borderColor={border}
			borderLeft
			borderLeftWidth="xl"
			flexDirection={flexDirection}
			gap={iconGap}
			highContrastOutline
			padding={padding}
			rounded
		>
			{iconProp || icon ? <Flex flexShrink={0}>{iconProp || icon}</Flex> : null}
			<Stack css={{ paddingTop: titlePaddingTop }} gap={textGap}>
				{title ? <CalloutTitle variant={variant}>{title}</CalloutTitle> : null}
				{children}
			</Stack>
		</Flex>
	);
};
