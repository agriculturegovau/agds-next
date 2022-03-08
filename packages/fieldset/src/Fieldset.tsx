import { Stack } from '@ag.ds-next/box';
import { PropsWithChildren, ReactNode } from 'react';
import { FieldsetContainer } from './FieldsetContainer';
import { FieldsetLegend } from './FieldsetLegend';
import { FieldsetHint } from './FieldsetHint';

export type FieldsetProps = PropsWithChildren<{
	hint?: ReactNode;
	legend: ReactNode;
}>;

export const Fieldset = ({ children, hint, legend }: FieldsetProps) => (
	<FieldsetContainer>
		<Stack gap={0.75}>
			<FieldsetLegend>{legend}</FieldsetLegend>
			{hint ? <FieldsetHint>{hint}</FieldsetHint> : null}
		</Stack>
		<div>{children}</div>
	</FieldsetContainer>
);
