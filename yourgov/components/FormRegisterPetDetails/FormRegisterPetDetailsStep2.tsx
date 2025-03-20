import { useEffect, useRef, useState } from 'react';
import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { FileUpload } from '@ag.ds-next/react/file-upload';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { LoadingBlanket } from '@ag.ds-next/react/loading';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/stack';
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
			callToAction={<FormRequiredFieldsMessage />}
			introduction="If you have a vaccination certificate provide it here."
			title="Proof of vaccination"
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
					<Controller
						control={control}
						name="vaccinationCertificate"
						render={({
							field: { value, onChange, onBlur, name },
							fieldState: { invalid, error },
						}) => (
							<div css={{ position: 'relative' }}>
								<FileUpload
									accept={['image/jpeg', 'image/jpg', 'image/png']}
									id="file"
									invalid={invalid}
									label="Upload an image of vaccination certificate"
									maxSize={2000}
									message={error?.message}
									name={name}
									onBlur={onBlur}
									onChange={onChange}
									value={value}
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
