import { PropsWithChildren, ReactNode } from 'react';
import { FieldsetContainer } from './FieldsetContainer';
import { FieldsetLegend } from './FieldsetLegend';
import { FieldsetHint } from './FieldsetHint';
import { FieldsetContent } from './FieldsetContent';

export type FieldsetProps = PropsWithChildren<{
	hint?: ReactNode;
	legend: ReactNode;
}>;

export const Fieldset = ({ children, hint, legend }: FieldsetProps) => (
	<FieldsetContainer>
		<FieldsetLegend>{legend}</FieldsetLegend>
		{hint ? <FieldsetHint>{hint}</FieldsetHint> : null}
		<FieldsetContent>{children}</FieldsetContent>
	</FieldsetContainer>
);
