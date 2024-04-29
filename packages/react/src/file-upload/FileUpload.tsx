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
import { boxPalette, mergeRefs, packs, tokens } from '../core';
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

		if (maxFiles !== undefined && maxFiles < 1) {
			console.warn(
				'FileUpload: maxFiles cannot be less than 1. The property is being ignored.'
			);
		}

		const [acceptedFiles, setAcceptedFiles] = useState(value);
		const [tooManyFilesRejections, setTooManyFilesRejections] = useState<
			FileRejection[]
		>([]);
		const [invalidRejections, setInvalidRejections] = useState<FileRejection[]>(
			[]
		);

		const allFiles = [
			...acceptedFiles,
			...tooManyFilesRejections.map((rej) => rej.file),
			...invalidRejections.map((rej) => rej.file),
		];

		const allRejections = [...invalidRejections, ...tooManyFilesRejections];

		const changeToken = JSON.stringify(acceptedFiles);
		useEffect(() => {
			onChange?.(acceptedFiles);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [changeToken]);

		const handleRemoveAcceptedFile = (index: number) => {
			clearErrors();
			setAcceptedFiles((prevAcceptedFiles) => {
				const updatedAcceptedFiles = removeItemAtIndex(
					prevAcceptedFiles,
					index
				);
				return updatedAcceptedFiles;
			});
		};

		const handleDropAccepted = (acceptedFiles: FileWithStatus[]) => {
			clearErrors();
			// replace file if multiple is false
			if (multiple) {
				setAcceptedFiles((prevAcceptedFiles) => {
					const newAcceptedFiles = [...prevAcceptedFiles, ...acceptedFiles];

					if (maxFiles && newAcceptedFiles.length > maxFiles) {
						setTooManyFilesRejections((prevTooManyFilesList) => {
							const newTooManyFilesList = newAcceptedFiles
								.slice(maxFiles)
								.map(convertFileToTooManyFilesRejection);

							if (
								JSON.stringify(prevTooManyFilesList) ===
								JSON.stringify(newTooManyFilesList)
							) {
								return prevTooManyFilesList;
							}

							return [
								...prevTooManyFilesList,
								...newAcceptedFiles
									.slice(maxFiles)
									.map(convertFileToTooManyFilesRejection),
							];
						});
						return newAcceptedFiles.slice(0, maxFiles);
					}

					return newAcceptedFiles;
				});
			} else {
				setAcceptedFiles(acceptedFiles);
			}
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
			// converts kB to B
			maxSize: maxSize && maxSize * 1000,
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
					maxSize,
					acceptedFilesSummary
				),
			]);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [dropzoneFileRejections]);

		const acceptedFilesSummary = getAcceptedFilesSummary(acceptProp);

		const styles = fileInputStyles({
			isDragActive,
			disabled,
			invalid,
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
			ref: dropzoneInputRef,
			// We don't want the input to be `display: none`, as we are using visuallyHiddenStyles instead.
			style: _unusedStyleProps,
			...dropzoneInputProps
		} = getInputProps();

		const areFileListsVisible = Boolean(allFiles.length);

		const fileSummaryText = getFileListSummaryText([
			...acceptedFiles,
			...(existingFiles || []),
		]);

		const hasMultipleFileRejections = allRejections.length > 1;

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
						<div {...dropzoneProps}>
							<Box paddingBottom={1}>
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
							</Box>

							{/*
								For screen readers to reliably detect when the error appears,
								the role="alert" element must always be mounted in the DOM
							*/}
							<div role="alert">
								{Boolean(allRejections.length) && (
									<Box paddingTop={0.5} paddingBottom={1}>
										<SectionAlert
											title={
												hasMultipleFileRejections
													? 'The following files could not be selected'
													: 'A file could not be selected'
											}
											tone="error"
											onClose={clearErrors}
										>
											{hasMultipleFileRejections ? (
												// multiple files
												<Text as="p">
													Please review this list of files that were unable to
													be accepted for the stated reasons:
												</Text>
											) : (
												// single file
												<Text as="p">
													Please review the following file that was unable to be
													accepted for the stated reason:
												</Text>
											)}
											{hasMultipleFileRejections && (
												<UnorderedList>
													{allRejections.map((rejection) => {
														return (
															<ListItem key={rejection.file.name}>
																<Text
																	as="strong"
																	color="error"
																	fontWeight="bold"
																>
																	{rejection.file.name}
																</Text>{' '}
																<span>
																	({formatFileSize(rejection.file.size)}){' - '}
																	{getErrorSummary(
																		rejection.errors,
																		formattedMaxFileSize
																	)}
																</span>
															</ListItem>
														);
													})}
												</UnorderedList>
											)}
											{!hasMultipleFileRejections && (
												<Box as="p">
													<Text as="strong" color="error" fontWeight="bold">
														{allRejections[0].file.name}
													</Text>{' '}
													<span>
														({formatFileSize(allRejections[0].file.size)})
														{' - '}
														{getErrorSummary(
															allRejections[0].errors,
															formattedMaxFileSize
														)}
													</span>
												</Box>
											)}
										</SectionAlert>
									</Box>
								)}
							</div>
							{areFileListsVisible && (
								<Stack gap={0.5}>
									<Text color="muted">{fileSummaryText}</Text>
									<FileUploadExistingFileList
										files={existingFiles}
										onRemove={onRemoveExistingFile}
										hideThumbnails={hideThumbnails}
									/>
									<FileUploadFileList
										files={acceptedFiles}
										onRemove={handleRemoveAcceptedFile}
										hideThumbnails={hideThumbnails}
									/>
								</Stack>
							)}
						</div>
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

		'&:focus': packs.outline,
	} as const;
}
