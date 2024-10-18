import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComboboxMulti } from '@ag.ds-next/react/combobox';
import { Stack } from '@ag.ds-next/react/stack';
import { ShallowErrors } from '../FormState';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { taskFormSteps, useFormContext } from './FormProvider';
import { step7FormSchema, type Step7FormSchema } from './FormState';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { AvatarIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Button, ButtonGroup, ButtonLink } from '@ag.ds-next/react/button';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Modal } from '@ag.ds-next/react/modal';

export function FormStep7() {
	const { formState, step7SetState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormContext();
	const { query } = useRouter();
	const isUpdated = query.success === 'true';
	const [isSuccessMessageVisible, setIsSuccessMessageVisible] =
		useState(isUpdated);

	useEffect(() => {
		setIsSuccessMessageVisible(isUpdated);
	}, [isUpdated]);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Step7FormSchema>({
		defaultValues: formState.task?.step7,
		resolver: isSavingBeforeExiting ? undefined : zodResolver(step7FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<Step7FormSchema>;

	const onSubmit: SubmitHandler<Step7FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step7SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	return (
		<FormContainer
			formTitle="Employees"
			formIntroduction="Add your employee details."
			shouldFocusTitle={isSuccessMessageVisible}
		>
			<Stack gap={3}>
				<Stack gap={2}>
					<PageAlert focusOnMount title="No employees added" tone="error">
						<Text as="p">
							You need to add some staff. You’re amazing, but you can’t do this
							alone. Life is better with friends and team mates.
						</Text>
					</PageAlert>
					<H2 id="list-of-employees">List of employees</H2>
					{isSuccessMessageVisible && (
						<SectionAlert
							focusOnMount
							title="Employee added"
							tone="success"
							onClose={() => setIsSuccessMessageVisible(false)}
						>
							Alex Taylor has been added as an employee.
						</SectionAlert>
					)}
					<TableWrapper>
						<Table aria-labelledby="list-of-employees">
							<TableHead>
								<TableRow>
									<TableHeader>Employee name</TableHeader>
									<TableHeader>Email address</TableHeader>
									<TableHeader>Action</TableHeader>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell>Alex Taylor</TableCell>
									<TableCell>taylor.alex@yahoo.com</TableCell>
									<TableCell>
										<Button variant="text">Remove</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableWrapper>

					<Stack gap={1}>
						<AvatarIcon size="lg" color="muted" />
						<H3>No employees added</H3>
						<Text as="p">You must add an employee to proceed.</Text>
					</Stack>
					<ButtonLink
						alignSelf="start"
						href={taskFormSteps[6].items && taskFormSteps[6].items[0].href}
						iconBefore={PlusIcon}
						size="sm"
						variant="secondary"
					>
						Add employee
					</ButtonLink>
				</Stack>
			</Stack>
			<Modal
				isOpen={false}
				actions={
					<ButtonGroup>
						<Button onClick={() => {}}>Remove employee</Button>
						<Button variant="secondary" onClick={() => {}}>
							Cancel
						</Button>
					</ButtonGroup>
				}
				title="Are you sure you want to remove Alex Taylor as an employee?"
				onClose={() => {}}
			></Modal>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<Controller
					control={control}
					name="cuisine"
					render={({ field: { ref, ...field } }) => (
						<ComboboxMulti
							label="TODO"
							hint="TODO"
							inputRef={ref}
							options={cuisineOptions}
							required
							{...field}
							id="cuisine"
							invalid={Boolean(typeCorrectedErrors.cuisine?.message)}
							message={typeCorrectedErrors.cuisine?.message}
							maxWidth="xl"
							block={false}
						/>
					)}
				/>
				<StepActions />
			</Stack>
		</FormContainer>
	);
}

const cuisineOptions = [{ value: 'american', label: 'American' }];
