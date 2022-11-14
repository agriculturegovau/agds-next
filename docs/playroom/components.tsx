export * from '../components/designSystemComponents';

/**
 * Used in Playroom to wrap certain code examples so that we can set up state
 * etc before the return.
 */
export function Render({ children }: { children: () => JSX.Element }) {
	return children();
}
