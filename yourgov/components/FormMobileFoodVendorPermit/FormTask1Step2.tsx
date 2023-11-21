import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { Stack } from '@ag.ds-next/react/stack';
import { Radio } from '@ag.ds-next/react/radio';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { TextInput } from '@ag.ds-next/react/text-input';
import { useScrollToField } from '@ag.ds-next/react/field';
import { ConditionalFieldContainer } from '../ConditionalFieldContainer';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
// import { useFormBusinessDetails } from './FormBusinessDetails';
import { FormTask1Container } from './FormTask1Container';
import { FormContainer } from './FormContainer';
import { FormActions } from './FormActions';

export const formSchema = yup
	.object({
		businessName: yup.string().required('Business or company name is required'),
		tradingName: yup.string(),
		businessStructure: yup
			.string()
			.typeError('Business structure is required')
			.required('Business structure is required'),
		abn: yup.string().when('businessStructure', (value, schema) => {
			if (value === 'Business') {
				return schema.required('ABN is required');
			}
			return schema;
		}),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export function FormTask1Step2() {
	// const { next, stepFormState } = useFormBusinessDetails();
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
		defaultValues: {},
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		// next(data);
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

	const showConditionalField = watch('businessStructure') === 'Business';

	useEffect(() => {
		if (isSubmitted) trigger();
	}, [trigger, isSubmitted, showConditionalField]);

	return (
		<FormTask1Container>
			<FormContainer
				title="Business details"
				introduction="Your business details must match your business registration."
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
						<TextInput
							id="businessName"
							label="Business or company name"
							hint="Hint text"
							{...register('businessName')}
							invalid={Boolean(errors.businessName?.message)}
							message={errors.businessName?.message}
							required
						/>

						<TextInput
							id="tradingName"
							label="Trading name"
							hint="Hint text"
							{...register('tradingName')}
							invalid={Boolean(errors.tradingName?.message)}
							message={errors.tradingName?.message}
						/>

						<ControlGroup
							id="checkbox"
							label="Business structure"
							hint="Hint text"
							invalid={Boolean(errors.businessStructure)}
							message={errors.businessStructure?.message}
							required
							block
						>
							<Radio {...register('businessStructure')} value="Business">
								Business
							</Radio>
							{showConditionalField ? (
								<ConditionalFieldContainer>
									<TextInput
										id="abn"
										label="Australian Business Number (ABN)"
										{...register('abn')}
										invalid={Boolean(errors.abn?.message)}
										message={errors.abn?.message}
										required
									/>
								</ConditionalFieldContainer>
							) : null}
							<Radio {...register('businessStructure')} value="Company">
								Company
							</Radio>
							<Radio {...register('businessStructure')} value="Sole trader">
								Sole trader
							</Radio>
						</ControlGroup>
					</FormStack>
					<FormActions />
				</Stack>
			</FormContainer>
		</FormTask1Container>
	);
}
