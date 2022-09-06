import { forwardRef, KeyboardEventHandler, PropsWithChildren } from 'react';

export type ModalCoverProps = PropsWithChildren<{
	onKeyDown: KeyboardEventHandler<HTMLDivElement>;
}>;

export const ModalCover = forwardRef<HTMLDivElement, ModalCoverProps>(
	function ModalCover({ children, onKeyDown }, ref) {
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
				}}
				onKeyDown={onKeyDown}
			>
				{children}
			</div>
		);
	}
);
