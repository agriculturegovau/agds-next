import { FileStatus, FileWithStatus } from './utils';

export function createExampleFile(args?: {
	status?: FileStatus;
	name?: string;
	type?: string;
	href?: string;
}): FileWithStatus {
	const {
		status,
		name = 'example.txt',
		type = 'text/plain',
		href,
	} = args || {};

	const bits = ['examplefilecontent'];
	const file: FileWithStatus = new File(bits, name, {
		type,
	});
	file.status = status;
	file.href = href;
	return file;
}

export function createExampleImageFile(args?: {
	name?: string;
	status?: FileStatus;
	href?: string;
}): FileWithStatus {
	const { name = 'example.jpg', status, href } = args || {};

	// Created by passing a 72x72 jpg to onlinejpgtools.com/convert-jpg-to-base64
	const imageBase64 =
		'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';

	const blob = generateImageBlobFromBase64(imageBase64);

	const file: FileWithStatus = new File(blob, name, {
		type: 'image/jpg',
	});
	file.status = status;
	file.href = href;
	return file;
}

function generateImageBlobFromBase64(imageBase64: string) {
	// copied from https://stackoverflow.com/questions/35940290/how-to-convert-base64-string-to-javascript-file-object-like-as-from-file-input-f
	const bstr = atob(imageBase64);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return [u8arr];
}
