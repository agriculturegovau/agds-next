import { type ReactNode, useContext } from 'react';
import { Box } from '../box';
import { CardContext, cardStyleProps } from './Card';

export type CardInnerProps = { children: ReactNode };

export const CardInner = ({ children }: CardInnerProps) => {
	const context = useContext(CardContext);

	return (
		<Box
			{...(context?.footerOutside
				? cardStyleProps({
						shadow: context?.shadow,
						clickable: context?.clickable,
						background: context?.background,
				  })
				: undefined)}
			data-card="inner"
			flexGrow={1}
			padding={1.5}
		>
			{children}
		</Box>
	);
};
