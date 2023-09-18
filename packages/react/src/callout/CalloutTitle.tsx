import { PropsWithChildren } from 'react';
import { Text } from '../text';
import { CalloutVariant, calloutVariantMap } from './utils';

export type CalloutTitleProps = PropsWithChildren<{
	as?: 'h2' | 'h3' | 'h4' | 'h5';
	variant?: CalloutVariant;
}>;

export const CalloutTitle = ({
	as = 'h2',
	children,
	variant = 'regular',
}: CalloutTitleProps) => (
	<Text
		as={as}
		fontSize={calloutVariantMap[variant].titleSize}
		fontWeight="bold"
		lineHeight="heading"
	>
		{children}
	</Text>
);
