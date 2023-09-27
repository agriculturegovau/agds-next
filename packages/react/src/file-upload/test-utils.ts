import { FileStatus, FileWithStatus } from './utils';

export function createExampleFile(args?: {
	status?: FileStatus;
	name?: string;
	type?: string;
}): FileWithStatus {
	const { status, name = 'example.txt', type = 'text/plain' } = args || {};

	const bits = ['examplefilecontent'];
	const file: FileWithStatus = new File(bits, name, {
		type,
	});
	file.status = status;
	return file;
}

export function createExampleImageFile(args?: {
	name?: string;
	status?: FileStatus;
}): FileWithStatus {
	const { name = 'example.jpg', status } = args || {};
	const imageBase64 =
		'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';

	const blob = generateImageBlobFromBase64(imageBase64);

	const file: FileWithStatus = new File(blob, name, {
		type: 'image/jpg',
	});
	file.status = status;
	return file;
}

const generateImageBlobFromBase64 = (imageBase64: string) => {
	// copied from https://stackoverflow.com/questions/35940290/how-to-convert-base64-string-to-javascript-file-object-like-as-from-file-input-f
	const bstr = atob(imageBase64);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return [u8arr];
};
