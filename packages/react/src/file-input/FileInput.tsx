import {
	ChangeEvent,
	forwardRef,
	InputHTMLAttributes,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Field } from '../field';
import { Button, ButtonProps } from '../button';
import { AcceptedFileMimeTypes } from '../file-upload';
import { fileTypeMapping } from '../file-upload/utils';
import { VisuallyHidden } from '../a11y';
import { Text } from '../text';
import { Stack } from '../stack';
import { useId } from '../core';

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
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** Describes the purpose of the field. */
	label: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	function FileInput(
		{
			accept,
			autoFocus,
			buttonSize = 'sm',
			label,
			hideOptionalLabel,
			required,
			hint,
			message,
			multiple,
			invalid,
			id,
			disabled,
			onChange: onChangeProp,
			...props
		},
		ref
	) {
		const fallbackRef = useRef(null);
		const hiddenInputRef = ref || fallbackRef;
		const visibleButtonRef = useRef<HTMLButtonElement>(null);
		const inputId = useId(id);

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

		// Used as a visual front to provide a consistent screen reader announcement across different browsers (e.g. Firefox and Chrome have "Browse..." and "Choose file" respectively)
		const onVisualButtonClick = () => {
			if ('current' in hiddenInputRef) hiddenInputRef.current?.click();
		};
		const onVisualButtonBlur = () => {
			if ('current' in hiddenInputRef) hiddenInputRef.current?.focus();
			if ('current' in hiddenInputRef) hiddenInputRef.current?.blur();
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

		const selectedFilesMessageId = `${inputId}-selected-files`;

		return (
			<Field
				hideOptionalLabel={hideOptionalLabel}
				hint={fallbackHint}
				id={inputId}
				invalid={invalid}
				label={label}
				message={message}
				required={Boolean(required)}
			>
				{(a11yProps) => {
					const visibleButtonLabel = `Select file${multiple ? 's' : ''}`;
					const ariaDescribedby = [
						a11yProps['aria-describedby'],
						selectedFilesMessageId,
					]
						.filter(Boolean)
						.join(' ');
					const ariaLabel = [
						visibleButtonLabel,
						label,
						a11yProps['aria-required'] && 'required',
						a11yProps['aria-invalid'] && 'invalid',
					]
						.filter(Boolean)
						.join(', ');

					return (
						<>
							<Stack gap={1} justifyContent="flex-start" alignItems="start">
								<Button
									{...a11yProps}
									aria-describedby={ariaDescribedby}
									aria-invalid={undefined} // Buttons not announced as invalid when `aria-invalid`, add announcement to label instead
									aria-label={ariaLabel}
									aria-required={undefined} // Buttons can't be `aria-required`, add announcement to label instead
									disabled={disabled}
									onBlur={onVisualButtonBlur}
									onClick={onVisualButtonClick}
									ref={visibleButtonRef}
									size={buttonSize}
									variant="secondary"
								>
									{visibleButtonLabel}
								</Button>

								{fileNames.length ? (
									<SelectedFilesMessage
										selectedFiles={fileNames}
										id={selectedFilesMessageId}
									/>
								) : (
									<Text color="muted">No files selected</Text>
								)}
							</Stack>

							<input
								accept={accept?.toString()}
								disabled={disabled}
								multiple={multiple}
								onChange={onChange}
								type="file"
								{...props}
								aria-hidden={true}
								css={{
									position: 'absolute',
									height: 1,
									width: 1,
									pointerEvents: 'none',
								}}
								ref={hiddenInputRef}
								tabIndex={-1}
							/>
						</>
					);
				}}
			</Field>
		);
	}
);

const hasLabel = (
	mimeTypeData: (typeof fileTypeMapping)[keyof typeof fileTypeMapping]
): mimeTypeData is { extensions: string[]; label: string } => {
	return 'label' in mimeTypeData;
};

const SelectedFilesMessage = ({
	selectedFiles,
	id,
}: {
	selectedFiles: string[];
	id: string;
}) => (
	<Text breakWords display="block" fontWeight="bold" id={id}>
		{selectedFiles.length > 1 ? (
			<>{selectedFiles.length} files selected</>
		) : (
			<>
				{selectedFiles[0]}
				<VisuallyHidden>, selected.</VisuallyHidden>
			</>
		)}
	</Text>
);
