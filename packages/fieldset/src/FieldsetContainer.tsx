import { PropsWithChildren } from 'react';

export type FieldsetContainerProps = PropsWithChildren<{
	'aria-describedby'?: string;
	id?: string;
}>;

export const FieldsetContainer = ({
	'aria-describedby': ariaDescribedby,
	children,
	id,
}: FieldsetContainerProps) => (
	<fieldset
		aria-describedby={ariaDescribedby}
		id={id}
		css={{ padding: 0, margin: 0, border: 'none' }}
	>
		{children}
	</fieldset>
);
