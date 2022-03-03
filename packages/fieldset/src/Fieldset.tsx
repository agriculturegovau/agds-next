import { PropsWithChildren, ReactNode } from 'react';
import { FieldsetContainer } from './FieldsetContainer';
import { FieldsetLegend } from './FieldsetLegend';

export type FieldsetProps = PropsWithChildren<{
	hint?: string;
	legend: ReactNode;
	legendAsPageHeading?: boolean;
}>;

export const Fieldset = ({
	children,
	hint,
	legend,
	legendAsPageHeading,
}: FieldsetProps) => (
	<FieldsetContainer>
		<FieldsetLegend hint={hint} asPageHeading={legendAsPageHeading}>
			{legend}
		</FieldsetLegend>
		<div>{children}</div>
	</FieldsetContainer>
);
