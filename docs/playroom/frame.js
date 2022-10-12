import { Core, theme } from '@ag.ds-next/design-system';

export default function FrameComponent({ children }) {
	return <Core theme={theme}>{children}</Core>;
}
