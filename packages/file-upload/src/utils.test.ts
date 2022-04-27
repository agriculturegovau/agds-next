import { formatFileSize } from './utils';

describe('formatFileSize', () => {
	test('unit conversion', () => {
		expect(formatFileSize(0)).toEqual('0 B');
		expect(formatFileSize(1)).toEqual('1 B');
		expect(formatFileSize(100)).toEqual('100 B');
		expect(formatFileSize(1000)).toEqual('1000 B');
		expect(formatFileSize(1024)).toEqual('1 KB');
		expect(formatFileSize(1048576)).toEqual('1 MB');
		expect(formatFileSize(1073741824)).toEqual('1 GB');
	});

	test('rounding', () => {
		expect(formatFileSize(1325598706)).toEqual('1.23 GB'); // 1.2345 GB
		// expect(formatFileSize(2147376273.8176)).toEqual('1 GB'); // 1.9999 GB
		expect(formatFileSize(1294529.98656)).toEqual('1 MB'); // 1.23456 MB
	});

	test('handle zero', () => {
		expect(formatFileSize(0)).toEqual('0 B');
	});

	test('handle negative numbers', () => {
		expect(formatFileSize(-500)).toEqual('500 B');
	});
});
