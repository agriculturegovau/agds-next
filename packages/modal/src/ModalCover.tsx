import { forwardRef, ReactNode, HTMLAttributes } from 'react';

// Will act as a darkened backdrop
export const ModalCover = forwardRef<
	HTMLDivElement,
	{ children: ReactNode } & HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
	<div
		ref={ref}
		css={{
			position: 'fixed',
			inset: 0,
			backgroundColor: `rgba(0, 0, 0, 0.8)`,
			overflow: 'auto',
			zIndex: 9999,
		}}
		{...props}
	>
		{children}
	</div>
));
ModalCover.displayName = 'ModalCover';
