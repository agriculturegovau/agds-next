export const formatFileSize = (fileSize: number) => {
	// 1 gigabyte (GB)	1,073,741,824 bytes
	if (fileSize >= 1073741824) return `${Math.round(fileSize / 1073741824)} GB`;

	// 1 megabyte (MB)	1,048,576 bytes
	if (fileSize >= 1048576) {
		return `${Math.round(fileSize / 1048576)} MB`;
	}

	// 1 kilobyte (KB)	1,024 bytes
	if (fileSize >= 1024) {
		return `${Math.round(fileSize / 1024)} KB`;
	}

	return `${fileSize} bytes`;
};

export const getFilesTotal = function (files: File[]) {
	const label = files.length > 1 ? 'files' : 'file';
	const size = files.reduce((memo, { size }) => memo + size, 0);
	return `${files.length} ${label} selected (${formatFileSize(size)})`;
};
