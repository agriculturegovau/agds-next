import { PropsWithChildren } from 'react';
import { mq, tokens } from '../core';
import { Text } from '../text';

export type PageAlertTitleProps = PropsWithChildren<{
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	/** @deprecated use `hasCloseButton` instead */
	hasDismissButton?: boolean;
	hasCloseButton?: boolean;
}>;

export const PageAlertTitle = ({
	as = 'h2',
	children,
	hasDismissButton,
	hasCloseButton,
}: PageAlertTitleProps) => {
	if (hasDismissButton !== undefined) {
		console.warn('hasDismissButton is deprecated. Use hasCloseButton instead.');
	}
	return (
		<Text
			as={as}
			fontSize="lg"
			lineHeight="heading"
			fontWeight="bold"
			css={mq({
				marginRight: hasCloseButton || hasDismissButton ? '2.5rem' : undefined,
				[tokens.mediaQuery.min.sm]: {
					marginRight: '0',
				},
			})}
		>
			{children}
		</Text>
	);
};
