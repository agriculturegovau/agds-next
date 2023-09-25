import { FileStatus, FileWithStatus } from './utils';

export function createExampleFileWithStatus(status?: FileStatus) {
	const bits = ['example'];
	const file: FileWithStatus = new File(bits, 'example.txt', {
		type: 'text/plain',
	});
	file.status = status;
	return file;
}

export function createExampleImageFileWithStatus(status?: FileStatus) {
	const file: FileWithStatus = new File(['example'], 'example.jpg', {
		type: 'image/jpg',
	});
	file.status = status;
	return file;
}
