import { forwardRef, InputHTMLAttributes } from 'react';
import { Flex } from '@ag.ds-next/react/flex';
import { UploadIcon } from '@ag.ds-next/react/icon';
import { Text } from '@ag.ds-next/react/text';
import { boxPalette, packs, tokens } from '../core';
import { visuallyHiddenStyles } from '../a11y';
import { Button } from '../button';

export type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type FileUploadDropzoneProps = {
	isDragActive: boolean;
	disabled?: boolean;
	invalid: boolean;
	inputProps: NativeInputProps;
	onClick: () => void;
	multiple?: boolean;
	acceptedFilesSummary?: string | undefined;
	/** The maximum file size, expressed as a string, e.g. "10 MB" */
	maxFileSizeString?: string;
};

export const FileUploadDropzone = forwardRef<
	HTMLInputElement,
	FileUploadDropzoneProps
>(function FileUpload(
	{
		isDragActive,
		disabled,
		invalid,
		inputProps,
		multiple,
		maxFileSizeString,
		acceptedFilesSummary,
		onClick,
	},
	ref
) {
	const filePlural = multiple ? 'files' : 'file';
	const styles = fileInputStyles({
		isDragActive,
		disabled,
		invalid,
	});

	return (
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
				{...inputProps}
				/**
				 * Dropzone needs to set a ref to the input, but we _also_
				 * need to forward a ref to the input so consumers can use it.
				 * The mergeRef utility allows us to do this.
				 */
				ref={ref}
				css={visuallyHiddenStyles}
			/>
			<Flex
				flexDirection="column"
				alignItems="center"
				css={{ textAlign: 'center' }}
			>
				<Text color={isDragActive ? 'action' : 'muted'} fontWeight="bold">
					{isDragActive
						? `Drop ${filePlural} here`
						: `Drag and drop ${filePlural} here or select ${filePlural} to upload.`}
					{isDragActive ? <>&hellip;</> : null}
				</Text>
				{maxFileSizeString ? (
					<Text color="muted">
						{multiple ? 'Each file' : 'File'} cannot exceed {maxFileSizeString}.
					</Text>
				) : null}
				{acceptedFilesSummary ? (
					<Text color="muted">Files accepted: {acceptedFilesSummary}</Text>
				) : null}
			</Flex>
			<Button
				type="button"
				variant="secondary"
				onClick={onClick}
				disabled={disabled}
			>
				Select {filePlural}
			</Button>
		</Flex>
	);
});

const fileInputStyles = ({
	disabled,
	invalid,
	isDragActive,
}: {
	disabled?: boolean;
	invalid: boolean;
	isDragActive: boolean;
}) =>
	({
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
	}) as const;
