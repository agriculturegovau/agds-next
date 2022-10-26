import { Core } from '@ag.ds-next/react';
import { theme } from '@ag.ds-next/react';

export default function FrameComponent({ children }) {
	return <Core theme={theme}>{children}</Core>;
}
