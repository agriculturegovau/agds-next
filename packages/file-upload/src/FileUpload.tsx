import React, { Fragment, forwardRef, useState } from 'react';
import {
	useDropzone,
	DropzoneOptions,
	FileWithPath,
	FileRejection as FileRejectionType,
} from 'react-dropzone';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { packs, boxPalette, globalPalette, tokens } from '@ag.ds-next/core';
import { Field } from '@ag.ds-next/field';
import { UploadIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';
import formatFileSize from 'filesize';

import { FileRejection } from './FileRejection';
import { FileUploadFile } from './FileUploadFile';
import { getFilesTotal } from './utils';

type InputProps = Pick<
	React.InputHTMLAttributes<HTMLInputElement>,
	'name' | 'onBlur' | 'disabled' | 'id'
>;

export type FileUploadProps = InputProps & {
	/** List of acceptible file types, e.g.`image/jpeg`, `application/pdf` */
	accept: DropzoneOptions['accept'];
	/** A label that describes the field*/
	label: string;
	/** The maximum number of files allowed to be selected. By default there is no limit (if `multiple` is true). */
	maxFiles?: DropzoneOptions['maxFiles'];
	/** The maximum allowed file size, measured in KB */
	maxSize?: DropzoneOptions['maxSize'];
	onChange: DropzoneOptions['onDrop'];
	/** Whether the field is required */
	required?: boolean;
	hint?: string;
	message?: string;
	/** Whether multiple files are allowed to be selected. False by default. */
	multiple?: boolean;
	invalid?: boolean;
	valid?: boolean;
};

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
	function FileUpload(
		{
			accept,
			disabled,
			label,
			maxFiles,
			maxSize,
			multiple,
			onChange,
			required,
			hint,
			message,
			invalid,
			valid,
			id,
			...props
		},
		ref
	) {
		const [files, setFiles] = useState<FileWithPath[]>([]);
		const styles = fileInputStyles({ disabled, invalid, valid });
		const filesPlural = multiple ? 'files' : 'file';

		const handleRemoveFile = (file: FileWithPath) => {
			setFiles((previousFiles) => {
				const indexOfFile = previousFiles.indexOf(file);
				return previousFiles.filter((_, index) => index !== indexOfFile);
			});
		};

		const handleDropAccepted = (acceptedFiles: FileWithPath[]) => {
			// replace file if multiple is false
			if (multiple) {
				setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
			} else {
				setFiles(acceptedFiles);
			}
		};

		const { getRootProps, getInputProps, isDragActive, open, fileRejections } =
			useDropzone({
				onDrop: onChange,
				accept,
				maxFiles,
				// converts kB to B
				maxSize: maxSize && maxSize * 1000,
				multiple,
				onDropAccepted: handleDropAccepted,
				disabled,
			});

		const errorMessageMaps = ({ file, errors }: FileRejectionType) => {
			const { code, message } = errors[0];
			if (code === 'file-too-large') {
				return `${file.name} size exceeds ${formatFileSize(
					(maxSize || 0) * 1000
				)}`;
			}

			return `${file.name}: ${message}`;
		};

		const getErrorSummary = (rejections: FileRejectionType[] | undefined) => {
			if (!rejections || !rejections.length) return undefined;

			const firstError = rejections[0].errors[0];

			if (firstError.code === 'file-too-large') {
				return `Some files exceed ${formatFileSize((maxSize || 0) * 1000)}`;
			}

			if (firstError.code === 'too-many-files') {
				return `Too many files were selected. Up to ${maxFiles} can be picked.`;
			}

			return 'There was an issue with at least on of the selected files.';
		};

		const errorSummary = getErrorSummary(fileRejections);

		return (
			<Stack gap={0.5}>
				<Field
					label={label}
					required={Boolean(required)}
					hint={hint}
					message={message || errorSummary}
					invalid={invalid || !!errorSummary}
					valid={valid}
					id={id}
				>
					{(allyProps) => (
						<div {...getRootProps()}>
							<Flex
								gap={1}
								padding={1.5}
								alignItems="center"
								flexDirection="column"
								border
								rounded
								background="shade"
								css={styles}
							>
								<UploadIcon size="lg" color="muted" />
								<input
									ref={ref}
									{...getInputProps()}
									{...allyProps}
									{...props}
								/>
								<Text color="muted">
									{isDragActive
										? `Drop ${filesPlural} here...`
										: `Drag and drop ${filesPlural} here or select ${filesPlural} to upload.`}
								</Text>
								<Button variant="secondary" onClick={open} disabled={disabled}>
									{`Select ${filesPlural}`}
								</Button>
							</Flex>
						</div>
					)}
				</Field>
				{files.length ? (
					<Fragment>
						<Text color="muted">{getFilesTotal(files)}</Text>
						<Stack as="ul" gap={0.5}>
							{files.map((file, index) => (
								<FileUploadFile
									file={file}
									key={index}
									onRemove={() => handleRemoveFile(file)}
								/>
							))}
						</Stack>
					</Fragment>
				) : null}

				{fileRejections && (
					<Stack as="ul" gap={0.5}>
						{fileRejections.map((err, index) => (
							<FileRejection key={index}>{errorMessageMaps(err)}</FileRejection>
						))}
					</Stack>
				)}
			</Stack>
		);
	}
);

export const fileInputStyles = ({
	disabled,
	invalid,
	valid,
}: {
	disabled?: boolean;
	invalid?: boolean;
	valid?: boolean;
	multiline?: boolean;
}) =>
	({
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'dashed',
		borderColor: boxPalette.borderInput,
		...(invalid
			? {
					backgroundColor: globalPalette.errorMuted,
					borderColor: globalPalette.error,
			  }
			: valid
			? {
					backgroundColor: globalPalette.successMuted,
					borderColor: globalPalette.success,
			  }
			: disabled
			? {
					cursor: 'not-allowed',
					opacity: 0.3,
					background: 'none',
			  }
			: undefined),

		'&:focus': packs.outline,
	} as const);
