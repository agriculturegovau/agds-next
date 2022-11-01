import type { LegacyRef, MutableRefObject, RefCallback } from 'react';

/**
 * Sometimes we need both a local ref _and_ a forwarded ref for the same element.
 * This utility merges them for us (as React doesn't offer this natively).
 *
 * @see https://github.com/gregberge/react-merge-refs/blob/main/src/index.tsx
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mergeRefs<T = any>(
	refs: Array<MutableRefObject<T> | LegacyRef<T>>
): RefCallback<T> {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === 'function') {
				ref(value);
			} else if (ref != null) {
				(ref as MutableRefObject<T | null>).current = value;
			}
		});
	};
}
