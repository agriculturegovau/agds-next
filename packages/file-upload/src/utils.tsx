import formatFileSize from 'filesize';

export const getFilesTotal = (files: { size: number }[]) => {
	const label = files.length > 1 ? 'files' : 'file';
	const size = files.reduce((memo, { size }) => memo + size, 0);
	return `${files.length} ${label} selected (${formatFileSize(size)})`;
};
