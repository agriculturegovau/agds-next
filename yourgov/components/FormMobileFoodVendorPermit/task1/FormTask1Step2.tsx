import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Radio } from '@ag.ds-next/react/radio';
import { Stack } from '@ag.ds-next/react/stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { ConditionalFieldContainer } from '../../ConditionalFieldContainer';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors } from '../utils';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormTask1Container } from './FormTask1Container';
import { useFormTask1Context } from './FormTask1Provider';
import {
	task1Step2FormSchema,
	type Task1Step2FormSchema,
} from './FormTask1FormState';

export function FormTask1Step2() {
	const { formState, setFormState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const {
		watch,
		register,
		handleSubmit,
		trigger,
		formState: { errors, isSubmitted },
	} = useForm<Task1Step2FormSchema>({
		defaultValues: formState.task1?.step2,
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(task1Step2FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Task1Step2FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		setFormState({
			...formState,
			task1: {
				...formState.task1,
				step2: {
					...data,
					completed: !isSavingBeforeExiting,
					started: true,
				},
			},
		});
	};

	const showErrorAlert = hasMultipleErrors(errors);

	const showAbn = watch('businessStructure') === 'Business';
	const showAcn = watch('businessStructure') === 'Company';

	useEffect(() => {
		if (isSubmitted) trigger();
	}, [isSubmitted, trigger]);

	return (
		<FormTask1Container
			formTitle="Business details"
			formIntroduction="Your business details must match your business registration."
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<FormStack>
					{showErrorAlert && <FormPageAlert errors={errors} />}
					<TextInput
						id="businessName"
						label="Business or company name"
						{...register('businessName')}
						invalid={Boolean(errors.businessName?.message)}
						message={errors.businessName?.message}
						required
						maxWidth="xl"
					/>

					<TextInput
						id="tradingName"
						label="Trading name"
						{...register('tradingName')}
						invalid={Boolean(errors.tradingName?.message)}
						message={errors.tradingName?.message}
						maxWidth="xl"
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
