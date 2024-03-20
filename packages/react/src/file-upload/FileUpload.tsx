import {
	forwardRef,
	InputHTMLAttributes,
	useEffect,
	useMemo,
	useState,
} from 'react';
import {
	useDropzone,
	DropzoneOptions,
	FileRejection,
	FileError,
	FileWithPath,
} from 'react-dropzone';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Button } from '../button';
import { packs, boxPalette, tokens, mergeRefs } from '../core';
import { Field } from '../field';
import { UploadIcon } from '../icon';
import { Text } from '../text';
import { visuallyHiddenStyles } from '../a11y';
import { FileUploadRejectedFileList } from './FileUploadRejectedFileList';
import {
	AcceptedFileMimeTypes,
	CustomFileMimeType,
	ExistingFile,
	fileTypeMapping,
	FileWithStatus,
	formatFileSize,
	getAcceptedFilesSummary,
	getFileListSummaryText,
	getErrorSummary,
	getFileRejectionErrorMessage,
	RejectedFile,
} from './utils';
import { FileUploadFileList } from './FileUploadFileList';
import { FileUploadExistingFileList } from './FileUploadExistingFileList';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseInputProps = {
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onFocus?: NativeInputProps['onFocus'];
};

const tooManyFilesError: FileError = {
	code: 'too-many-files',
	message: 'Too many files',
};

