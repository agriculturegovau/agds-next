import {
	forwardRef,
	InputHTMLAttributes,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { DropzoneOptions, FileRejection, useDropzone } from 'react-dropzone';
import { visuallyHiddenStyles } from '../a11y';
import { Button } from '../button';
import { boxPalette, mergeRefs, tokens } from '../core';
import { Field } from '../field';
import { Flex } from '../flex';
import { UploadIcon } from '../icon';
import { ListItem, UnorderedList } from '../list';
import { SectionAlert } from '../section-alert';
import { Stack } from '../stack';
import { Text } from '../text';
import { Box } from '../box';
import { FileUploadExistingFileList } from './FileUploadExistingFileList';
import { FileUploadFileList } from './FileUploadFileList';
import {
	AcceptedFileMimeTypes,
	convertFileToTooManyFilesRejection,
	CustomFileMimeType,
	ExistingFile,
	fileTypeMapping,
	FileWithStatus,
	formatFileSize,
	getAcceptedFilesSummary,
	getErrorSummary,
	getFileListSummaryText,
	reformatDropzoneErrors,
	removeItemAtIndex,
} from './utils';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseInputProps = {
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onFocus?: NativeInputProps['onFocus'];
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
			existingFiles = [],
			hideOptionalLabel,
			hideThumbnails = false,
			hint,
			id,
			invalid,
			label,
			maxFiles,
			maxSize,
			message,
			multiple,
			onChange,
			onRemoveExistingFile,
			required,
			value = [],
			...consumerProps
		},
		forwardedRef
	) {
		const filesPlural = multiple ? 'files' : 'file';
		const maxSizeBytes = maxSize && !isNaN(maxSize) ? maxSize * 1000 : 0;
		const formattedMaxFileSize = formatFileSize(maxSizeBytes);

		let validMaxFiles = maxFiles;

		if (maxFiles !== undefined && maxFiles < 1) {
			validMaxFiles = undefined;

			console.warn(
				'FileUpload: maxFiles cannot be less than 1. The property is being ignored.'
			);
		}

		const [tooManyFilesRejections, setTooManyFilesRejections] = useState<
			FileRejection[]
		>([]);
		const [invalidRejections, setInvalidRejections] = useState<FileRejection[]>(
			[]
		);
		const [allRejections, setAllRejections] = useState<FileRejection[]>([]);

		useEffect(() => {
			setAllRejections([...invalidRejections, ...tooManyFilesRejections]);
		}, [invalidRejections, tooManyFilesRejections]);

		const handleRemoveAcceptedFile = (index: number) => {
			clearErrors();
			onChange?.(removeItemAtIndex(value, index));
		};

		const handleDropAccepted = (acceptedFiles: FileWithStatus[]) => {
			clearErrors();
			let validFiles;

			if (multiple) {
				// We don't accept duplicate files, so remove them
				const acceptedFilesWithNoDuplicates = Object.values<FileWithStatus>(
					[...value, ...acceptedFiles].reduce((acc, file) => {
						return {
							...acc,
							[`${file.name}-${file.size}-${file.type}`]: file,
						};
					}, {})
				);

				if (
					validMaxFiles &&
					acceptedFilesWithNoDuplicates.length > validMaxFiles
				) {
					// When we have a max files limit, we'll merge the error list with any existing errors...
					setTooManyFilesRejections(() => [
						...acceptedFilesWithNoDuplicates
							.slice(validMaxFiles)
							.map(convertFileToTooManyFilesRejection),
					]);

					// ...And return the list of files up to the max file limit
					validFiles = acceptedFilesWithNoDuplicates.slice(0, validMaxFiles);
				} else {
					validFiles = acceptedFilesWithNoDuplicates;
				}
			}
			// If we're not multiple, we have only one file, so we'll use it
			else {
				validFiles = acceptedFiles;
			}

			onChange?.(validFiles);
		};

		function clearErrors() {
			setTooManyFilesRejections([]);
			setInvalidRejections([]);
		}

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
			maxSize: maxSizeBytes || undefined,
			multiple,
			onDropAccepted: handleDropAccepted,
			onDropRejected: clearErrors,
			disabled,
			noClick: true,
			noKeyboard: true,
		});

		useEffect(() => {
			setInvalidRejections((prevInvalid) => [
				...prevInvalid,
				...reformatDropzoneErrors(
					dropzoneFileRejections,
					maxSizeBytes,
					acceptedFilesSummary
				),
			]);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [dropzoneFileRejections]);

		const acceptedFilesSummary = getAcceptedFilesSummary(acceptProp);

		const styles = dropzoneStyles({
			disabled,
			invalid,
			isDragActive,
		});

		const {
			// We are using an _actual_ button, so we don't need these props
			role: _unusedRole,
			tabIndex: _unusedTabIndex,
			// Avoid passing `color` to the Stack component, which causes TypeScript errors.
			color: _unusedColor,
			...dropzoneProps
		} = getRootProps();

		const {
			/**
			 * Warning! This ref is required for the button click to work in Safari and Firefox.
			 * Also, linting doesn't complain about this TS error, but VS Code does so can't @ts-ignore etc.
			 */
			ref: dropzoneInputRef,
			// We don't want the input to be `display: none`, as we are using visuallyHiddenStyles instead.
			style: _unusedStyleProps,
			...dropzoneInputProps
		} = getInputProps();

		const fileSummaryText = getFileListSummaryText([
			...value,
			...existingFiles,
		]);

		const showFileLists = Boolean(value.length || existingFiles?.length);
		const pluralAllRejections = allRejections.length > 1;

		return (
			<Field
				label={label}
				hideOptionalLabel={hideOptionalLabel}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				id={id}
			>
				{(a11yProps) => {
					return (
						<Stack gap={1.5}>
							<Box {...dropzoneProps}>
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
										{/* This maintains the space created by the default text so when a user drags over the dropzone, its height doesn't change, which can ruin the drag. We then vertically centre the isDragActive text */}
										<span css={{ position: 'relative' }}>
											<Text
												color="muted"
												css={{
													visibility: isDragActive ? 'hidden' : undefined,
												}}
												fontWeight="bold"
											>
												{multiple
													? 'Drag and drop files here or select files to upload.'
													: 'Drag and drop a file or select a file to upload.'}
											</Text>
											<Text
												css={{
													display: isDragActive ? 'block' : 'none',
													left: 0,
													position: 'absolute',
													right: 0,
													top: '50%',
													transform: 'translateY(-50%)',
												}}
												color="action"
												fontWeight="bold"
											>
												Drop {filesPlural} here…
											</Text>
										</span>
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
							</Box>

							{allRejections.length > 0 && (
								<Box breakWords>
									<SectionAlert
										focusOnMount
										onClose={clearErrors}
										title={`The following ${
											pluralAllRejections ? 'files' : 'file'
										} could not be selected`}
										tone="error"
									>
										<Text as="p">
											{pluralAllRejections
												? 'These files were unable to be accepted for the following reasons:'
												: 'This file was unable to be accepted for the following reason:'}
										</Text>
										{
											<UnorderedList>
												{allRejections.map((rejection) => (
													<ListItem key={rejection.file.name}>
														<Text color="error" fontWeight="bold">
															{rejection.file.name}
														</Text>{' '}
														<Text>
															({formatFileSize(rejection.file.size)}){' - '}
															{getErrorSummary(
																rejection.errors,
																formattedMaxFileSize
															)}
														</Text>
													</ListItem>
												))}
											</UnorderedList>
										}
									</SectionAlert>
								</Box>
							)}
							{showFileLists && (
								<Stack gap={0.5}>
									<Text color="muted">{fileSummaryText}</Text>
									<FileUploadExistingFileList
										files={existingFiles}
										hideThumbnails={hideThumbnails}
										onRemove={onRemoveExistingFile}
									/>
									<FileUploadFileList
										files={value}
										hideThumbnails={hideThumbnails}
										onRemove={handleRemoveAcceptedFile}
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

function dropzoneStyles({
	disabled,
	invalid,
	isDragActive,
}: {
	disabled?: boolean;
	invalid?: boolean;
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
	} as const;
}
