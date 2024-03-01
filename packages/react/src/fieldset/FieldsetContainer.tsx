import { PropsWithChildren } from 'react';
import { Box } from '../box';

export type FieldsetContainerProps = PropsWithChildren<{
	'aria-describedby'?: string;
	id?: string;
}>;

export const FieldsetContainer = ({
	'aria-describedby': ariaDescribedby,
	children,
	id,
}: FieldsetContainerProps) => (
	<Box as="fieldset" aria-describedby={ariaDescribedby} id={id}>
		{children}
	</Box>
);
