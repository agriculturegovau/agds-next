import { Fragment, ReactElement, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PageContent } from '@ag.ds-next/react/content';
import { Details } from '@ag.ds-next/react/details';
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
import { CalloutDefinitionList } from '../../../../components/Staff/CalloutDefinitionList';
import {
	StaffProvider,
	useStaffGlobalState,
} from '../../../../components/Staff/StaffProvider';
import { randomUUID } from '../../../../lib/randomUUID';

const Page: NextPageWithLayout = () => {
	const router = useRouter();
	const { staffMembersCreate } = useStaffGlobalState();

	const uuid = useRef(randomUUID());

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<InviteStaffFormSchema>({
		resolver: zodResolver(inviteStaffFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});
	const errorsWithoutTrainingCompleted = {
		...errors,
		trainingCompleted: {},
	};

	const [isSaving, setIsSaving] = useState(false);

	const onSubmit: SubmitHandler<InviteStaffFormSchema> = (data) => {
		setIsSaving(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			staffMembersCreate(data);
			router.push(`/app/staff?successType=invite&staffId=${uuid.current}`);
		}, 1500);
	};

	const onCancelClick = () => {
		router.push('/app/staff');
	};

	const showErrorAlert = hasMultipleErrors(errorsWithoutTrainingCompleted);

	return (
		<Fragment>
			<DocumentTitle title="Invite staff member | Staff" />

			<PageContent>
				<Stack gap={3}>
					<DirectionLink direction="left" href="/app/staff">
						Back
					</DirectionLink>

					<PageTitle
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
						title="Invite staff member"
					/>

					<Stack as="form" gap={3} noValidate onSubmit={handleSubmit(onSubmit)}>
						<FormStack>
							{showErrorAlert && (
								<FormPageAlert errors={errorsWithoutTrainingCompleted} />
							)}

							<input
								{...register('id')}
								id="id"
								required
								type="hidden"
								value={uuid.current}
							/>

							<TextInput
								{...register('firstName')}
								autoComplete="given-name"
								id="firstName"
								invalid={Boolean(errors?.firstName?.message)}
								label="First name"
								maxWidth="lg"
								message={errors?.firstName?.message}
								required
							/>

							<TextInput
								{...register('lastName')}
								autoComplete="family-name"
								id="lastName"
								invalid={Boolean(errors?.lastName?.message)}
								label="Last name"
								maxWidth="lg"
								message={errors?.lastName?.message}
								required
							/>

							<TextInput
								{...register('email')}
								autoComplete="email"
								id="email"
								invalid={Boolean(errors?.email?.message)}
								label="Email address"
								maxWidth="lg"
								message={errors?.email?.message}
								required
								type="email"
							/>

							<TextInput
								{...register('mobile')}
								autoComplete="tel"
								id="mobile"
								invalid={Boolean(errors?.mobile?.message)}
								label="Mobile number"
								maxWidth="md"
								message={errors?.mobile?.message}
								required
								type="phone"
							/>
						</FormStack>

						<Divider />

						<Details
							iconBefore
							label="Understanding the permissions for each role"
						>
							<CalloutDefinitionList />
						</Details>

						<ControlGroup
							block
							invalid={Boolean(errors.role?.message)}
							label="Role"
							message={errors.role?.message}
							required
						>
							{['Manager', 'Employee', 'Trainee', 'Work experience'].map(
								(option) => (
									<Radio
										{...register('role')}
										invalid={Boolean(errors.role?.message)}
										key={option}
										value={option}
									>
										{option}
									</Radio>
								)
							)}
						</ControlGroup>

						<ControlGroup block label="Training completed">
							{[
								'Deliveries',
								'Distribution',
								'Ice cream making',
								'Packaging',
							].map((option) => (
								<Checkbox
									{...register('trainingCompleted')}
									invalid={Boolean(errors.trainingCompleted?.[0]?.message)}
									key={option}
									value={option}
								>
									{option}
								</Checkbox>
							))}
						</ControlGroup>

						<Divider />

						<ButtonGroup>
							<Button loading={isSaving} type="submit">
								Send invite
							</Button>

							<Button onClick={onCancelClick} variant="tertiary">
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
