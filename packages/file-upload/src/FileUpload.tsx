import React, { forwardRef, useState } from 'react';
import { useDropzone, DropzoneOptions, FileWithPath } from 'react-dropzone';
import { Flex, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { packs, boxPalette, globalPalette, tokens } from '@ag.ds-next/core';
import { Field } from '@ag.ds-next/field';
import { UploadIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';

import { FileUploadFile } from './FileUploadFile';
import { getFilesTotal } from './utils';

type InputProps = Pick<
	React.InputHTMLAttributes<HTMLInputElement>,
	'name' | 'onBlur' | 'disabled' | 'id'
>;

export type FileUploadProps = InputProps & {
	/** List of acceptible file types, e.g.`image/jpeg`, `application/pdf` */
	accept: DropzoneOptions['accept'];
	/** The maximum number of files allowed to be selected. By default there is no limit. */
	maxFiles?: number;
	/** The maximum allowed file size, measured in KB */
	maxFileSizeKb?: number;
	/** The minimum allowed file size, measured in KB */
	minFileSizeKb?: number;
	/** A label that describes the field*/
	label: string;
	onChange: DropzoneOptions['onDrop'];
	required?: boolean;
	requiredLabel?: boolean;
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
			maxFileSizeKb,
			minFileSizeKb,
			multiple,
			onChange,
			required,
			requiredLabel,
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

		const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
			onDrop: onChange,
			accept,
			multiple,
			maxFiles,
			maxSize: maxFileSizeKb && maxFileSizeKb / 1024,
			minSize: minFileSizeKb && minFileSizeKb / 1024,
			onDropAccepted: handleDropAccepted,
			disabled,
		});

		return (
			<Stack gap={0.5}>
				<Field
					label={label}
					required={Boolean(required)}
					requiredLabel={requiredLabel}
					hint={hint}
					message={message}
					invalid={invalid}
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
					<Text color="muted">{getFilesTotal(files)}</Text>
				) : null}
				<Stack as="ul" gap={0.5}>
					{files.map((file, index) => (
						<FileUploadFile
							file={file}
							key={index}
							onRemove={() => handleRemoveFile(file)}
						/>
					))}
				</Stack>
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
