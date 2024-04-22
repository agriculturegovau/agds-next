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
import { DeleteIcon, UploadIcon } from '../icon';
import { ListItem, UnorderedList } from '../list';
import { SectionAlert } from '../section-alert';
import { Stack } from '../stack';
import { Text } from '../text';
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
			throw new Error('maxFiles cannot be less than 1');
		}

		const [acceptedFiles, setAcceptedFiles] = useState<FileWithStatus[]>(value);
		const [waitingListRejections, setWaitingListRejections] = useState<
			FileRejection[]
		>([]);
		const [invalidRejections, setInvalidRejections] = useState<FileRejection[]>(
			[]
		);

		const allFiles = [
			...acceptedFiles,
			...waitingListRejections.map((rej) => rej.file),
			...invalidRejections.map((rej) => rej.file),
		];

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
				if (waitingListRejections.length) {
					const newAcceptedFile = waitingListRejections[0].file;
					handleRemoveWaitingListItem(0, newAcceptedFile);

					return [...updatedAcceptedFiles, newAcceptedFile];
				}
				return updatedAcceptedFiles;
			});
		};

		const handleRemoveWaitingListItem = (
			index: number,
			file?: FileWithStatus
		) => {
			setWaitingListRejections((prevWaitingList) => {
				if (file && prevWaitingList[index]?.file.name === file.name) {
					return removeItemAtIndex(prevWaitingList, index);
				} else if (!file) {
					return removeItemAtIndex(prevWaitingList, index);
				}
				return prevWaitingList;
			});
		};

		const handleDropAccepted = (acceptedFiles: FileWithStatus[]) => {
			clearErrors();
			// replace file if multiple is false
			if (multiple) {
				setAcceptedFiles((prevAcceptedFiles) => {
					const newAcceptedFiles = [...prevAcceptedFiles, ...acceptedFiles];

					if (maxFiles && newAcceptedFiles.length > maxFiles) {
						setWaitingListRejections((prevWaitingList) => {
							const newWaitingList = newAcceptedFiles
								.slice(maxFiles)
								.map(convertFileToTooManyFilesRejection);

							if (
								JSON.stringify(prevWaitingList) ===
								JSON.stringify(newWaitingList)
							) {
								return prevWaitingList;
							}

							return [
								...prevWaitingList,
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
			setWaitingListRejections([]);
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

		const showFileLists = Boolean(allFiles.length);

		const fileSummaryText = getFileListSummaryText([
			...acceptedFiles,
			...(existingFiles || []),
		]);

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
									{Boolean(
										waitingListRejections.length || invalidRejections.length
									) && (
										<SectionAlert
											title="The following files could not be selected"
											tone="error"
											onClose={clearErrors}
										>
											<Text as="p">
												These files did not meet upload requirements, were not
												listed, and will not be uploaded
											</Text>
											<UnorderedList>
												{[
													...invalidRejections,
													...waitingListRejections,
												].flatMap((file) => {
													return (
														<ListItem key={file.file.name}>
															<Text as="strong" color="error" fontWeight="bold">
																{file.file.name}
															</Text>{' '}
															<span>
																({formatFileSize(file.file.size)}){' - '}
																{getErrorSummary(
																	file.errors,
																	formattedMaxFileSize
																)}
															</span>
														</ListItem>
													);
												})}
											</UnorderedList>
										</SectionAlert>
									)}
									<div
										css={{ display: 'flex', justifyContent: 'space-between' }}
									>
										<Text color="muted">{fileSummaryText}</Text>
										{acceptedFiles.length > 0 && (
											<Button
												variant="text"
												iconAfter={DeleteIcon}
												css={{ marginRight: 12 }}
												onClick={() => {
													clearErrors();
													setAcceptedFiles([]);
												}}
											>
												Remove all files
											</Button>
										)}
									</div>
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
