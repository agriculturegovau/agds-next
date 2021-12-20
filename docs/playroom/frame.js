import { Core } from '@ag.ds-next/core';
import { palette } from '@ag.ds-next/ag-branding';

export default function FrameComponent({ children }) {
	return <Core palette={palette}>{children}</Core>;
}
