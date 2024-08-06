/**
 * This file use to just be a simple re-export of `useId` from @reach/auto-id
 * We can not just use `useId` from React as we need to provide support for React 16, 17 and 18
 *
 * As Reach is no longer being maintained and does not support React 18, the contents of this file have been copied from:
 * https://github.com/reach/reach-ui/blob/dev/packages/auto-id/src/reach-auto-id.ts
 *
 * See Github issue: https://github.com/reach/reach-ui/issues/972
 */

/**
 * Welcome to @reach/auto-id!
 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibility APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. This
 * causes a double render on any components with `useId`. Shouldn't be a problem
 * since the components using this hook should be small, and we're only updating
 * the ID attribute on the DOM, nothing big is happening.
 *
 * It doesn't have to be an incremented number, though--we could do generate
 * random strings instead, but incrementing a number is probably the cheapest
 * thing we can do.
 *
 * Additionally, we only do this patchup on the very first client render ever.
 * Any calls to `useId` that happen dynamically in the client will be
 * populated immediately with a value. So, we only get the double render after
 * server hydration and never again, SO BACK OFF ALRIGHT?
 */

/* eslint-disable react-hooks/rules-of-hooks */

// It's safe to import `useId` here because this is our fallback generator
// eslint-disable-next-line no-restricted-imports
import * as React from 'react';
import { useIsomorphicLayoutEffect as useLayoutEffect } from './useIsomorphicLayoutEffect';

let serverHandoffComplete = false;
let id = 0;
function genId() {
	return ++id;
}

// Workaround for https://github.com/webpack/webpack/issues/14814
// https://github.com/eps1lon/material-ui/blob/8d5f135b4d7a58253a99ab56dce4ac8de61f5dc1/packages/mui-utils/src/useId.ts#L21
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const maybeReactUseId: undefined | (() => string) = (React as any)[
	'useId'.toString()
];

/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reach.tech/auto-id
 */
function useId(idFromProps: string): string;
function useId(idFromProps: number): number;
function useId(idFromProps: string | number): string | number;
function useId(idFromProps: string | undefined | null): string | undefined;
function useId(idFromProps: number | undefined | null): number | undefined;
function useId(
	idFromProps: string | number | undefined | null
): string | number | undefined;
function useId(): string | undefined;

function useId(providedId?: number | string | undefined | null) {
	if (maybeReactUseId !== undefined) {
		const generatedId = maybeReactUseId();
		return providedId ?? generatedId;
	}

	// If this instance isn't part of the initial render, we don't have to do the
	// double render/patch-up dance. We can just generate the ID and return it.
	const initialId = providedId ?? (serverHandoffComplete ? genId() : null);
	const [id, setId] = React.useState(initialId);

	useLayoutEffect(() => {
		if (id === null) {
			// Patch the ID after render. We do this in `useLayoutEffect` to avoid any
			// rendering flicker, though it'll make the first render slower (unlikely
			// to matter, but you're welcome to measure your app and let us know if
			// it's a problem).
			setId(genId());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		if (serverHandoffComplete === false) {
			// Flag all future uses of `useId` to skip the update dance. This is in
			// `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
			// accidentally bail out of the patch-up dance prematurely.
			serverHandoffComplete = true;
		}
	}, []);

	return providedId ?? id ?? undefined;
}

export { useId };
