import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Radio } from '@ag.ds-next/react/radio';
import { TextInput } from '@ag.ds-next/react/text-input';
import { ConditionalFieldContainer } from '../../ConditionalFieldContainer';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors } from '../utils';
import { useGlobalForm } from '../GlobalFormProvider';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { FormContainer } from './FormContainer';
import { formSteps, useFormContext } from './FormProvider';
import { step2FormSchema, type Step2FormSchema } from './FormState';
import { Form } from './Form';

export function FormStep2() {
	const { formState, step2SetState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormContext();

	const isEditingFromReviewStep = useIsEditingFromReviewStep();

	const {
		watch,
		register,
		handleSubmit,
		trigger,
		formState: { errors, isSubmitted },
	} = useForm<Step2FormSchema>({
		defaultValues: formState.steps?.step2,
		resolver: isSavingBeforeExiting ? undefined : zodResolver(step2FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Step2FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step2SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	const showErrorAlert = hasMultipleErrors(errors);

	const showAbn = watch('businessStructure') === 'Business';
	const showAcn = watch('businessStructure') === 'Company';

	useEffect(() => {
		if (isSubmitted) trigger();
	}, [isSubmitted, trigger]);

	return (
		<FormContainer
			formIntroduction="Your business details must match your business registration."
			formTitle={
				isEditingFromReviewStep
					? formSteps[1].labelWhenChanging
					: formSteps[1].label
			}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormStack>
					{showErrorAlert && <FormPageAlert errors={errors} />}
					<TextInput
						{...register('businessName')}
						autoComplete="organization"
						id="businessName"
						invalid={Boolean(errors.businessName?.message)}
						label="Business or company name"
						maxWidth="xl"
						message={errors.businessName?.message}
						required
					/>

					<TextInput
						{...register('tradingName')}
						autoComplete="on"
						id="tradingName"
						invalid={Boolean(errors.tradingName?.message)}
						label="Trading name"
						maxWidth="xl"
						message={errors.tradingName?.message}
					/>

					<ControlGroup
						block
						id="businessStructure"
						invalid={Boolean(errors.businessStructure)}
						label="Business structure"
						message={errors.businessStructure?.message}
						required
					>
						<Radio {...register('businessStructure')} value="Business">
							Business
						</Radio>
						{showAbn ? (
							<ConditionalFieldContainer>
								<TextInput
									{...register('abn')}
									autoComplete="on"
									id="abn"
									invalid={Boolean(errors.abn?.message)}
									label="Australian Business Number (ABN)"
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
									{...register('acn')}
									autoComplete="on"
									id="acn"
									invalid={Boolean(errors.acn?.message)}
									label="Australian Company Number (ACN)"
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
			</Form>
		</FormContainer>
	);
}
