import format from 'date-fns/format';
import { Fragment, ReactElement, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PageContent } from '@ag.ds-next/react/content';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Divider } from '@ag.ds-next/react/divider';
import { Radio } from '@ag.ds-next/react/radio';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
import { H2 } from '@ag.ds-next/react/heading';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { Details } from '@ag.ds-next/react/details';
import { Box } from '@ag.ds-next/react/box';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { AppLayout } from '../../../components/Layout/AppLayout';
import { PageTitle } from '../../../components/PageTitle';
import type { NextPageWithLayout } from '../../_app';
import {
	editStaffFormSchema,
	EditStaffFormSchema,
} from '../../../components/FormMobileFoodVendorPermit/steps/FormState';
import {
	StaffProvider,
	useStaffGlobalState,
} from '../../../components/Staff/StaffProvider';
import NotFoundPage from '../../../pages/not-found';
import { ModalConfirmRemoveAccess } from '../../../components/Staff/ModalConfirmRemoveAccess';
import { CalloutDefinitionList } from '../../../components/Staff/CalloutDefinitionList';

const Page: NextPageWithLayout = () => {
	const router = useRouter();
	const { staffMembersGetState, staffMembersUpdate } = useStaffGlobalState();
	const [removeModalOpen, setRemoveModalOpen] = useState(false);
	const staffMember = useMemo(
		() =>
			staffMembersGetState().find(
				(staffMember) =>
					staffMember.name.toLowerCase().replaceAll(' ', '-') ===
					router.query.slug
			),
		[router, staffMembersGetState]
	);

	const { register, handleSubmit, reset } = useForm<EditStaffFormSchema>({
		defaultValues: {
			role: staffMember?.role,
			trainingCompleted: staffMember?.trainingCompleted,
		},
		resolver: zodResolver(editStaffFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	useEffect(() => {
		reset({
			role: staffMember?.role,
			trainingCompleted: staffMember?.trainingCompleted,
		});
	}, [reset, staffMember]);

	const [isSaving, setIsSaving] = useState(false);

	if (!staffMember) {
		return <NotFoundPage />;
	}

	const onClickRemoveAccess = () => {
		setRemoveModalOpen(true);
	};

	const onConfirmRemove = () => {
		setRemoveModalOpen(false);
		router.push(`/app/staff?successType=remove&staffId=${staffMember.id}`);
	};

	const onSubmit: SubmitHandler<EditStaffFormSchema> = (updates) => {
		setIsSaving(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			staffMembersUpdate({ staffToUpdate: staffMember, updates });
			router.push(`/app/staff?successType=update&staffId=${staffMember.id}`);
		}, 1500);
	};

	const onCancelClick = () => {
		router.push('/app/staff');
	};

	return (
		<Fragment>
			<DocumentTitle title={`View ${staffMember.name} | Staff`} />

			<PageContent>
				<Stack gap={3}>
					<DirectionLink direction="left" href="/app/staff">
						Back
					</DirectionLink>

					<Stack alignItems="start" gap={1.5}>
						<PageTitle
							title={staffMember.name}
							introduction={
								<Text>
									Change role or remove access for{' '}
									<Text fontSize="md" fontWeight="bold">
										{staffMember.name}
									</Text>
									.
								</Text>
							}
						/>

						<StatusBadge tone="infoMedium" label="Invited" />
					</Stack>

					<Stack gap={2}>
						<H2>Personal details</H2>

						<SummaryList>
							<SummaryListItem>
								<SummaryListItemTerm>Name</SummaryListItemTerm>

								<SummaryListItemDescription>
									{staffMember.name}
								</SummaryListItemDescription>
							</SummaryListItem>

							<SummaryListItem>
								<SummaryListItemTerm>Email</SummaryListItemTerm>

								<SummaryListItemDescription>
									{staffMember.email}
								</SummaryListItemDescription>
							</SummaryListItem>

							<SummaryListItem>
								<SummaryListItemTerm>Mobile number</SummaryListItemTerm>

								<SummaryListItemDescription>
									{staffMember.mobile}
								</SummaryListItemDescription>
							</SummaryListItem>

							{staffMember.dateJoined && (
								<SummaryListItem>
									<SummaryListItemTerm>Date joined</SummaryListItemTerm>

									<SummaryListItemDescription>
										{format(new Date(staffMember.dateJoined), 'd MMMM yyyy')}
									</SummaryListItemDescription>
								</SummaryListItem>
							)}
						</SummaryList>
					</Stack>

					<Stack gap={2}>
						<H2>Remove access</H2>

						<Text as="p" id="remove-access-description">
							Remove this person‘s access to your business. You can invite them
							again at any time.
						</Text>

						<Button
							alignSelf="start"
							aria-describedby="remove-access-description"
							onClick={onClickRemoveAccess}
							size="sm"
							variant="secondary"
						>
							Remove {staffMember.name}
						</Button>
					</Stack>

					<Stack as="form" gap={2} onSubmit={handleSubmit(onSubmit)} noValidate>
						<H2>Change role</H2>

						<Details
							iconBefore
							label="Understanding the permissions for each role"
						>
							<CalloutDefinitionList />
						</Details>

						<ControlGroup label="Export service role" required block>
							{['Manager', 'Employee', 'Trainee', 'Work experience'].map(
								(option) => (
									<Radio key={option} {...register('role')} value={option}>
										{option}
									</Radio>
								)
							)}
						</ControlGroup>

						<H2>Training completed</H2>

						<ControlGroup label="Training completed" block>
							{[
								'Deliveries',
								'Distribution',
								'Ice cream making',
								'Packaging',
							].map((option) => (
								<Checkbox
									key={option}
									{...register('trainingCompleted')}
									value={option}
								>
									{option}
								</Checkbox>
							))}
						</ControlGroup>

						<Box paddingY={1}>
							<Divider />
						</Box>

						<ButtonGroup>
							<Button type="submit" loading={isSaving}>
								Save changes
							</Button>

							<Button variant="tertiary" onClick={onCancelClick}>
								Cancel
							</Button>
						</ButtonGroup>
					</Stack>
				</Stack>

				<ModalConfirmRemoveAccess
					itemsToDelete={staffMember}
					isOpen={removeModalOpen}
					onClose={() => setRemoveModalOpen(false)}
					onConfirm={onConfirmRemove}
				/>
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
