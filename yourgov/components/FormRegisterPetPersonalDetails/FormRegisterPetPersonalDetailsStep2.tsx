import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ConditionalRevealContainer } from '@ag.ds-next/react/conditional-reveal-container';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { useScrollToField } from '@ag.ds-next/react/field';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Radio } from '@ag.ds-next/react/radio';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextInput } from '@ag.ds-next/react/text-input';
import { TextLink } from '@ag.ds-next/react/text-link';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { useFormRegisterPetPersonalDetails } from './FormRegisterPetPersonalDetails';
import { FormRegisterPetPersonalDetailsActions } from './FormRegisterPetPersonalDetailsActions';
import { FormRegisterPetPersonalDetailsContainer } from './FormRegisterPetPersonalDetailsContainer';

export const formSchema = yup
	.object({
		contactMethod: yup
			.string()
			.typeError('Select an option')
			.required('Select an option'),
		mobileNumber: yup.string().when('contactMethod', (value, schema) => {
			if (value === 'SMS') {
				return schema.required('Mobile number is required');
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

	const showConditionalField = watch('contactMethod') === 'SMS';

	useEffect(() => {
		if (isSubmitted) trigger();
	}, [trigger, isSubmitted, showConditionalField]);

	return (
		<FormRegisterPetPersonalDetailsContainer
			callToAction={<FormRequiredFieldsMessage />}
			introduction="We may need to contact you to check details of your application."
			title="Preferred contact method"
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
											{value.message}
										</TextLink>
									</ListItem>
								))}
							</UnorderedList>
						</PageAlert>
					)}
					<ControlGroup
						block
						id="checkbox"
						invalid={Boolean(errors.contactMethod)}
						label="Preferred contact method"
						message={errors.contactMethod?.message}
						required
					>
						<Radio {...register('contactMethod')} value="Mail">
							Mail
						</Radio>
						<Radio {...register('contactMethod')} value="SMS">
							SMS
						</Radio>
						<Radio {...register('contactMethod')} value="Email">
							Email
						</Radio>
					</ControlGroup>
					<ConditionalRevealContainer visible={showConditionalField}>
						<TextInput
							{...register('mobileNumber')}
							autoComplete="tel"
							id="mobilePhone"
							invalid={Boolean(errors.mobileNumber?.message)}
							label="Provide mobile phone number"
							message={errors.mobileNumber?.message}
							required
							type="tel"
						/>
					</ConditionalRevealContainer>
				</FormStack>
				<FormRegisterPetPersonalDetailsActions />
			</Stack>
		</FormRegisterPetPersonalDetailsContainer>
	);
};
