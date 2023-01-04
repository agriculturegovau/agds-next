import { PropsWithChildren } from 'react';
import { Core } from '@ag.ds-next/react/core';
import { theme } from '@ag.ds-next/react/ag-branding';

type FrameComponentProps = PropsWithChildren<{}>;

export default function FrameComponent({ children }: FrameComponentProps) {
	return <Core theme={theme}>{children}</Core>;
}
