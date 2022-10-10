import { PropsWithChildren, ReactNode } from 'react';
import { useId } from '@ag.ds-next/core';
import { FieldsetContainer } from './FieldsetContainer';
import { FieldsetLegend } from './FieldsetLegend';
import { FieldsetHint } from './FieldsetHint';
import { FieldsetContent } from './FieldsetContent';

export type FieldsetProps = PropsWithChildren<{
	/** Provides extra information about the fieldset. */
	hint?: ReactNode;
	/** Describes the purpose of the group of fields. */
	legend: ReactNode;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
}>;

// Note: These components do not use `Stack` as `legend` needs to the be the first child of the `fieldset` element and setting `fieldset` as a flex container does not behave consistently

export const Fieldset = ({ children, hint, legend, id }: FieldsetProps) => {
	const { fieldsetId, hintId } = useFieldsetIds(id);
	return (
		<FieldsetContainer
			id={fieldsetId}
			aria-describedby={hint ? hintId : undefined}
		>
			<FieldsetLegend>{legend}</FieldsetLegend>
			{hint ? <FieldsetHint id={hintId}>{hint}</FieldsetHint> : null}
			<FieldsetContent>{children}</FieldsetContent>
		</FieldsetContainer>
	);
};

export const useFieldsetIds = (idProp?: string) => {
	const autoId = useId(idProp);
	const fieldsetId = idProp ? idProp : `fieldset-${autoId}`;
	const hintId = `fieldset-${autoId}-hint`;
	return { fieldsetId, hintId };
};
