// The contents of this file has been copied from https://github.com/reach/reach-ui/blob/dev/packages/utils/src/can-use-dom.ts

export function canUseDOM() {
	return !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);
}
