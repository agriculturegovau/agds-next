import { ReactNode } from 'react';
import { mapSpacing } from '@ag.ds-next/core';

export type FieldsetContentProps = {
	children: ReactNode;
};

export const FieldsetContent = ({ children }: FieldsetContentProps) => {
	return <div css={{ marginTop: mapSpacing(2) }}>{children}</div>;
};
