import { PropsWithChildren } from 'react';
import { Text } from '../text';

export type CalloutTitleProps = PropsWithChildren<{
	as?: 'h2' | 'h3' | 'h4' | 'h5';
	variant: 'regular' | 'compact';
}>;

const fontSizeMap = {
	regular: 'md',
	compact: 'sm',
} as const;

export const CalloutTitle = ({
	as = 'h2',
	children,
	variant,
}: CalloutTitleProps) => (
	<Text
		as={as}
		fontSize={fontSizeMap[variant]}
		fontWeight="bold"
		lineHeight="heading"
	>
		{children}
	</Text>
);
