import {
	ChangeEvent,
	forwardRef,
	InputHTMLAttributes,
	useCallback,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Field } from '../field';
import { Button } from '../button';
import { AcceptedFileMimeTypes } from '../file-upload';
import { fileTypeMapping } from '../file-upload/utils';
import { Flex } from '../flex';
import { VisuallyHidden } from '../a11y';
import { Text } from '../text';

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
	/** Describes the purpose of the field. */
	label: string;
	/** If true, "(optional)" will never be appended to the label. */
	hideOptionalLabel?: boolean;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	function FileInput(
		{
			accept,
			label,
			hideOptionalLabel,
			required,
			hint,
			message,
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

		const [fileNames, setFileNames] = useState<string[]>([]);

		// Called on the hidden input
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

		return (
			<Field
				label={label}
				hideOptionalLabel={hideOptionalLabel}
				required={Boolean(required)}
				hint={fallbackHint}
				invalid={invalid}
				message={message}
				id={id}
			>
				{(a11yProps) => (
					<>
						<Flex gap={1} alignItems="center">
							<Button
								{...a11yProps}
								aria-invalid={undefined} // Buttons not announced as invalid when `aria-invalid`, add announcement to label instead
								aria-label={`${label}. ${
									a11yProps['aria-invalid'] ? 'Invalid. ' : ''
								}${a11yProps['aria-required'] ? 'Required. ' : ''}Select file`}
								aria-required={undefined} // Buttons can't be `aria-required`, add announcement to label instead
								css={{ minWidth: 'max-content' }}
								disabled={disabled}
								onClick={onVisualButtonClick}
								variant="secondary"
							>
								Select file
							</Button>

							<div role="status">
								{!!fileNames.length && (
									<Text breakWords>
										{fileNames.join(', ')}
										<VisuallyHidden>, selected.</VisuallyHidden>
									</Text>
								)}
							</div>
						</Flex>

						<input
							accept={accept?.toString()}
							type="file"
							disabled={disabled}
							onChange={onChange}
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
