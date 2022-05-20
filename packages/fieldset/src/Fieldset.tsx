import { PropsWithChildren, ReactNode } from 'react';
import { FieldsetContainer } from './FieldsetContainer';
import { FieldsetLegend } from './FieldsetLegend';
import { FieldsetHint } from './FieldsetHint';
import { FieldsetContent } from './FieldsetContent';

export type FieldsetProps = PropsWithChildren<{
	hint?: ReactNode;
	legend: ReactNode;
}>;

// Note: These components do not use `Stack` as `legend` needs to the be the first child of the `fieldset` element and setting `fieldset` as a flex container does not behave consistently

export const Fieldset = ({ children, hint, legend }: FieldsetProps) => (
	<FieldsetContainer>
		<FieldsetLegend>{legend}</FieldsetLegend>
		{hint ? <FieldsetHint>{hint}</FieldsetHint> : null}
		<FieldsetContent>{children}</FieldsetContent>
	</FieldsetContainer>
);
