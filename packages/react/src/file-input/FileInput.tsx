import {
	ChangeEvent,
	FocusEvent,
	forwardRef,
	InputHTMLAttributes,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { visuallyHiddenStyles } from '../a11y';
import { Button, ButtonProps } from '../button';
import { mergeRefs } from '../core';
import { Field } from '../field';
import { useSecondaryLabel } from '../field/useSecondaryLabel';
import { AcceptedFileMimeTypes } from '../file-upload';
import { FileUploadExistingFileList } from '../file-upload/FileUploadExistingFileList';
import {
	fileTypeMapping,
	getFileListSummaryText,
	type ExistingFile,
	type FileWithStatus,
} from '../file-upload/utils';
import { Stack } from '../stack';
import { Text } from '../text';
import { FileUploadFileList } from '../file-upload/FileUploadFileList';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseFileInputProps = {
	accept?: NativeInputProps['accept'] | AcceptedFileMimeTypes[];
	autoFocus?: NativeInputProps['autoFocus'];
	capture?: NativeInputProps['capture'];
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	multiple?: NativeInputProps['multiple'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onChange?: NativeInputProps['onChange'];
	onFocus?: NativeInputProps['onFocus'];
	value?: NativeInputProps['value'];
};

export type FileInputProps = BaseFileInputProps & {
	/** The size of the button. */
	buttonSize?: ButtonProps['size'];
	/** Used to display a list of files that have already been uploaded. */
	existingFiles?: ExistingFile[];
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** If true, the thumbnails will be hidden. */
	hideThumbnails?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** Describes the purpose of the field. */
	label: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** Callback function called when an existing file is removed. */
	onRemoveExistingFile?: (file: ExistingFile) => void;
	/** If `false` or `undefined`, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Used to display a list of files that have been selected. */
	selectedFiles?: FileWithStatus[];
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	function FileInput(
		{
			accept,
			autoFocus,
			buttonSize = 'sm',
			disabled,
			existingFiles,
			hideOptionalLabel,
			hideThumbnails,
			hint,
			id,
			invalid,
			label,
			message,
			multiple,
			onChange: onChangeProp,
			onFocus: onFocusProp,
			onRemoveExistingFile,
			required,
			selectedFiles,
			...props
		},
		ref
	) {
		const fallbackRef = useRef<HTMLInputElement>(null);
		const hiddenInputRef = mergeRefs([ref, fallbackRef]);
		const visibleButtonRef = useRef<HTMLButtonElement>(null);

		const [fileNames, setFileNames] = useState<string[]>([]);

		// Called on the hidden input to manage the selected file(s)
		const onChange = useCallback(
			(event: ChangeEvent<HTMLInputElement>) => {
				onChangeProp?.(event);
				if (!event.target.files) return;
				setFileNames(Array.from(event.target.files).map((file) => file.name));
			},
			[onChangeProp]
		);

		const onFocus = () => {
			visibleButtonRef.current?.focus();
		};

		// Used as a visual front to provide a consistent screen reader announcement across different browsers (e.g. Firefox and Chrome have "Browse..." and "Choose file" respectively)
		const onVisualButtonClick = () => {
			if (fallbackRef.current) {
				fallbackRef.current.click();
			}
		};

		const onVisualButtonBlur = (event: FocusEvent<HTMLButtonElement>) => {
			if (!props.onBlur) return;

			if (fallbackRef?.current) {
				// We're passing the button's event rather than the input's event as the primary use case is not value reading
				// TODO: in a future breaking change we will update the types
				props.onBlur(event as FocusEvent<HTMLInputElement>);
			}
		};

		const onVisualButtonFocus = (event: FocusEvent<HTMLButtonElement>) => {
			if (!onFocusProp) return;

			if (fallbackRef?.current) {
				// We're passing the button's event rather than the input's event as the primary use case is not value reading
				// TODO: in a future breaking change we will update the types
				onFocusProp(event as FocusEvent<HTMLInputElement>);
			}
		};

		// Button doesn't allow `autoFocus`, so manually focus once on initial render if `autoFocus` is `true`
		useEffect(() => {
			if (!autoFocus) return;
			visibleButtonRef.current?.focus();
			// autoFocus should only be run once on load
		}, []); // eslint-disable-line react-hooks/exhaustive-deps

		// Converts an array of mime types, e.g. `image/jpeg`, `application/pdf` into valid file extensions
		const acceptedFileExtensions = useMemo(() => {
			return Array.isArray(accept)
				? Array.from(
						new Set(
							accept.flatMap((item) => {
								const mimeTypeData = fileTypeMapping[item];
								if (mimeTypeData) {
									if (hasLabel(mimeTypeData)) {
										return mimeTypeData.label;
									}
									return mimeTypeData.extensions;
								} else return item;
							})
						)
				  ).join(', ')
				: accept;
		}, [accept]);

		const fallbackHint =
			hint || (accept && `Files accepted: ${acceptedFileExtensions}`);

		const secondaryLabelWithOptional = useSecondaryLabel({
			hideOptionalLabel,
			required,
		});

		const hasExistingFiles = selectedFiles?.length || existingFiles?.length;
		const fileOrFiles = multiple ? 'files' : 'file';
		const buttonLabel = hasExistingFiles
			? `Replace ${hasExistingFiles === 1 ? 'file' : 'files'}`
			: `Select ${fileOrFiles}`;
		const ariaLabel = [
			buttonLabel,
			label,
			secondaryLabelWithOptional,
			required && 'required',
			invalid && 'invalid',
			getSelectedFilesMessage({ fileNames, fileOrFiles }),
		]
			.filter(Boolean)
			.join(', ');

		return (
			<Field
				hideOptionalLabel={hideOptionalLabel}
				hint={fallbackHint}
				id={id}
				invalid={invalid}
				label={label}
				message={message}
				required={required}
			>
				{(a11yProps) => (
					<>
						<Stack alignItems="start" gap={0.5} justifyContent="flex-start">
							<Button
								// Only applying specific a11yprops as some aren't appropriate for a button
								aria-describedby={a11yProps['aria-describedby']}
								aria-label={ariaLabel}
								disabled={disabled}
								id={a11yProps.id}
								onBlur={onVisualButtonBlur}
								onClick={onVisualButtonClick}
								onFocus={onVisualButtonFocus}
								ref={visibleButtonRef}
								size={buttonSize}
								variant="secondary"
							>
								{buttonLabel}
							</Button>

							{!hasExistingFiles && (
								<Text
									breakWords
									color="muted"
									{...(fileNames.length && {
										color: undefined,
										fontWeight: 'bold',
									})}
								>
									{getSelectedFilesMessage({
										fileNames,
										fileOrFiles,
										isDisplayed: true,
									})}
								</Text>
							)}
						</Stack>

						<input
							{...props}
							accept={accept?.toString()}
							aria-hidden
							css={visuallyHiddenStyles}
							disabled={disabled}
							multiple={multiple}
							onChange={onChange}
							onFocus={onFocus}
							ref={hiddenInputRef}
							tabIndex={-1}
							type="file"
						/>
						{hasExistingFiles ? (
							<Stack gap={0.5}>
								{selectedFiles?.length ? (
									<>
										<Text color="muted">
											{getFileListSummaryText(selectedFiles)}
										</Text>
										<FileUploadFileList
											files={selectedFiles}
											hideThumbnails={hideThumbnails}
										/>
									</>
								) : null}
								{existingFiles?.length && !selectedFiles?.length ? (
									<>
										<Text color="muted">
											{getFileListSummaryText(existingFiles)}
										</Text>
										<FileUploadExistingFileList
											files={existingFiles}
											hideThumbnails
											onRemove={onRemoveExistingFile}
										/>
									</>
								) : null}
							</Stack>
						) : null}
					</>
				)}
			</Field>
		);
	}
);

const hasLabel = (
	mimeTypeData: (typeof fileTypeMapping)[keyof typeof fileTypeMapping]
): mimeTypeData is { extensions: string[]; label: string } => {
	return 'label' in mimeTypeData;
};

const getSelectedFilesMessage = ({
	fileNames,
	fileOrFiles,
	isDisplayed,
}: {
	fileNames: string[];
	fileOrFiles: 'file' | 'files';
	isDisplayed?: boolean;
}) => {
	return fileNames.length === 0
		? `No ${fileOrFiles} selected` // When no files selected, show the empty state
		: fileNames.length === 1
		? `${fileNames[0]}${isDisplayed ? '' : ' selected'}` // When one file selected show that file (and announce "selected")
		: `${fileNames.length} files selected`; // When multiple files are selected, show how many
};
