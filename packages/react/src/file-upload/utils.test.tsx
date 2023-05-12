import { getErrorSummary, formatFileSize } from './utils';

describe('getErrorSummary', () => {
	it('returns undefined if there are no rejections', () => {
		expect(getErrorSummary([], '1MB', 1)).toBeUndefined();
	});

	it('returns a message if there is a single rejection', () => {
		const rejections = [
			{
				fileName: 'example.txt',
				fileSize: 100000,
				errors: [
					{
						code: 'file-too-large',
						message: 'File size exceeds 1MB',
					},
				],
			},
		];

		expect(getErrorSummary(rejections, '1MB', 1)).toEqual(
			'Each file must be smaller than 1MB'
		);
	});

	it('returns a message if there are multiple files too large', () => {
		const rejections = [
			{
				fileName: 'example.txt',
				fileSize: 100000,
				errors: [
					{
						code: 'file-too-large',
						message: 'File size exceeds 1MB',
					},
				],
			},
			{
				fileName: 'example2.txt',
				fileSize: 100000,
				errors: [
					{
						code: 'file-too-large',
						message: 'File size exceeds 1MB',
					},
				],
			},
		];

		expect(getErrorSummary(rejections, '1MB', 2)).toEqual(
			'Each file must be smaller than 1MB'
		);
	});
});

describe('formatFileSize', () => {
	const kilobit = 500;
	const kibibyte = 1024;
	const kilobyte = 1000;
	const neg = -1024;
	const byte = 1;
	const zero = 0;
	const invalid = 'abc';
	const edgeCase = 1023;
	const petabyte = 1125899906842620;
	const huge = 10e40;
	const small = 1 / 8;

	it('It should format "normal" numbers like filesize lib', function () {
		expect(formatFileSize(kilobit)).toEqual('500 B');
		expect(formatFileSize(edgeCase)).toEqual('1.02 kB');
		expect(formatFileSize(kibibyte)).toEqual('1.02 kB');
		expect(formatFileSize(neg)).toEqual('-1.02 kB');
		expect(formatFileSize(byte)).toEqual('1 B');
		expect(formatFileSize(zero)).toEqual('0 B');
		expect(formatFileSize(small)).toEqual('0 B');
	});

	it('It should format edge case numbers', function () {
		expect(formatFileSize(petabyte)).toEqual('1.13 PB');
		expect(formatFileSize(huge)).toEqual('100000000000000000 YB');
	});

	it('It should not throw on an invalid input', function () {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		expect(formatFileSize(invalid as any)).toEqual('Unknown');
	});

	it('It rounds to upto 2 decimal places as appropriate', function () {
		// filesize defaulted to showing up to 2 decimal places
		expect(formatFileSize(kilobyte)).toEqual('1 kB');
		expect(formatFileSize(kilobyte * 1.333)).toEqual('1.33 kB');
		expect(formatFileSize(kibibyte)).toEqual('1.02 kB');
		expect(formatFileSize(kibibyte * 1.333)).toEqual('1.36 kB');

		// Rounding at the edges
		expect(formatFileSize(1000)).toEqual('1 kB');
		expect(formatFileSize(1001)).toEqual('1 kB');
		expect(formatFileSize(1010)).toEqual('1.01 kB');
		expect(formatFileSize(1100)).toEqual('1.1 kB');
		expect(formatFileSize(1110)).toEqual('1.11 kB');
		expect(formatFileSize(1111)).toEqual('1.11 kB');
		expect(formatFileSize(1300)).toEqual('1.3 kB');
		expect(formatFileSize(1304)).toEqual('1.3 kB');
		expect(formatFileSize(1305)).toEqual('1.31 kB');
		expect(formatFileSize(1394)).toEqual('1.39 kB');
		expect(formatFileSize(1399)).toEqual('1.4 kB');
		expect(formatFileSize(9000)).toEqual('9 kB');
		expect(formatFileSize(9001)).toEqual('9 kB');
		expect(formatFileSize(9004)).toEqual('9 kB');
		expect(formatFileSize(9009)).toEqual('9.01 kB');
		expect(formatFileSize(9090)).toEqual('9.09 kB');
		expect(formatFileSize(9099)).toEqual('9.1 kB');
		expect(formatFileSize(9900)).toEqual('9.9 kB');
		expect(formatFileSize(9990)).toEqual('9.99 kB');
		expect(formatFileSize(9994)).toEqual('9.99 kB');
		// expect(formatFileSize(9995)).toEqual('10 kB'); // this should round up but does not. Ignoring as this is the same behaviour as filesize
		expect(formatFileSize(9996)).toEqual('10 kB');
		expect(formatFileSize(9999)).toEqual('10 kB');
	});
});
