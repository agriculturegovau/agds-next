import type { FileError, FileWithPath } from 'react-dropzone';
import { filesize } from './filesize';

export type FileStatus = 'none' | 'uploading' | 'success';

export type FileWithStatus = FileWithPath & {
	status?: FileStatus;
};

export type RejectedFile = {
	fileName: string;
	fileSize: number;
	errors: { message: string; code: string }[];
};

export function formatFileSize(bytes: number) {
	return filesize(bytes);
}

export const getFilesTotal = (files: { size: number }[]) => {
	const label = files.length > 1 ? 'files' : 'file';
	const size = files.reduce((a, { size }) => a + size, 0);
	return `${files.length} ${label} selected (${formatFileSize(size)})`;
};

const fileTypeMapping = {
	// Application
	'application/msword': 'word',
	'application/pdf': 'pdf',
	'application/rtf': 'rtf',
	'application/vnd.ms-excel': 'xlsx',
	'application/vnd.ms-outlook': 'msg',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xls',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
		'doc',
	'application/zip': 'zip',
	'application/xml': 'xml',
	// Audio
	'audio/*': 'Any audio file',
	'audio/mpeg': 'mpeg audio',
	'audio/wav': 'wav',
	// Image
	'image/*': 'Any image',
	'image/gif': 'gif',
	'image/heic': 'heic',
	'image/jpeg': 'jpeg',
	'image/jpg': 'jpg',
	'image/png': 'png',
	'image/svg+xml': 'svg',
	'image/tiff': 'tiff',
	'image/webp': 'webp',
	// Text
	'text/*': 'text',
	'text/csv': 'csv',
	'text/plain': 'txt',
	'text/rtf': 'rtf',
	'text/xml': 'xml',
	// Video
	'video/*': 'Anv video file',
	'video/mp4': 'mp4',
	'video/mpeg': 'mpeg video',
};

// Accepted MIME types
export type AcceptedFileMimeTypes = keyof typeof fileTypeMapping;

export const getAcceptedFilesSummary = (
	accept: AcceptedFileMimeTypes[] | undefined
) => {
	if (!accept?.length) return;
	return (
		accept
			.map((MIME) => fileTypeMapping[MIME])
			// Filter out any duplicates
			.filter((v, idx, arr) => arr.indexOf(v) === idx)
			.join(', ')
	);
};

export const getFileRejectionErrorMessage = (
	{ code, message }: FileError,
	formattedMaxFileSize: string,
	acceptedFilesSummary: string | undefined
) => {
	if (code === 'file-too-large') {
		return `File size exceeds ${formattedMaxFileSize}`;
	}

	if (code === 'file-invalid-type') {
		if (!acceptedFilesSummary) return `File must be an acceptable format`;
		return `File must be one of the following types: ${acceptedFilesSummary}`;
	}

	return message;
};

export const getErrorSummary = (
	rejections: RejectedFile[],
	formattedMaxFileSize: string,
	maxFiles: number | undefined
) => {
	if (!rejections?.length) return;

	const uniqueErrorCodes = Array.from(
		new Set(
			rejections.map(({ errors }) => errors.map(({ code }) => code)).flat()
		)
	);

	const firstErrorCode = uniqueErrorCodes[0];

	if (firstErrorCode === 'too-many-files') {
		return `You can not select more than ${maxFiles} files`;
	}

	if (uniqueErrorCodes.length === 1) {
		if (firstErrorCode === 'file-too-large') {
			return `Each file must be smaller than ${formattedMaxFileSize}`;
		}

		if (firstErrorCode === 'file-invalid-type') {
			return `Some files are not of the correct format`;
		}
	}

	return 'There’s an issue with one or more of your files';
};
