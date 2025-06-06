import {
	forwardRef,
	InputHTMLAttributes,
	Ref,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { DropzoneOptions, FileRejection, useDropzone } from 'react-dropzone';
import { visuallyHiddenStyles } from '../a11y';
import { Button } from '../button';
import { boxPalette, mergeRefs, tokens, useId } from '../core';
import { Field } from '../field';
import { UploadIcon } from '../icon';
import { ListItem, UnorderedList } from '../list';
import { SectionAlert } from '../section-alert';
import { Stack } from '../stack';
import { Text } from '../text';
import { Box } from '../box';
import { useSecondaryLabel } from '../field/useSecondaryLabel';
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
	/** The ref to be passed to the Select file(s) button. */
	buttonRef?: Ref<HTMLButtonElement>;
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
			buttonRef,
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
		const [status, setStatus] = useState('');
		const fileOrFiles = multiple ? 'files' : 'file';
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
			FileRejection[] | undefined
		>(undefined);
		const [invalidRejections, setInvalidRejections] = useState<
			FileRejection[] | undefined
		>(undefined);

		const handleRemoveAcceptedFile = (index: number) => {
			clearErrors();
			onChange?.(removeItemAtIndex(value, index));
			setStatus(value[index].name + ' removed');
		};

		const handleRemove = (file: ExistingFile) => {
			onRemoveExistingFile?.(file);
			setStatus(file.name + ' removed');
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
					setTooManyFilesRejections(() =>
						acceptedFilesWithNoDuplicates
							.slice(validMaxFiles)
							.map(convertFileToTooManyFilesRejection)
					);

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

			setStatus(validFiles.map(({ name }) => name).join(', ') + ' added');

			onChange?.(validFiles);
		};

		function clearErrors() {
			setTooManyFilesRejections(undefined);
			setInvalidRejections(undefined);
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
			disabled,
			noClick: true,
			noKeyboard: true,
		});

		useEffect(() => {
			if (dropzoneFileRejections.length > 0) {
				setInvalidRejections(dropzoneFileRejections);
			}
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
		const hasRejections =
			(invalidRejections && invalidRejections?.length > 0) ||
			(tooManyFilesRejections && tooManyFilesRejections?.length > 0);
		const pluralAllRejections =
			(invalidRejections && invalidRejections?.length > 1) ||
			(tooManyFilesRejections && tooManyFilesRejections?.length > 1);

		const fallbackId = useId(id);
		const fileSizeDescriptionId = maxSize ? `${fallbackId}-file-size-desc` : '';
		const acceptedFilesDescriptionId = accept
			? `${fallbackId}-accepted-files-desc`
			: '';

		const secondaryLabelWithOptional = useSecondaryLabel({
			hideOptionalLabel,
			required,
		});

		const buttonLabel = `Select ${fileOrFiles}`;
		const ariaLabel = [
			buttonLabel,
			label,
			secondaryLabelWithOptional,
			required && 'required',
			invalid && 'invalid',
			fileSummaryText,
		]
			.filter(Boolean)
			.join(', ');

		return (
			<Field
				hideOptionalLabel={hideOptionalLabel}
				hint={hint}
				id={id}
				invalid={invalid}
				label={label}
				message={message}
				required={required}
			>
				{(a11yProps) => {
					const buttonAriaDescribedBy = [
						a11yProps['aria-describedby'],
						fileSizeDescriptionId,
						acceptedFilesDescriptionId,
					]
						.filter(Boolean)
						.join(' ');

					return (
						<Stack gap={1.5}>
							<div css={visuallyHiddenStyles} role="status">
								{status}
							</div>

							<Box {...dropzoneProps}>
								<Stack
									alignItems="center"
									border
									css={styles}
									gap={1}
									padding={1.5}
									rounded
								>
									<UploadIcon color="muted" size="lg" />
									<input
										{...dropzoneInputProps}
										{...consumerProps}
										/**
										 * Dropzone needs to set a ref to the input, but we _also_
										 * need to forward a ref to the input so consumers can use it.
										 * The mergeRef utility allows us to do this.
										 */
										aria-hidden
										css={visuallyHiddenStyles}
										ref={mergeRefs([forwardedRef, dropzoneInputRef])}
									/>
									<Stack alignItems="center" textAlign="center">
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
												color="action"
												css={{
													display: isDragActive ? 'block' : 'none',
													left: 0,
													position: 'absolute',
													right: 0,
													top: '50%',
													transform: 'translateY(-50%)',
												}}
												fontWeight="bold"
											>
												Drop {fileOrFiles} here…
											</Text>
										</span>
										{maxSize ? (
											<Text color="muted" id={fileSizeDescriptionId}>
												{multiple ? 'Each file' : 'File'} cannot exceed{' '}
												{formattedMaxFileSize}.
											</Text>
										) : null}
										{accept ? (
											<Text color="muted" id={acceptedFilesDescriptionId}>
												Files accepted: {acceptedFilesSummary}.
											</Text>
										) : null}
									</Stack>
									<Button
										aria-describedby={buttonAriaDescribedBy || undefined}
										aria-label={ariaLabel}
										disabled={disabled}
										focusRingFor="all"
										id={a11yProps.id}
										onClick={open}
										ref={buttonRef}
										type="button"
										variant="secondary"
									>
										{buttonLabel}
									</Button>
								</Stack>
							</Box>
							{hasRejections && (
								<Box breakWords>
									<SectionAlert
										focusOnMount
										onClose={clearErrors}
										title={`The following ${
											pluralAllRejections ? 'files' : 'file'
										} could not be selected`}
										tone="errorHigh"
									>
										<Text as="p">
											{pluralAllRejections
												? 'These files were unable to be accepted for the following reasons:'
												: 'This file was unable to be accepted for the following reason:'}
										</Text>
										{
											<UnorderedList>
												{[
													...(invalidRejections ?? []),
													...(tooManyFilesRejections ?? []),
												].map((rejection) => (
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
										onRemove={handleRemove}
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
