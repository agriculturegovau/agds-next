/**
 * This is a cut down version of the filesize module from
 * https://github.com/avoidwork/filesize.js
 */

// We are counting a kilobyte as 1000 bytes and not 1024.
// This has been chosen because it was the default behaviour of the filesize lib.
// Discussions on this topic are inconclusive but suggest the more Windows centric
// choice of 1024 might be the better option. https://ux.stackexchange.com/questions/13815/files-size-units-kib-vs-kb-vs-kb
const BYTES_PER_KB = 1000;
// In filesize, using 1000 bytes per kilobyte results in the unit `kB` instead of `KB`
const UNITS = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const UNKNOWN = 'Unknown';
const MAX_EXPONENT = UNITS.length - 1;

const clamp = (num: number, min: number, max: number) =>
	Math.min(Math.max(num, min), max);

export function filesize(arg: unknown) {
	let num = Number(arg);
	let result;
	let exponent;

	if (isNaN(num)) {
		return UNKNOWN;
	}

	const neg = num < 0;

	// Flipping a negative number to determine the size
	if (neg) {
		num = -num;
	}

	// Determining the exponent
	exponent = clamp(
		Math.floor(Math.log(num) / Math.log(BYTES_PER_KB)),
		0,
		MAX_EXPONENT
	);

	const val = num / Math.pow(BYTES_PER_KB, exponent);
	const p = Math.pow(10, exponent > 0 ? 2 : 0);
	result = Math.round(val * p) / p;

	// Show 1 MB instead of 1000 kB
	if (result === BYTES_PER_KB && exponent < MAX_EXPONENT) {
		result = 1;
		exponent++;
	}

	// Flip the negative back
	if (neg) {
		result = -result;
	}

	return `${result} ${UNITS[exponent]}`;
}
