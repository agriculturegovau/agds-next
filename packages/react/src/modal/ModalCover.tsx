import { keyframes } from '@emotion/react';
import { forwardRef, ReactNode } from 'react';
import { tokens, boxPalette } from '../core';

export type ModalCoverProps = { children: ReactNode };

export const ModalCover = forwardRef<HTMLDivElement, ModalCoverProps>(
	function ModalCover({ children }, ref) {
		return (
			<div
				css={{
					position: 'fixed',
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					backgroundColor: boxPalette.overlay,
					zIndex: tokens.zIndex.overlay,
					overflowY: 'auto',
					animation: `${animateFadeInOut} ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
				}}
				ref={ref}
			>
				{children}
			</div>
		);
	}
);

const animateFadeInOut = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
