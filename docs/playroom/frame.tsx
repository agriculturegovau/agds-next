import { PropsWithChildren } from 'react';
import { Core } from '@ag.ds-next/core';
import { theme } from '@ag.ds-next/ag-branding';

type FrameComponentProps = PropsWithChildren<{}>;

export default function FrameComponent({ children }: FrameComponentProps) {
	return <Core theme={theme}>{children}</Core>;
}
