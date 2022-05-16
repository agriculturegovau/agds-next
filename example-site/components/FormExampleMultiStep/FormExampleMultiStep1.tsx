import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/button';
import { Fieldset } from '@ag.ds-next/fieldset';
import { Flex, Stack } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';
import { TextInput } from '@ag.ds-next/text-input';
import { FormStack } from '@ag.ds-next/form-stack';
import { useFormExampleMultiStepProdiver } from './FormExampleMultiStep';
import { Body } from '@ag.ds-next/body';
import { PageAlert } from '@ag.ds-next/page-alert';
import { useScrollToField } from '@ag.ds-next/field';
import { useEffect, useRef, useState } from 'react';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';
import { DatePicker } from '@ag.ds-next/date-picker';
import { FileUpload } from '@ag.ds-next/file-upload';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';

const formSchema = yup
	.object({
		photo: yup.mixed().required('Photo is required'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const formExampleMultiStep1ValuesMap: Record<keyof FormSchema, string> =
	{
		photo: 'Fieldset question?',
	};

export const FormExampleMultiStep1 = () => {
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const scrollToField = useScrollToField();
	const { next } = useFormExampleMultiStepProdiver();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
	};

	const onError = () => {
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
		<FormExampleMultiStepContainer
			title="Submit evidence (H1)"
			subTitle="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
		>
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<FormStack>
					{hasErrors && (
						<PageAlert
							ref={errorRef}
							tone="error"
							title="There is a problem"
							tabIndex={-1}
							autofocus
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
					<Controller
						control={control}
						name="photo"
						render={({
							field: { onChange, onBlur, value, name },
							fieldState: { invalid, error },
						}) => (
							<FileUpload
								label="Label"
								hint="Hint text"
								accept={['image/jpeg', 'image/jpg', 'image/png']}
								onChange={onChange}
								name={name}
								invalid={invalid}
								message={error?.message}
								required
							/>
						)}
					/>
					<FormExampleMultiStepActions />
				</FormStack>
			</form>
		</FormExampleMultiStepContainer>
	);
};
