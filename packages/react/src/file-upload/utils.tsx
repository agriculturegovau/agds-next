import type { FileError, FileWithPath } from 'react-dropzone';
import { filesize } from './filesize';

export type FileStatus = 'none' | 'uploading' | 'success';

export type FileWithStatus = FileWithPath & {
	status?: FileStatus;
};

export type RejectedFile = {
	file: FileWithPath;
	errors: { message: string; code: string }[];
};

export type ExistingFile = {
	name: string;
	size: number;
	thumbnailSrc?: string;
	onDelete: () => void;
};

export function formatFileSize(bytes: number) {
	return filesize(bytes);
}

export function getFilesTotal(files: { size: number }[]) {
	const label = files.length > 1 ? 'files' : 'file';
	const size = files.reduce((a, { size }) => a + size, 0);
	return `${files.length} ${label} selected (${formatFileSize(size)})`;
}

export const fileTypeMapping = {
	// Application
	'application/msword': { extensions: ['.doc'] },
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
		extensions: ['.docx'],
	},
	'application/pdf': { extensions: ['.pdf'] },
	'application/rtf': { extensions: ['.rtf'] },
	'application/vnd.ms-excel': { extensions: ['.xls'] },
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
		extensions: ['.xlsx'],
	},
	'application/vnd.ms-outlook': { extensions: ['.msg'] },
	'application/zip': { extensions: ['.zip'] },
	'application/xml': { extensions: ['.xml'] },
	// Audio
	'audio/*': { extensions: [], label: 'Any audio file' },
	'audio/mpeg': { extensions: ['.mp3'] },
	'audio/wav': { extensions: ['.wav'] },
	'image/*': { extensions: [], label: 'Any image file' },
	'image/gif': { extensions: ['.gif'] },
	'image/heic': { extensions: ['.heic'] },
	'image/jpg': { extensions: ['.jpeg', '.jpg'] },
	'image/jpeg': { extensions: ['.jpeg', '.jpg'] },
	'image/png': { extensions: ['.png'] },
	'image/svg+xml': { extensions: ['.svg'] },
	'image/tiff': { extensions: ['.tif', '.tiff'] },
	'image/webp': { extensions: ['.webp'] },
	// Text
	'text/*': { extensions: [], label: 'Any text file' },
	'text/csv': { extensions: ['.csv'] },
	'text/plain': { extensions: ['.txt'] },
	'text/rtf': { extensions: ['.rtf'] },
	'text/xml': { extensions: ['.xml'] },
	// Video
	'video/*': { extensions: [], label: 'Any video file' },
	'video/mp4': { extensions: ['.mp4'] },
	'video/mpeg': { extensions: ['.mpeg'] },
};

/* List of acceptable predefined MIME types supported by this component. */
export type AcceptedFileMimeTypes = keyof typeof fileTypeMapping;

/** Allows consumers to pass in MIME types that are not in the predefined list. */
export type CustomFileMimeType = {
	/** A valid MIME type e.g. `font/otf`. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types. */
	mimeType: string;
	/** Array of accepted file extensions, .e.g. `['.otf']`. Use an empty array for all file extensions. */
	extensions: string[];
	/** The human readable label used for the summary, e.g. "otf font" */
	label?: string;
};

export function getAcceptedFilesSummary(
	acceptProp?: (AcceptedFileMimeTypes | CustomFileMimeType)[]
) {
	if (!acceptProp?.length) return;

	const allFileTypes: string[] = [];

	acceptProp.forEach((item) => {
		// If the array item is a string, it's a key of `fileTypeMapping`
		if (typeof item === 'string') {
			const option = fileTypeMapping[item];
			if ('label' in option) {
				allFileTypes.push(option.label);
			} else {
				option.extensions.forEach((extension) => {
					allFileTypes.push(formatFileExtension(extension));
				});
			}
		} else {
			// A "custom" MIME type has been passed
			if (item?.label) {
				allFileTypes.push(item.label);
			} else {
				item.extensions.forEach((extension) => {
					allFileTypes.push(formatFileExtension(extension));
				});
			}
		}
	});

	return (
		allFileTypes
			// Filter out any duplicates
			.filter((v, idx, arr) => arr.indexOf(v) === idx)
			.join(', ')
	);
}

export function formatFileExtension(ext: string) {
	return ext.replace(/^\./, '');
}

export function getFileRejectionErrorMessage(
	{ code, message }: FileError,
	formattedMaxFileSize: string,
	acceptedFilesSummary: string | undefined
) {
	if (code === 'file-too-large') {
		return `File size exceeds ${formattedMaxFileSize}`;
	}

	if (code === 'file-invalid-type') {
		if (!acceptedFilesSummary) return `File must be an acceptable format`;
		return `File must be one of the following types: ${acceptedFilesSummary}`;
	}

	return message;
}

export function getErrorSummary(
	rejections: RejectedFile[],
	formattedMaxFileSize: string,
	maxFiles: number | undefined
) {
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
}

/** Creates and returns a URL of the image thumbnail in browser memory.
 * Returns undefined if the file is not an image. */
export function getImageThumbnail(file: FileWithPath) {
	const imageMimeTypes = /image\/(png|jpg|jpeg|webp|heic)/i;
	const isImageType = file.type.match(imageMimeTypes);
	return isImageType ? URL.createObjectURL(file) : undefined;
}
