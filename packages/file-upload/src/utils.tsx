const cleanStr = (input: string) => input.replace('.00', '');

export const formatFileSize = (fileSize: number) => {
	// Inverting a negative number
	if (fileSize < 0) {
		fileSize = -fileSize;
	}

	if (fileSize === 0) {
		return `0 B`;
	}

	// 1 gigabyte (GB)	1,073,741,824 bytes
	if (fileSize >= 1073741824)
		return cleanStr(`${(fileSize / 1073741824).toFixed(2)} GB`);

	// 1 megabyte (MB)	1,048,576 bytes
	if (fileSize >= 1048576) {
		return cleanStr(`${Math.round(fileSize / 1048576)} MB`);
	}

	// 1 kilobyte (KB)	1,024 bytes
	if (fileSize >= 1024) {
		return cleanStr(`${Math.round(fileSize / 1024)} KB`);
	}

	return `${fileSize} B`;
};

export const getFilesTotal = function (files: { size: number }[]) {
	const label = files.length > 1 ? 'files' : 'file';
	const size = files.reduce((memo, { size }) => memo + size, 0);
	return `${files.length} ${label} selected (${formatFileSize(size)})`;
};
