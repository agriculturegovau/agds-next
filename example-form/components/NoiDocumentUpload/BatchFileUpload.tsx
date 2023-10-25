import { forwardRef, useEffect, useMemo, useState } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { Stack } from '@ag.ds-next/react/stack';
import { mergeRefs } from '@ag.ds-next/react/core';
import { Field } from '@ag.ds-next/react/field';
import {
	FileUploadRejectedFileList,
	AcceptedFileMimeTypes,
	CustomFileMimeType,
	ExistingFile,
	fileTypeMapping,
	FileWithStatus,
	formatFileSize,
	getAcceptedFilesSummary,
	getErrorSummary,
	getFileRejectionErrorMessage,
	RejectedFile,
	FileUploadDropzone,
	NativeInputProps,
} from '@ag.ds-next/react/file-upload';

type BaseInputProps = {
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onFocus?: NativeInputProps['onFocus'];
};

export type BatchFileUploadProps = BaseInputProps & {
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

export const BatchFileUpload = forwardRef<
	HTMLInputElement,
	BatchFileUploadProps
>(function BatchFileUpload(
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
	const maxSizeBytes = maxSize && !isNaN(maxSize) ? maxSize * 1000 : 0;
	const formattedMaxFileSize = formatFileSize(maxSizeBytes);

	const [fileRejections, setFileRejections] = useState<RejectedFile[]>([]);

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
		maxFiles,
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

	useEffect(() => {
		setFileRejections(
			dropzoneFileRejections.map(({ file, errors }) => ({
				file,
				errors: errors.map((error) => ({
					code: error.code,
					message: getFileRejectionErrorMessage(
						error,
						formattedMaxFileSize,
						acceptedFilesSummary
					),
				})),
			}))
		);
	}, [dropzoneFileRejections, formattedMaxFileSize, acceptedFilesSummary]);

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

	// const showFileLists = Boolean(
	// 	value.length || fileRejections.length || existingFiles?.length
	// );

	// const fileSummaryText = getFileListSummaryText([
	// 	...value,
	// 	...(existingFiles || []),
	// ]);

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
						<FileUploadDropzone
							isDragActive={isDragActive}
							disabled={disabled}
							invalid={invalid || !!errorSummary}
							onClick={open}
							ref={mergeRefs([forwardedRef, dropzoneInputRef])}
							acceptedFilesSummary={acceptedFilesSummary}
							maxFileSizeString={maxSize ? formattedMaxFileSize : undefined}
							inputProps={
								{
									...dropzoneInputProps,
									...a11yProps,
									...consumerProps,
								} as NativeInputProps
							}
						/>
						<FileUploadRejectedFileList
							fileRejections={fileRejections}
							handleRemoveRejection={handleRemoveRejection}
							hideThumbnails={hideThumbnails}
						/>
					</Stack>
				);
			}}
		</Field>
	);
});
