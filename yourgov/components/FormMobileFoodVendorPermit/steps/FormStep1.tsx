import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { Details } from '@ag.ds-next/react/details';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { TextInput } from '@ag.ds-next/react/text-input';
import { useTernaryState } from '@ag.ds-next/react/core';
import { useGlobalForm } from '../GlobalFormProvider';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { ModalUnavailableFeature } from '../../Staff/AccessRequestsTable/ModalUnavailableFeature';
import { step1Part2FormSchema, type Step1Part2FormSchema } from './FormState';
import { FormContainer } from './FormContainer';
import { formSteps, useFormContext } from './FormProvider';
import { Form } from './Form';

export function FormStep1() {
	const { step1GetState } = useGlobalForm();
	const step1State = step1GetState();
	const { query } = useRouter();
	const isUpdated = query.success === 'true';
	const [isSuccessMessageVisible, setIsSuccessMessageVisible] =
		useState(isUpdated);

	const isEditingFromReviewStep = useIsEditingFromReviewStep();
	const [isUnavailableModalOpen, openUnavailableModal, closeUnavailableModal] =
		useTernaryState(false);

	useEffect(() => {
		setIsSuccessMessageVisible(isUpdated);
	}, [isUpdated]);

	return (
		<FormContainer
			formIntroduction="Confirm your name and contact details."
			formTitle={
				isEditingFromReviewStep
					? formSteps[0].labelWhenChanging
					: formSteps[0].label
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
									{step1State?.firstName}
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Last name</SummaryListItemTerm>
								<SummaryListItemDescription>
									{step1State?.lastName}
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>Email address</SummaryListItemTerm>
								<SummaryListItemDescription>
									{step1State?.email}
								</SummaryListItemDescription>
							</SummaryListItem>
						</SummaryList>

						{isEditingFromReviewStep ? (
							<Button
								alignSelf="start"
								onClick={openUnavailableModal}
								variant="text"
							>
								Change business owner details
							</Button>
						) : (
							<ButtonLink
								alignSelf="start"
								href={formSteps[0].items && formSteps[0].items[0].href}
								variant="text"
							>
								Change business owner details
							</ButtonLink>
						)}
					</Stack>
				</FormStack>
				<AdditionalDetailsForm />
			</Stack>

			<ModalUnavailableFeature
				isOpen={isUnavailableModalOpen}
				onClose={closeUnavailableModal}
				onConfirm={closeUnavailableModal}
			/>
		</FormContainer>
	);
}

function AdditionalDetailsForm() {
	const { step1GetState, step1SetState, isSavingBeforeExiting } =
		useGlobalForm();
	const { submitStep } = useFormContext();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Step1Part2FormSchema>({
		defaultValues: {
			contactPhoneNumber: step1GetState()?.contactPhoneNumber,
		},
		resolver: zodResolver(step1Part2FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Step1Part2FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step1SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	return (
		<Form noValidate={false} onSubmit={handleSubmit(onSubmit)}>
			<FormStack>
				<H2>Additional details</H2>
				<TextInput
					{...register('contactPhoneNumber')}
					autoComplete="tel"
					hint="Any Australian mobile or landline. For example, 0444111222 or 02 9988 7766"
					id="contactPhoneNumber"
					invalid={Boolean(errors.contactPhoneNumber)}
					label="Contact phone number"
					message={errors.contactPhoneNumber?.message}
				/>
			</FormStack>
		</Form>
	);
}
