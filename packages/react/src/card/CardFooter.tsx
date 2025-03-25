import { type PropsWithChildren, useContext } from 'react';
import { Box } from '../box';
import { CardContext } from './Card';

export type CardFooterProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

export const CardFooter = ({ background, children }: CardFooterProps) => {
	const context = useContext(CardContext);

	return context?.clickable ? (
		<Box
			background={background}
			css={{ position: 'relative' }}
			paddingTop={1}
			paddingX={0.25}
		>
			{children}
		</Box>
	) : (
		<Box background={background} borderColor="muted" borderTop padding={1.5}>
			{children}
		</Box>
	);
};
