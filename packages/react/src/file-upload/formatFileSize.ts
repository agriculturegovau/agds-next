/**
 * This is a cut down version of the filesize module from
 * https://github.com/avoidwork/filesize.js
 */

const INVALID_NUMBER = 'Invalid number';
const SI_KBYTE = 'kB';
const STRINGS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

const clamp = (num: number, min: number, max: number) =>
	Math.min(Math.max(num, min), max);

export function filesize(arg: unknown) {
	let num = Number(arg);
	const result = [];
	const ceil = 1000;
	const neg = num < 0;

	if (isNaN(num)) {
		throw new TypeError(INVALID_NUMBER);
	}

	// Flipping a negative number to determine the size
	if (neg) {
		num = -num;
	}

	// Determining the exponent
	let e = clamp(Math.floor(Math.log(num) / Math.log(ceil)), 0, 8);

	// Zero is now a special case because bytes divide by 1
	if (num === 0) {
		result[0] = 0;
		result[1] = STRINGS[e];
	} else {
		const val = num / Math.pow(1000, e);

		const p = Math.pow(10, e > 0 ? 2 : 0);
		result[0] = Math.round(val * p) / p;

		if (result[0] === ceil && e < 8) {
			result[0] = 1;
			e++;
		}

		result[1] = e === 1 ? SI_KBYTE : STRINGS[e];
	}

	if (neg) {
		result[0] = -result[0];
	}

	return result.join(' ');
}
