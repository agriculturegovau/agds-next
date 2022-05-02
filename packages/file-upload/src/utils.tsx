import formatFileSize from 'filesize';

export const getFilesTotal = (files: { size: number }[]) => {
	const label = files.length > 1 ? 'files' : 'file';
	const size = files.reduce((a, { size }) => a + size, 0);
	return `${files.length} ${label} selected (${formatFileSize(size)})`;
};

export const fileTypeMapping = {
	'application/msword': '.word',
	'application/pdf': '.pdf',
	'application/rtf': '.rtf',
	'application/vnd.ms-excel': '.xlsx',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xls',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
		'.doc',
	'application/zip': '.zip',
	'audio/*': 'Any audio file',
	'audio/mpeg': '.mpeg audio',
	'audio/wav': '.wav',
	'image/*': 'Any image',
	'image/gif': '.gif',
	'image/heic': '.heic',
	'image/jpeg': '.jpeg',
	'image/jpg': '.jpg',
	'image/png': '.png',
	'image/svg+xml': '.svg',
	'image/tiff': '.tiff',
	'image/webp': '.webp',
	'text/*': 'text',
	'text/csv': '.csv',
	'text/plain': '.txt',
	'text/rtf': '.rtf',
	'video/*': 'Anv video file',
	'video/mp4': '.mp4',
	'video/mpeg': '.mpeg video',
};

// Accepted MIME types
export type FileFormats = keyof typeof fileTypeMapping;

export const getAcceptedFilesSummary = (accept: FileFormats[]) => {
	if (!accept || !accept.length) {
		return undefined;
	}
	const symbols = accept.map((MIME) => fileTypeMapping[MIME]);
	return symbols.join(', ');
};
