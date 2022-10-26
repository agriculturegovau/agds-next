import { ReactNode } from 'react';
import { mapSpacing } from '../../core/src';

export type FieldsetContentProps = {
	children: ReactNode;
};

export const FieldsetContent = ({ children }: FieldsetContentProps) => {
	return <div css={{ marginTop: mapSpacing(2) }}>{children}</div>;
};
