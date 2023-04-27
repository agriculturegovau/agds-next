import { keyframes } from '@emotion/react';
import { forwardRef, ReactNode } from 'react';
import { tokens } from '../core';

export type ModalCoverProps = { children: ReactNode };

export const ModalCover = forwardRef<HTMLDivElement, ModalCoverProps>(
	function ModalCover({ children }, ref) {
		return (
			<div
				ref={ref}
				css={{
					position: 'fixed',
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					backgroundColor: `rgba(0, 0, 0, 0.8)`,
					zIndex: 100,
					overflowY: 'auto',
					animation: `${animateFadeInOut} ${tokens.transition.duration} ${tokens.transition.timingFunction}`,
				}}
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
