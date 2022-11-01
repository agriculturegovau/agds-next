import { Core } from '@ag.ds-next/core';
import { theme } from '@ag.ds-next/ag-branding';

export default function FrameComponent({ children }) {
	return <Core theme={theme}>{children}</Core>;
}
