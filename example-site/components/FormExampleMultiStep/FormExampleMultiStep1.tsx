import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import {
	Controller,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from 'react-hook-form';
import * as yup from 'yup';
import { useScrollToField } from '@ag.ds-next/react/field';
import { FileUpload } from '@ag.ds-next/react/file-upload';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { LoadingBlanket } from '@ag.ds-next/react/loading';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Textarea } from '@ag.ds-next/react/textarea';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { useFormExampleMultiStep } from './FormExampleMultiStep';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';

const formSchema = yup
	.object({
		description: yup.string().required('Describe actions taken'),
		files: yup.array().of(yup.mixed()).required('Select a file to upload'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleMultiStep1 = () => {
	const { next, stepFormState, isSubmittingStep } = useFormExampleMultiStep();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState ?? { files: [] },
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
	};

	const onError: SubmitErrorHandler<FormSchema> = () => {
		setFocusedError(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	return (
		<FormExampleMultiStepContainer
			callToAction={<FormRequiredFieldsMessage />}
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
			title="Submit evidence (H1)"
		>
			<Stack
				as="form"
				gap={3}
				noValidate
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				<FormStack>
					{hasErrors && (
						<PageAlert
							ref={errorRef}
							tabIndex={-1}
							title="There is a problem"
							tone="error"
						>
							<Text as="p">
								Please correct the following fields and try again
							</Text>
							<UnorderedList>
								{Object.entries(errors).map(([key, value]) => (
									<ListItem key={key}>
										<TextLink href={`#${key}`} onClick={scrollToField}>
											{Array.isArray(value) ? value[0].message : value.message}
										</TextLink>
									</ListItem>
								))}
							</UnorderedList>
						</PageAlert>
					)}
					<Textarea
						{...register('description')}
						block
						hint="Hint text"
						id="description"
						invalid={Boolean(errors.description?.message)}
						label="Describe actions taken"
						message={errors.description?.message}
						required
					/>
					<Controller
						control={control}
						name="files"
						render={({
							field: { value, onChange, onBlur, name },
							fieldState: { invalid, error },
						}) => (
							<div css={{ position: 'relative' }}>
								<FileUpload
									accept={['image/jpeg', 'image/jpg', 'image/png']}
									hint="General hint information"
									id="files"
									invalid={invalid}
									label="Select file to upload"
									maxFiles={3}
									maxSize={2000}
									message={error?.message}
									multiple
									name={name}
									onBlur={onBlur}
									onChange={onChange}
									required
									value={value}
								/>
								{isSubmittingStep && <LoadingBlanket label="Uploading file" />}
							</div>
						)}
					/>
				</FormStack>
				<FormExampleMultiStepActions />
			</Stack>
		</FormExampleMultiStepContainer>
	);
};
