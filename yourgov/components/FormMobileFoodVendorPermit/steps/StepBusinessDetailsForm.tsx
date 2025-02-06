import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Radio } from '@ag.ds-next/react/radio';
import { TextInput } from '@ag.ds-next/react/text-input';
import { Divider } from '@ag.ds-next/react/divider';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors } from '../utils';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import {
	stepBusinessDetailsFormSchema,
	type StepBusinessDetailsFormSchema,
} from './FormState';
import { Form } from './Form';
import { stepKeyToStepDataMap } from './stepsData';

export function StepBusinessDetailsForm() {
	const { formState, stepBusinessDetailsSetState, isSavingBeforeExiting } =
		useGlobalForm();
	const { submitStep } = useFormContext();

	const editingStep = useIsEditingFromReviewStep();

	const {
		watch,
		register,
		handleSubmit,
		trigger,
		formState: { errors, isSubmitted },
	} = useForm<StepBusinessDetailsFormSchema>({
		defaultValues: formState.steps?.stepBusinessDetails,
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(stepBusinessDetailsFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<StepBusinessDetailsFormSchema> = async (
		data
	) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		stepBusinessDetailsSetState({
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
				stepKeyToStepDataMap.stepBusinessDetails[
					editingStep?.match ? 'changeLabel' : 'label'
				]
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
						<Radio {...register('businessStructure')} value="Company">
							Company
						</Radio>
						<Radio {...register('businessStructure')} value="Sole trader">
							Sole trader
						</Radio>
					</ControlGroup>

					{showAbn && (
						<>
							<Divider />

							<TextInput
								{...register('abn')}
								autoComplete="on"
								id="abn"
								invalid={Boolean(errors.abn?.message)}
								label="Australian Business Number (ABN)"
								message={errors.abn?.message}
								required
							/>
						</>
					)}

					{showAcn && (
						<>
							<Divider />

							<TextInput
								{...register('acn')}
								autoComplete="on"
								id="acn"
								invalid={Boolean(errors.acn?.message)}
								label="Australian Company Number (ACN)"
								message={errors.acn?.message}
								required
							/>
						</>
					)}
				</FormStack>
			</Form>
		</FormContainer>
	);
}
