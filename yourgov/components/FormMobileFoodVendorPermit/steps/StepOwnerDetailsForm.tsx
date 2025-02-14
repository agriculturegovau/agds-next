import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonLink } from '@ag.ds-next/react/button';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Details } from '@ag.ds-next/react/details';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Prose } from '@ag.ds-next/react/prose';
import { Radio } from '@ag.ds-next/react/radio';
import { Stack } from '@ag.ds-next/react/stack';
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { useGlobalForm } from '../GlobalFormProvider';
import {
	stepOwnerDetailsOtherDetailsFormSchema,
	type StepOwnerDetailsOtherDetailsFormSchema,
} from './FormState';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import { Form } from './Form';
import { stepKeyToStepDataMap } from './stepsData';

export function StepOwnerDetailsForm() {
	const {
		isSavingBeforeExiting,
		stepOwnerDetailsGetState,
		stepOwnerDetailsSetState,
		stepOwnerDetailsReviewEditGetState,
		stepOwnerDetailsReviewEditSetState,
	} = useGlobalForm();

	const editingStep = useIsEditingFromReviewStep();
	const reviewEditState = stepOwnerDetailsReviewEditGetState();
	const stepState =
		editingStep?.match && reviewEditState?.edited
			? stepOwnerDetailsReviewEditGetState()
			: stepOwnerDetailsGetState();

	const { query } = useRouter();
	const isUpdated = query.success === 'true';
	const [isSuccessMessageVisible, setIsSuccessMessageVisible] =
		useState(isUpdated);
	const [isNavigatingToSubStep, setIsNavigatingToSubStep] = useState(false);

	const changeBusinessOwnerDetailsHref = stepKeyToStepDataMap.stepOwnerDetails
		?.items
		? stepKeyToStepDataMap.stepOwnerDetails.items[0][
				editingStep?.match ? 'changeHref' : 'href'
		  ]
		: undefined;

	useEffect(() => {
		setIsSuccessMessageVisible(isUpdated);
	}, [isUpdated]);

	const [isSaving, setIsSaving] = useState(false);

	const { submitStep } = useFormContext();

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm<StepOwnerDetailsOtherDetailsFormSchema>({
		defaultValues: {
			contactMethod: stepOwnerDetailsGetState()?.contactMethod,
		},
		resolver: zodResolver(stepOwnerDetailsOtherDetailsFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<
		StepOwnerDetailsOtherDetailsFormSchema
	> = async (data) => {
		setIsSaving(true);
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		stepOwnerDetailsSetState({
			...stepState,
			...data,
			completed: !isSavingBeforeExiting,
			edited: editingStep?.match ? true : undefined,
			started: true,
		});
	};

	console.log(`reviewEditState?.edited`, reviewEditState?.edited);
	console.log(`isDirty`, isDirty);
	console.log(
		`isSaving || (isNavigatingToSubStep && reviewEditState?.edited)`,
		isSaving || (isNavigatingToSubStep && reviewEditState?.edited)
	);
	console.log('***************');

	console.log(
		`isSaving || (!isDirty && isNavigatingToSubStep && reviewEditState?.edited)`,
		isSaving || (!isDirty && isNavigatingToSubStep && reviewEditState?.edited)
	);

	return (
		<FormContainer
			formIntroduction="Confirm your name and contact details."
			formTitle={
				stepKeyToStepDataMap.stepOwnerDetails[
					editingStep?.match ? 'changeLabel' : 'label'
				]
			}
			shouldFocusTitle={!isSuccessMessageVisible}
		>
			<Stack gap={3}>
				<FormStack>
					<H2>Confirm business owner details</H2>
					<Details iconBefore label="How were my details prefilled?">
						<Prose>
							<p>
								We’re working hard to improve the way we do business with you.
								This includes making applications and registrations easier to
								use.
							</p>
							<p>
								If we already have some of the information you need to tell us,
								we’ll pre-fill it into your applications. This saves you
								entering all your details yourself.
							</p>
							<p>
								It’s important to check the pre-filled information in your
								report before you submit it.
							</p>
						</Prose>
					</Details>
					{isSuccessMessageVisible && (
						<SectionAlert
							focusOnMount
							onClose={() => setIsSuccessMessageVisible(false)}
							title="Business owner details have been updated"
							tone="success"
						/>
					)}
					<Stack gap={1.5}>
						<SummaryList>
							<SummaryListItem>
								<SummaryListItemTerm>First name</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepState?.firstName}
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Last name</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepState?.lastName}
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Email address</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepState?.email}
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Mobile number</SummaryListItemTerm>
								<SummaryListItemDescription>
									{stepState?.mobileNumber}
								</SummaryListItemDescription>
							</SummaryListItem>
						</SummaryList>

						<ButtonLink
							alignSelf="start"
							href={changeBusinessOwnerDetailsHref}
							// @ts-ignore
							onClick={() => setIsNavigatingToSubStep(true)}
							variant="text"
						>
							Change business owner details
						</ButtonLink>
					</Stack>
				</FormStack>
				<Form
					functionToCallWhenLeaving={() => {
						stepOwnerDetailsReviewEditSetState({});
					}}
					editingCancel={() => {
						stepOwnerDetailsSetState({});
					}}
					noValidate={false}
					onSubmit={handleSubmit(onSubmit)}
					warnOnUnsavedChanges={isDirty || reviewEditState?.edited}
					bypassWarnOnUnsavedChanges={
						isSaving ||
						(!isDirty && isNavigatingToSubStep && reviewEditState?.edited)
					}
				>
					<FormStack>
						<ControlGroup
							block
							id="contactMethod"
							invalid={Boolean(errors.contactMethod)}
							label="Preferred contact method"
							message={errors.contactMethod?.message}
							required
						>
							<Radio {...register('contactMethod')} value="SMS">
								SMS
							</Radio>
							<Radio {...register('contactMethod')} value="Email">
								Email
							</Radio>
						</ControlGroup>
					</FormStack>
				</Form>
			</Stack>
		</FormContainer>
	);
}
