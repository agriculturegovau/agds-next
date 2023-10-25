import { FileWithPath } from 'react-dropzone';
import { FileWithStatus } from '@ag.ds-next/react/src/file-upload/utils';

export const categories = [
	{ label: "Driver's License", value: 'DRIVERS_LICENSE' },
	{ label: 'Proof of Insurance', value: 'PROOF_OF_INSURANCE' },
	{ label: 'Vehicle Registration', value: 'VEHICLE_REGISTRATION' },
] as const;

const categoryLabelMap = Object.fromEntries(
	categories.map((category) => [category.value, category.label])
) as Record<keyof typeof categories, string>;

export type FileCategory = (typeof categories)[number]['value'];

export type FileWithCategory = FileWithStatus & {
	category?: FileCategory | undefined;
	/** The ID of the uploaded artifact, for purposes of updating it */
	artifactId?: string;
};

export type ExistingFileWithCategory = {
	file: {
		name: string;
		size: number;
	};
	category: FileCategory;
	artifactId: string;
};

const existingFiles: ExistingFileWithCategory[] = [
	{
		file: {
			name: 'drivers_license.pdf',
			size: 25000,
		},
		category: 'DRIVERS_LICENSE',
		artifactId: '123456789ABCDEF',
	},
];

export const getUploadedFiles = async (): Promise<
	ExistingFileWithCategory[]
> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(existingFiles);
		}, 2000);
	});
};

export const changeFileCategory = async (
	fileId: string,
	category: FileCategory
) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ fileId, category });
		}, 2000);
	});
};

export const uploadFile = async (file: FileWithPath): Promise<string> => {
	console.log('SERVER UPLOADING FILE', file);
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`FILE${Math.random().toPrecision(8).slice(2)}`);
		}, 2000);
	});
};
