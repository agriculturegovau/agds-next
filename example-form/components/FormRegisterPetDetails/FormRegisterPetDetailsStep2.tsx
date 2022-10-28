import { useEffect, useRef, useState } from 'react';
import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Prose } from '@ag.ds-next/react/prose';
import { FileUpload } from '@ag.ds-next/react/file-upload';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { LoadingBlanket } from '@ag.ds-next/react/loading';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/box';
import { useScrollToField } from '@ag.ds-next/react/field';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { FormRegisterPetDetailsContainer } from './FormRegisterPetDetailsContainer';
import { FormRegisterPetDetailsActions } from './FormRegisterPetDetailsActions';
import { useFormRegisterPetDetails } from './FormRegisterPetDetails';

export const formSchema = yup
	.object({
		vaccinationCertificate: yup.mixed(),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormRegisterPetDetailsStep2 = () => {
	const { next, stepFormState, isSubmittingStep } = useFormRegisterPetDetails();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		watch,
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

	const hasFile = watch('vaccinationCertificate');

	return (
		<FormRegisterPetDetailsContainer
			title="Proof of vaccination"
			introduction="If you have a vaccination certificate provide it here."
			callToAction={<FormRequiredFieldsMessage />}
		>
			<Stack
				as="form"
				gap={3}
				onSubmit={handleSubmit(onSubmit, onError)}
				noValidate
			>
				<FormStack>
					{hasErrors && (
						<PageAlert
							ref={errorRef}
							tone="error"
							title="There is a problem"
							tabIndex={-1}
						>
							<Prose>
								<p>Please correct the following fields and try again</p>
								<ul>
									{Object.entries(errors).map(([key, value]) => (
										<li key={key}>
											<a href={`#${key}`} onClick={scrollToField}>
												{Array.isArray(value)
													? value[0].message
													: value.message}
											</a>
										</li>
									))}
								</ul>
							</Prose>
						</PageAlert>
					)}
					<Controller
						control={control}
						name="vaccinationCertificate"
						render={({
							field: { value, onChange, onBlur, name },
							fieldState: { invalid, error },
						}) => (
							<div css={{ position: 'relative' }}>
								<FileUpload
									id="file"
									label="Upload an image of vaccination certificate"
									accept={['image/jpeg', 'image/jpg', 'image/png']}
									maxSize={2000}
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									name={name}
									invalid={invalid}
									message={error?.message}
								/>
								{isSubmittingStep && hasFile && (
									<LoadingBlanket label="Uploading file" />
								)}
							</div>
						)}
					/>
				</FormStack>
				<FormRegisterPetDetailsActions />
			</Stack>
		</FormRegisterPetDetailsContainer>
	);
};
