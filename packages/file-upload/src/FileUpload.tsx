import React, { forwardRef } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { Flex, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { packs, boxPalette, globalPalette, tokens } from '@ag.ds-next/core';
import { Field } from '@ag.ds-next/field';
import { UploadIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';

import { FileUploadFile } from './FileUploadFile';
import { getFilesTotal } from './utils';

export type FileUploadProps = {
	accept: DropzoneOptions['accept'];
	id?: string;
	label: string;
	onChange: DropzoneOptions['onDrop'];
	required?: boolean;
	requiredLabel?: boolean;
	hint?: string;
	message?: string;
	multiple?: boolean;
	invalid?: boolean;
	valid?: boolean;
};

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
	function FileUpload(
		{
			accept,
			label,
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
		const styles = fileInputStyles({ invalid, valid });

		const { acceptedFiles, getRootProps, getInputProps, isDragActive, open } =
			useDropzone({
				onDrop: onChange,
				accept,
				multiple,
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
						<Flex
							{...getRootProps()}
							gap={1}
							padding={1.5}
							alignItems="center"
							flexDirection="column"
							border
							rounded
							background="shade"
							css={styles}
						>
							<UploadIcon size="lg" color="action" />
							<input ref={ref} {...getInputProps()} {...allyProps} {...props} />
							<Text color="muted">
								{isDragActive
									? 'Drop the files here...'
									: 'Drag and drop file here or select file to upload.'}
							</Text>
							<Button variant="secondary" onClick={open}>
								Select files
							</Button>
						</Flex>
					)}
				</Field>
				{acceptedFiles.length ? (
					<Text color="muted">{getFilesTotal(acceptedFiles)}</Text>
				) : null}
				<Stack as="ul" gap={0.5}>
					{acceptedFiles.map((file, index) => (
						<FileUploadFile file={file} key={index} />
					))}
				</Stack>
			</Stack>
		);
	}
);

export const fileInputStyles = ({
	invalid,
	valid,
}: {
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
			: undefined),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': packs.outline,
	} as const);
