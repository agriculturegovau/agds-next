import { Core } from '@ag.ds-next/react/core';
import { theme } from '@ag.ds-next/react/ag-branding';

export default function FrameComponent({ children }) {
	return <Core theme={theme}>{children}</Core>;
}
