import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormStack } from '../form-stack';
import { Button } from '../button';
import { LoadingBlanket } from '../loading';
import { FileUpload, FileUploadProps } from './FileUpload';
import { ExistingFile, FileWithStatus } from './utils';
import { createExampleFile, createExampleImageFile } from './test-utils';

const meta: Meta<typeof FileUpload> = {
	title: 'forms/FileUpload',
	component: FileUpload,
	render: function Render({ value: initialValue = [], ...props }) {
		const [value, setValue] = useState<FileWithStatus[]>(initialValue);
		return <FileUpload {...props} value={value} onChange={setValue} />;
	},
	args: {
		hideThumbnails: false,
	},
};

const exampleFile = createExampleFile();

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Basic: Story = {
	args: {
		label: 'Drivers licence',
	},
};

export const Populated: Story = {
	args: {
		label: 'Drivers licence',
		value: [exampleFile],
	},
};

export const Required: Story = {
	args: {
		label: 'Drivers licence',
		required: true,
	},
};

export const HideOptionalLabel: Story = {
	args: {
		label: 'Drivers licence',
		hideOptionalLabel: true,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Drivers licence',
		disabled: true,
	},
};

export const Invalid: Story = {
	args: {
		label: 'Drivers licence',
		message: 'Please choose a valid file',
		invalid: true,
	},
};

export const MultipleFiles: Story = {
	args: {
		label: 'Identity documents',
		multiple: true,
		maxFiles: 5,
	},
};

export const OnlyAcceptedFormats: Story = {
	args: {
		label: 'Identity documents',
		required: true,
		hint: 'May include images of your passport, drivers licence etc.',
		maxSize: 200,
		accept: [
			'image/jpeg',
			'image/png',
			'application/pdf',
			'application/msword',
			'application/vnd.ms-excel',
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		],
		multiple: true,
	},
};

export const CustomAcceptedFormats: Story = {
	args: {
		label: 'Upload JavaScript file',
		accept: [{ mimeType: 'text/javascript', extensions: ['.js'] }],
	},
};

export const MultipleImages: Story = {
	args: {
		label: 'Photos from your holiday',
		maxSize: 2000,
		maxFiles: 3,
		accept: ['image/jpeg', 'image/png', 'image/heic'],
		multiple: true,
		value: [
			createExampleImageFile(),
			createExampleImageFile(),
			createExampleImageFile(),
		],
	},
};

export const HiddenThumbnails: Story = {
	args: {
		label: 'Drivers licence',
		hideThumbnails: true,
		value: [
			createExampleImageFile(),
			createExampleImageFile(),
			createExampleImageFile(),
		],
	},
};

export const InstantUpload: Story = {
	args: {
		label: 'Photos from your holiday',
		multiple: true,
		maxFiles: 3,
	},
	render: (args) => <InstantUploadTemplate {...args} />,
};

const InstantUploadTemplate = (args: FileUploadProps) => {
	const [value, setValue] = useState<FileWithStatus[]>([]);
	const onChange = (acceptedFiles: FileWithStatus[]) => {
		// Update the UI to show loading state straight away
		setValue(
			acceptedFiles.map((file) => {
				if (!file.status || file.status === 'none') file.status = 'uploading';
				return file;
			})
		);
		// Show uploaded state after simulated network request
		setTimeout(() => {
			setValue(
				acceptedFiles.map((file) => {
					if (file.status === 'uploading') {
						file.status = 'success';
						file.href = '#';
					}
					return file;
				})
			);
		}, 3000);
	};

	return <FileUpload {...args} value={value} onChange={onChange} />;
};

export const UploadSingleFileOnSubmit: Story = {
	args: {
		label: 'Upload evidence',
		hint: 'General hint information',
		maxSize: 100000,
		multiple: false,
		required: true,
	},
	render: (args) => <UploadSingleFileOnSubmitTemplate {...args} />,
};

const UploadSingleFileOnSubmitTemplate = (args: FileUploadProps) => {
	const [isSubmitting, setSubmitting] = useState(false);

	const formSchema = yup
		.object({
			file: yup.mixed().required('Select a file to upload'),
		})
		.required();

	type FormSchema = yup.InferType<typeof formSchema>;

	const { control, handleSubmit } = useForm<FormSchema>({
		defaultValues: {
			file: [],
		},
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = async (data) => {
		setSubmitting(true);
		console.log({ data });
		setTimeout(() => {
			setSubmitting(false);
		}, 2000);
	};

	const onError: SubmitErrorHandler<FormSchema> = (err) => {
		console.error(err);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
			<FormStack>
				<Controller
					control={control}
					name="file"
					render={({
						field: { value, onChange, onBlur, name },
						fieldState: { invalid, error },
					}) => (
						<div css={{ position: 'relative' }}>
							<FileUpload
								{...args}
								id="file"
								accept={['image/jpeg', 'image/png']}
								maxSize={500} // 500kb
								multiple={false}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
								name={name}
								invalid={invalid}
								message={error?.message}
								required
							/>
							{
								// We use a LoadingBlanket to communicate that this field is causing the form
								// to take longer than usual to submit
								isSubmitting && <LoadingBlanket label="Uploading file" />
							}
						</div>
					)}
				/>
				<div>
					<Button type="submit" loading={isSubmitting}>
						Submit evidence
					</Button>
				</div>
			</FormStack>
		</form>
	);
};

export const ExistingFiles: Story = {
	args: {
		label: 'Upload evidence',
		hint: 'General hint information',
	},
	render: function Render(args) {
		const [value, setValue] = useState<FileWithStatus[]>([]);

		const [existingFiles, setExistingFiles] = useState<ExistingFile[]>([
			{
				name: 'police-check.pdf',
				size: 100000,
			},
			{
				name: 'example.png',
				size: 123456,
				thumbnailSrc: 'https://via.placeholder.com/150',
				href: '#',
				// Use the meta key to keep track of any extra file info
				// This can be useful info when deleting the file
				meta: { uid: 'abc-def', bucketId: '123-456' },
			},
		]);

		function onRemoveExistingFile(fileToRemove: ExistingFile) {
			setExistingFiles((existingFiles) =>
				existingFiles.filter(({ name }) => name !== fileToRemove.name)
			);
		}

		return (
			<FileUpload
				{...args}
				value={value}
				onChange={setValue}
				existingFiles={existingFiles}
				onRemoveExistingFile={onRemoveExistingFile}
			/>
		);
	},
};
