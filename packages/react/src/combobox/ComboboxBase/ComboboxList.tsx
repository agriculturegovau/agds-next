import { forwardRef, HTMLAttributes } from 'react';
import { Box } from '../../box';

export type ComboboxListProps = Omit<HTMLAttributes<HTMLUListElement>, 'color'>;

export const ComboboxList = forwardRef<HTMLUListElement, ComboboxListProps>(
	function ComboboxList({ children, ...props }, ref) {
		return (
			<Box ref={ref} as="ul" {...props}>
				{children}
			</Box>
		);
	}
);
