import { useMemo } from 'react';
import { FieldLabelProps } from './FieldLabel';

export const useSecondaryLabel = ({
	hideOptionalLabel,
	required,
	secondaryLabel,
}: Partial<
	Pick<FieldLabelProps, 'hideOptionalLabel' | 'required' | 'secondaryLabel'>
>) => {
	return useMemo(() => {
		return [secondaryLabel, hideOptionalLabel || required ? null : '(optional)']
			.filter(Boolean)
			.join(' ');
	}, [required, secondaryLabel, hideOptionalLabel]);
};
