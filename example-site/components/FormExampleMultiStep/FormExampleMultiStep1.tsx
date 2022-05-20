import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormStack } from '@ag.ds-next/form-stack';
import { useFormExampleMultiStep } from './FormExampleMultiStep';
import { Body } from '@ag.ds-next/body';
import { PageAlert } from '@ag.ds-next/page-alert';
import { useScrollToField } from '@ag.ds-next/field';
import { useEffect, useRef, useState } from 'react';
import { FileUpload } from '@ag.ds-next/file-upload';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';
import { Textarea } from '@ag.ds-next/textarea';
import { FormExampleMultiStepFieldset } from './FormExampleMultiStepFieldset';

const formSchema = yup
	.object({
		message: yup.string().required('Enter a message'),
		example: yup.mixed().required('Upload a photo'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const formExampleMultiStep1ValuesMap: Record<keyof FormSchema, string> =
	{
		message: 'Message',
		example: 'Upload photo',
	};

export const FormExampleMultiStep1 = () => {
	const { next, stepFormState } = useFormExampleMultiStep();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
	};

	const onError: SubmitErrorHandler<FormSchema> = () => {
		setFocusedError(false);
	};

	const hasErrors = Boolean(Object.keys(errors).length);

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	return (
		<form onSubmit={handleSubmit(onSubmit, onError)}>
			<FormStack>
				<FormExampleMultiStepFieldset
					title="Submit evidence (H1)"
					subTitle="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
				>
					<FormStack>
						{hasErrors && (
							<PageAlert
								ref={errorRef}
								tone="error"
								title="There is a problem"
								tabIndex={-1}
							>
								<Body>
									<p>Please correct the following fields and try again</p>
									<ul>
										{Object.entries(errors).map(([key, value]) => (
											<li key={key}>
												<a href={`#${key}`} onClick={scrollToField}>
													{value.message}
												</a>
											</li>
										))}
									</ul>
								</Body>
							</PageAlert>
						)}
						<Textarea
							label="Label"
							hint="Hint text"
							{...register('message')}
							invalid={Boolean(errors.message?.message)}
							message={errors.message?.message}
							required
							block
						/>
						<Controller
							control={control}
							name="example"
							render={({
								field: { onChange, onBlur, name },
								fieldState: { invalid, error },
							}) => (
								<FileUpload
									label="Upload photo label"
									hint="Hint text"
									accept={['image/jpeg', 'image/jpg', 'image/png']}
									maxSize={500} // 500kb
									multiple={false}
									onChange={(acceptedFiles) => onChange(acceptedFiles[0])}
									onBlur={onBlur}
									name={name}
									invalid={invalid}
									message={error?.message}
									required
								/>
							)}
						/>
					</FormStack>
				</FormExampleMultiStepFieldset>
				<FormExampleMultiStepActions />
			</FormStack>
		</form>
	);
};
