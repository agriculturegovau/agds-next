import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormStack } from '@ag.ds-next/form-stack';
import { Button } from '@ag.ds-next/button';
import { LoadingBlanket } from '@ag.ds-next/loading';
import { FileUpload } from './FileUpload';
import { FileWithStatus } from './utils';

export default {
	title: 'forms/FileUpload',
	component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => {
	const [value, setValue] = useState<FileWithStatus[]>([]);
	return <FileUpload {...args} value={value} onChange={setValue} />;
};

const TemplateWithValue: ComponentStory<typeof FileUpload> = (args) => {
	const [value, setValue] = useState<FileWithStatus[]>([
		new File(['this is an example file'], 'example.jpg', {
			type: 'image/jpg',
		}),
	]);
	return <FileUpload {...args} value={value} onChange={setValue} />;
};

export const Basic = TemplateWithValue.bind({});
Basic.args = {
	label: 'Drivers licence',
};

export const Required = Template.bind({});
Required.args = {
	label: 'Drivers licence',
	required: true,
};

export const HideOptionalLabel = Template.bind({});
HideOptionalLabel.args = {
	label: 'Drivers licence',
	hideOptionalLabel: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Drivers licence',
	disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	label: 'Drivers licence',
	message: 'Please choose a valid file',
	invalid: true,
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
	label: 'Identity documents',
	multiple: true,
};

export const OnlyAcceptedFormats = Template.bind({});
OnlyAcceptedFormats.args = {
	label: 'Identity documents',
	required: true,
	hint: 'May include images of your passport, drivers licence etc.',
	maxSize: 200,
	accept: [
		'image/jpeg',
		'image/jpg',
		'image/png',
		'application/pdf',
		'application/msword',
		'application/vnd.ms-excel',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	],
	multiple: true,
};

export const MultipleImages = Template.bind({});
MultipleImages.args = {
	label: 'Photos from your holiday',
	maxSize: 2000,
	maxFiles: 3,
	accept: ['image/jpeg', 'image/jpg', 'image/png', 'image/heic'],
	multiple: true,
};

export const InstantUpload: ComponentStory<typeof FileUpload> = (args) => {
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
					if (file.status === 'uploading') file.status = 'success';
					return file;
				})
			);
		}, 3000);
	};

	return <FileUpload {...args} value={value} onChange={onChange} />;
};
InstantUpload.args = {
	label: 'Photos from your holiday',
	multiple: true,
	maxFiles: 3,
};

export const UploadSingleFileOnSubmit: ComponentStory<typeof FileUpload> = (
	args
) => {
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
								accept={['image/jpeg', 'image/jpg', 'image/png']}
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
UploadSingleFileOnSubmit.args = {
	label: 'Upload evidence',
	hint: 'General hint information',
	maxSize: 100000,
	multiple: false,
	required: true,
};
