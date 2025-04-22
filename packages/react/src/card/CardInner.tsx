import { type ReactNode, useContext } from 'react';
import { Box } from '../box';
import { CardContext, cardStyleProps } from './Card';

export type CardInnerProps = { children: ReactNode };

export const CardInner = ({ children }: CardInnerProps) => {
	const context = useContext(CardContext);

	return (
		<Box
			{...(context?.footerOutside && !context?.hasFooter
				? cardStyleProps({
						background: context?.background,
						clickable: context?.clickable,
						shadow: context?.shadow,
				  })
				: undefined)}
			// This data-card attribute is used in the "legacy" Card when the footer is not provided
			data-card="inner"
			flexGrow={1}
			padding={1.5}
		>
			{children}
		</Box>
	);
};
