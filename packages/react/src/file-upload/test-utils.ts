import { FileStatus, FileWithStatus } from './utils';

export function createExampleFileWithStatus(status?: FileStatus) {
	const file: FileWithStatus = new File(['example'], 'example.jpg', {
		type: 'image/jpg',
	});
	file.status = status;
	return file;
}
