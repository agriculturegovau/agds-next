import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
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
import { ConditionalFieldContainer } from '../../ConditionalFieldContainer';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { checkHasErrors } from '../utils';
import { FormTask1Container } from './FormTask1Container';
import {
	Task1Step2FormSchema,
	task1Step2FormSchema,
} from './FormTask1FormState';
import { useFormTask1Context } from './FormTask1Provider';

export function FormTask1Step2() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		watch,
		register,
		handleSubmit,
		trigger,
		formState: { errors, isSubmitted },
	} = useForm<Task1Step2FormSchema>({
		defaultValues: formState.task1?.step2,
		resolver: zodResolver(task1Step2FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Task1Step2FormSchema> = async (data) => {
		setFocusedError(false);
		await submitStep();
		setFormState({
			...formState,
			task1: { ...formState.task1, step2: { ...data, completed: true } },
		});
	};
	const onError = () => {
		setFocusedError(false);
	};

	const hasErrors = checkHasErrors(errors);

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	const showAbn = watch('businessStructure') === 'Business';
	const showAcn = watch('businessStructure') === 'Company';

	useEffect(() => {
		if (isSubmitted) trigger();
	}, [trigger, isSubmitted, showAbn]);

	return (
		<FormTask1Container
			formTitle="Business details"
			formIntroduction="Your business details must match your business registration."
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
						{...register('businessName')}
						invalid={Boolean(errors.businessName?.message)}
						message={errors.businessName?.message}
						required
					/>

					<TextInput
						id="tradingName"
						label="Trading name"
						{...register('tradingName')}
						invalid={Boolean(errors.tradingName?.message)}
						message={errors.tradingName?.message}
					/>

					<ControlGroup
						id="checkbox"
						label="Business structure"
						invalid={Boolean(errors.businessStructure)}
						message={errors.businessStructure?.message}
						required
						block
					>
						<Radio {...register('businessStructure')} value="Business">
							Business
						</Radio>
						{showAbn ? (
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
						{showAcn ? (
							<ConditionalFieldContainer>
								<TextInput
									id="acn"
									label="Australian Company Number (ACN)"
									{...register('acn')}
									invalid={Boolean(errors.acn?.message)}
									message={errors.acn?.message}
									required
								/>
							</ConditionalFieldContainer>
						) : null}
						<Radio {...register('businessStructure')} value="Sole trader">
							Sole trader
						</Radio>
					</ControlGroup>
				</FormStack>
				<StepActions />
			</Stack>
		</FormTask1Container>
	);
}
