import { PropsWithChildren } from 'react';
import { mq, tokens } from '../core';
import { Text } from '../text';

export type PageAlertTitleProps = PropsWithChildren<{
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	hasDismissButton?: boolean;
}>;

export const PageAlertTitle = ({
	as = 'h3',
	children,
	hasDismissButton,
}: PageAlertTitleProps) => (
	<Text
		as={as}
		fontSize="lg"
		lineHeight="heading"
		fontWeight="bold"
		css={mq({
			marginRight: hasDismissButton ? '2.5rem' : undefined,
			[tokens.mediaQuery.min.sm]: {
				marginRight: '0',
			},
		})}
	>
		{children}
	</Text>
);
