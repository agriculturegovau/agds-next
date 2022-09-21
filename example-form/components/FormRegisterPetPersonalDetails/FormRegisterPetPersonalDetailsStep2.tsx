import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Prose } from '@ag.ds-next/prose';
import { Box, Stack } from '@ag.ds-next/box';
import { ControlGroup, Radio } from '@ag.ds-next/control-input';
import { FormStack } from '@ag.ds-next/form-stack';
import { mapSpacing } from '@ag.ds-next/core';
import { PageAlert } from '@ag.ds-next/page-alert';
import { TextInput } from '@ag.ds-next/text-input';
import { useScrollToField } from '@ag.ds-next/field';
import { useFormRegisterPetPersonalDetails } from './FormRegisterPetPersonalDetails';
import { FormRegisterPetPersonalDetailsActions } from './FormRegisterPetPersonalDetailsActions';
import { FormRegisterPetPersonalDetailsContainer } from './FormRegisterPetPersonalDetailsContainer';

const formSchema = yup
	.object({
		contactMethod: yup.string().required('Select an option'),
		mobileNumber: yup.string().when('contactMethod', (value, schema) => {
			if (Array.isArray(value) && value.includes('B')) {
				return schema.required('Nested field is required');
			}
			return schema;
		}),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormRegisterPetPersonalDetailsStep2 = () => {
	const { next } = useFormRegisterPetPersonalDetails();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		watch,
		register,
		handleSubmit,
		trigger,
		formState: { errors, isSubmitted },
	} = useForm<FormSchema>({
		reValidateMode: 'onChange',
		defaultValues: {},
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
	};

	const onError = () => {
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

	const showConditionalField = watch('contactMethod') === 'sms';

	useEffect(() => {
		if (isSubmitted) trigger();
	}, [trigger, isSubmitted, showConditionalField]);

	return (
		<FormRegisterPetPersonalDetailsContainer
			title="Preferred contact method"
			introduction="We may need to contact you to check details of your application."
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
												{value.message}
											</a>
										</li>
									))}
								</ul>
							</Prose>
						</PageAlert>
					)}
					<ControlGroup
						id="checkbox"
						label="Preferred contact method"
						invalid={Boolean(errors.contactMethod)}
						message={errors.contactMethod?.message}
						required
						block
					>
						<Radio {...register('contactMethod')} value="mail">
							Mail
						</Radio>
						<Radio {...register('contactMethod')} value="sms">
							SMS
						</Radio>
						{showConditionalField ? (
							<Box
								borderLeft
								borderLeftWidth="xl"
								paddingLeft={1.5}
								css={{ marginLeft: mapSpacing(1) }}
							>
								<TextInput
									id="mobilePhone"
									type="tel"
									label="Provide mobile phone number"
									{...register('mobileNumber')}
									invalid={Boolean(errors.mobileNumber?.message)}
									message={errors.mobileNumber?.message}
									required
								/>
							</Box>
						) : null}
						<Radio {...register('contactMethod')} value="email">
							Email
						</Radio>
					</ControlGroup>
				</FormStack>
				<FormRegisterPetPersonalDetailsActions />
			</Stack>
		</FormRegisterPetPersonalDetailsContainer>
	);
};
