import { Fragment, ReactElement, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FieldError, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Divider } from '@ag.ds-next/react/divider';
import { TextInput } from '@ag.ds-next/react/text-input';
import { Radio } from '@ag.ds-next/react/radio';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { AppLayout } from '../../../../components/Layout/AppLayout';
import { PageTitle } from '../../../../components/PageTitle';
import type { NextPageWithLayout } from '../../../_app';
import { FormPageAlert } from '../../../../components/FormMobileFoodVendorPermit/FormPageAlert';
import { hasMultipleErrors } from '../../../../components/FormMobileFoodVendorPermit/utils';
import {
	inviteStaffFormSchema,
	InviteStaffFormSchema,
} from '../../../../components/FormMobileFoodVendorPermit/steps/FormState';
import {
	StaffProvider,
	useStaffGlobalState,
} from '../../../../components/Staff/StaffProvider';

const Page: NextPageWithLayout = () => {
	const router = useRouter();
	const { accessRequestsSetState } = useStaffGlobalState();

	const uuid = useRef(crypto.randomUUID());

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<InviteStaffFormSchema>({
		resolver: zodResolver(inviteStaffFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const [isSaving, setIsSaving] = useState(false);

	const onSubmit: SubmitHandler<InviteStaffFormSchema> = (data) => {
		setIsSaving(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			accessRequestsSetState(data);
			router.push(`/app/staff?success=true&accessRequestId=${uuid.current}`);
		}, 1500);
	};

	const onCancelClick = () => {
		router.push('/app/staff');
	};

	const showErrorAlert = hasMultipleErrors(errors);

	return (
		<Fragment>
			<DocumentTitle title="Invite staff member" />

			<PageContent>
				<Stack gap={3}>
					<DirectionLink direction="left" href="/app/staff">
						Back
					</DirectionLink>

					<PageTitle
						title="Invite staff member"
						hasAllFieldsRequiredMessage
						introduction={
							<>
								Send a staff invite for{' '}
								<Text fontSize="md" fontWeight="bold">
									Walker‘s Frozen Food
								</Text>
								.
							</>
						}
					/>

					<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
						<FormStack>
							{showErrorAlert && (
								<FormPageAlert
									errors={
										// TODO fix this
										errors as {
											[key: string]: {
												message?: string;
												from?: FieldError;
												to?: FieldError;
												value?: FieldError;
												formatted?: FieldError;
											};
										}
									}
								/>
							)}

							<input
								{...register('id')}
								id="id"
								required
								type="hidden"
								value={uuid.current}
							/>

							<TextInput
								autoComplete="given-name"
								label="First name"
								{...register('firstName')}
								id="firstName"
								invalid={Boolean(errors?.firstName?.message)}
								maxWidth="lg"
								message={errors?.firstName?.message}
								required
							/>

							<TextInput
								autoComplete="family-name"
								label="Last name"
								{...register('lastName')}
								id="lastName"
								invalid={Boolean(errors?.lastName?.message)}
								maxWidth="lg"
								message={errors?.lastName?.message}
								required
							/>

							<TextInput
								autoComplete="email"
								label="Email address"
								type="email"
								{...register('email')}
								id="email"
								invalid={Boolean(errors?.email?.message)}
								maxWidth="lg"
								message={errors?.email?.message}
								required
							/>

							<TextInput
								autoComplete="mobile"
								label="Mobile number"
								type="phone"
								{...register('mobileNumber')}
								id="mobileNumber"
								invalid={Boolean(errors?.mobileNumber?.message)}
								maxWidth="md"
								message={errors?.mobileNumber?.message}
								required
							/>
						</FormStack>

						<Divider />

						<ControlGroup
							label="Role"
							invalid={Boolean(errors.role?.message)}
							message={errors.role?.message}
							required
							block
						>
							{['Manager', 'Employee', 'Trainee', 'Work experience'].map(
								(option) => (
									<Radio
										key={option}
										{...register('role')}
										value={option}
										invalid={Boolean(errors.role?.message)}
									>
										{option}
									</Radio>
								)
							)}
						</ControlGroup>

						<ControlGroup
							hideOptionalLabel
							invalid={Boolean(errors.trainingCompleted?.[0]?.message)}
							label="Training completed"
							message={errors.trainingCompleted?.[0]?.message}
							block
						>
							{[
								'Ice cream making',
								'Packaging',
								'Distribution',
								'Deliveries',
							].map((option) => (
								<Checkbox
									key={option}
									{...register('trainingCompleted')}
									value={option}
									invalid={Boolean(errors.trainingCompleted?.[0]?.message)}
								>
									{option}
								</Checkbox>
							))}
						</ControlGroup>

						<Divider />

						<ButtonGroup>
							<Button type="submit" loading={isSaving}>
								Send Invite
							</Button>

							<Button variant="tertiary" onClick={onCancelClick}>
								Cancel
							</Button>
						</ButtonGroup>
					</Stack>
				</Stack>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<AppLayout>
			<StaffProvider>{page}</StaffProvider>
		</AppLayout>
	);
};