export type FileUploadProps = BaseInputProps & {
	/** List of acceptable file MIME types, e.g. `image/jpeg`, `application/pdf`. */
	accept?: (AcceptedFileMimeTypes | CustomFileMimeType)[];
	/** If true, the thumbnails will be hidden. */
	hideThumbnails?: boolean;
	/** Describes the purpose of the field. */
	label: string;
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** The maximum number of files allowed to be selected. By default there is no limit (if `multiple` is true). */
	maxFiles?: DropzoneOptions['maxFiles'];
	/** The maximum allowed size for each file, measured in KB */
	maxSize?: DropzoneOptions['maxSize'];
	/** The value of the input */
	value: FileWithStatus[];
	/** Callback for when an accepted file is added or removed */
	onChange: (value: FileWithStatus[]) => void;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** Whether multiple files are allowed to be selected. */
	multiple?: boolean;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** Used to display a list of files that have already been uploaded. */
	existingFiles?: ExistingFile[];
	/** Callback function called when an existing file is removed. */
	onRemoveExistingFile?: (file: ExistingFile) => void;
};

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
	function FileUpload(
		{
			accept: acceptProp,
			disabled,
			label,
			hideOptionalLabel,
			hideThumbnails = false,
			maxFiles,
			maxSize,
			multiple,
			value = [],
			onChange,
			required,
			hint,
			message,
			invalid,
			id,
			existingFiles,
			onRemoveExistingFile,
			...consumerProps
		},
		forwardedRef
	) {
		const filesPlural = multiple ? 'files' : 'file';
		const maxSizeBytes = maxSize && !isNaN(maxSize) ? maxSize * 1000 : 0;
		const formattedMaxFileSize = formatFileSize(maxSizeBytes);

		const [fileRejections, setFileRejections] = useState<RejectedFile[]>([]);

		const handleRemoveFile = (file: FileWithStatus) => {
			const indexOfFile = value.indexOf(file);
			const newBaseSetOfFiles = value.filter(
				(_, index) => index !== indexOfFile
			);
			const hasTooManyFilesError = fileRejections.some((rej) =>
				rej.errors.some((err) => err.code === tooManyFilesError.code)
			);
			if (hasTooManyFilesError) {
				const acceptableFiles = fileRejections.filter((rej) =>
					rej.errors.every((err) => err.code === tooManyFilesError.code)
				);
				const acceptedFile = acceptableFiles[0].file;
				const newFiles = [...newBaseSetOfFiles, acceptedFile].sort(
					sortFileByName
				);

				setFileRejections((prevRejections) =>
					prevRejections.filter((rej) => rej.file.path !== acceptedFile.path)
				);
				onChange(newFiles);
			} else {
				onChange(newBaseSetOfFiles);
			}
		};

		const handleRemoveRejection = (fileName: string) => {
			setFileRejections(
				fileRejections.filter((err) => err.file.name !== fileName)
			);
		};

		const handleDropAccepted = (acceptedFiles: FileWithStatus[]) => {
			// replace file if multiple is false
			if (multiple) {
				onChange([...value, ...acceptedFiles]);
			} else {
				onChange(acceptedFiles);
			}
		};

		// Converts an array of mime types, e.g. `image/jpeg`, `application/pdf` into a format accepted by react-dropzone
		const accept = useMemo(() => {
			if (!acceptProp) return;
			return Object.fromEntries(
				acceptProp.map((item) => {
					// If the array item is a string, it's a key of `fileTypeMapping`
					if (typeof item === 'string') {
						return [item, fileTypeMapping[item].extensions];
					} else {
						return [item.mimeType, item.extensions];
					}
				})
			);
		}, [acceptProp]);

		const {
			getRootProps,
			getInputProps,
			isDragActive,
			open,
			fileRejections: dropzoneFileRejections,
		} = useDropzone({
			accept,
			// converts kB to B
			maxSize: maxSize && maxSize * 1000,
			multiple,
			onDropAccepted: handleDropAccepted,
			disabled,
			noClick: true,
			noKeyboard: true,
		});

		const errorSummary = getErrorSummary(
			fileRejections,
			formattedMaxFileSize,
			maxFiles
		);

		const acceptedFilesSummary = getAcceptedFilesSummary(acceptProp);

		const styles = fileInputStyles({
			isDragActive,
			disabled,
			invalid: invalid || !!errorSummary,
		});

		const valueChangeToken = JSON.stringify(
			value.filter((file) =>
				fileRejections.every(
					(rejectedFile) => rejectedFile.file.path !== file.path
				)
			)
		);

		useEffect(() => {
			const allAttemptedUploads = [
				...value,
				...fileRejections.map((rej) => rej.file),
			];
			const isOverMaxFilesLimit =
				maxFiles && allAttemptedUploads.length > maxFiles;

			if (isOverMaxFilesLimit) {
				const tooManyFilesRejectionList: Array<RejectedFile> = value
					.filter((_file, index) => index >= maxFiles)
					.map((file) => ({
						file,
						errors: [tooManyFilesError],
					}));

				const dropzoneRejections = dropzoneFileRejections.map((rej) => ({
					...rej,
					errors: [...rej.errors, tooManyFilesError],
				}));

				const reformattedDropzoneRejections = reformatDropzoneErrors(
					dropzoneRejections,
					maxSize,
					acceptedFilesSummary
				);

				const prevRejections = fileRejections.filter((prevFileRej) =>
					[
						...tooManyFilesRejectionList,
						...reformattedDropzoneRejections,
					].every(
						(newFileRej) =>
							JSON.stringify(newFileRej.file) !==
							JSON.stringify(prevFileRej.file)
					)
				);
				setFileRejections(
					[
						...prevRejections,
						...tooManyFilesRejectionList,
						...reformattedDropzoneRejections,
					].sort(sortRejectionByName)
				);
				onChange(
					value.filter((val) =>
						fileRejections.every((rej) => rej.file.path !== val.path)
					)
				);
			} else if (dropzoneFileRejections.length > 0) {
				setFileRejections(
					reformatDropzoneErrors(
						dropzoneFileRejections,
						maxSize,
						acceptedFilesSummary
					)
				);
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [
			valueChangeToken,
			dropzoneFileRejections,
			formattedMaxFileSize,
			acceptedFilesSummary,
		]);

		const {
			// We are using an _actual_ button, so we don't need these props
			role: _unusedRole,
			tabIndex: _unusedTabIndex,
			// Avoid passing `color` to the Stack component, which causes TypeScript errors.
			color: _unusedColor,
			...dropzoneProps
		} = getRootProps();

		const {
			ref: dropzoneInputRef,
			// We don't want the input to be `display: none`, as we are using visuallyHiddenStyles instead.
			style: _unusedStyleProps,
			...dropzoneInputProps
		} = getInputProps();

		const showFileLists = Boolean(
			value.length || fileRejections.length || existingFiles?.length
		);

		const fileSummaryText = getFileListSummaryText([
			...value,
			...(existingFiles || []),
		]);

		return (
			<Field
				label={label}
				hideOptionalLabel={hideOptionalLabel}
				required={Boolean(required)}
				hint={hint}
				message={message || errorSummary}
				invalid={invalid || !!errorSummary}
				id={id}
			>
				{(a11yProps) => {
					return (
						<Stack gap={1.5} {...dropzoneProps}>
							<Flex
								gap={1}
								padding={1.5}
								alignItems="center"
								flexDirection="column"
								border
								rounded
								css={styles}
							>
								<UploadIcon size="lg" color="muted" />
								<input
									{...dropzoneInputProps}
									{...a11yProps}
									{...consumerProps}
									/**
									 * Dropzone needs to set a ref to the input, but we _also_
									 * need to forward a ref to the input so consumers can use it.
									 * The mergeRef utility allows us to do this.
									 */
									ref={mergeRefs([forwardedRef, dropzoneInputRef])}
									css={visuallyHiddenStyles}
								/>
								<Flex
									flexDirection="column"
									alignItems="center"
									textAlign="center"
								>
									<Text
										color={isDragActive ? 'action' : 'muted'}
										fontWeight="bold"
									>
										{isDragActive
											? `Drop ${filesPlural} here`
											: `Drag and drop ${filesPlural} here or select ${filesPlural} to upload.`}
										{isDragActive ? <>&hellip;</> : null}
									</Text>
									{maxSize ? (
										<Text color="muted">
											{multiple ? 'Each file' : 'File'} cannot exceed{' '}
											{formattedMaxFileSize}.
										</Text>
									) : null}
									{accept ? (
										<Text color="muted">
											Files accepted: {acceptedFilesSummary}
										</Text>
									) : null}
								</Flex>
								<Button
									type="button"
									variant="secondary"
									onClick={open}
									disabled={disabled}
								>
									Select {filesPlural}
								</Button>
							</Flex>
							{showFileLists && (
								<Stack gap={0.5}>
									<Text color="muted">{fileSummaryText}</Text>
									<FileUploadExistingFileList
										files={existingFiles}
										onRemove={onRemoveExistingFile}
										hideThumbnails={hideThumbnails}
									/>
									<FileUploadFileList
										files={value}
										onRemove={handleRemoveFile}
										hideThumbnails={hideThumbnails}
									/>
									<FileUploadRejectedFileList
										fileRejections={fileRejections}
										handleRemoveRejection={handleRemoveRejection}
										hideThumbnails={hideThumbnails}
									/>
								</Stack>
							)}
						</Stack>
					);
				}}
			</Field>
		);
	}
);

function fileInputStyles({
	disabled,
	invalid,
	isDragActive,
}: {
	disabled?: boolean;
	invalid: boolean;
	isDragActive: boolean;
}) {
	return {
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'dashed',
		borderColor: boxPalette.border,
		backgroundColor: boxPalette.backgroundBody,

		...(invalid && {
			backgroundColor: boxPalette.systemErrorMuted,
			borderColor: boxPalette.systemError,
		}),

		...(disabled && {
			cursor: 'not-allowed',
			borderColor: boxPalette.borderMuted,
			backgroundColor: boxPalette.backgroundShade,
			color: boxPalette.foregroundMuted,
		}),

		...(isDragActive && {
			borderColor: boxPalette.foregroundAction,
			backgroundColor: boxPalette.backgroundShade,
		}),

		'&:focus': packs.outline,
	} as const;
}

function sortFileByName(a: FileWithPath, b: FileWithPath): number {
	return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
}

function sortRejectionByName(a: FileRejection, b: FileRejection): number {
	return a.file.name.toLowerCase() > b.file.name.toLowerCase() ? 1 : -1;
}

function reformatDropzoneErrors(
	dropzoneFileRejections: Array<FileRejection>,
	maxSize: number | undefined,
	acceptedFilesSummary: string | undefined
): Array<FileRejection> {
	const maxSizeBytes = maxSize && !isNaN(maxSize) ? maxSize * 1000 : 0;
	const formattedMaxFileSize = formatFileSize(maxSizeBytes);

	return dropzoneFileRejections.map(({ file, errors }) => ({
		file,
		errors: errors.map((error) => ({
			code: error.code,
			message: getFileRejectionErrorMessage(
				error,
				formattedMaxFileSize,
				acceptedFilesSummary
			),
		})),
	}));
}
