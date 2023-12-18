import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { TextLink } from '@ag.ds-next/react/text-link';
import { useScrollToField } from '@ag.ds-next/react/field';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Divider } from '@ag.ds-next/react/divider';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { useGlobalForm } from './GlobalFormProvider';
import {
	task1Step1FormSchema,
	Task1Step1FormSchema,
} from './FormTask1FormState';

export function FormTask1Step1ChangeDetails() {
	const router = useRouter();
	const { formState, setFormState, typeSearchParm } = useGlobalForm();

	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Task1Step1FormSchema>({
		defaultValues: formState.task1?.step1,
		resolver: yupResolver(task1Step1FormSchema),
	});

	const [isSaving, setIsSaving] = useState(false);

	const step1Path = `/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1/step-1?type=${typeSearchParm}`;

	const onSubmit: SubmitHandler<Task1Step1FormSchema> = (data) => {
		setFocusedError(false);
		setIsSaving(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			setFormState({
				...formState,
				task1: { ...formState.task1, step1: { ...data } },
			});
			router.push(step1Path);
		}, 1500);
	};

	function onDiscardChangesClick() {
		router.push(step1Path);
	}

	const onError: SubmitErrorHandler<Task1Step1FormSchema> = () => {
		setFocusedError(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 8 }}>
				<Stack gap={3} alignItems="flex-start">
					<DirectionLink direction="left" href={step1Path}>
						Back
					</DirectionLink>
					<Stack gap={1.5}>
						<H1>Provide business owner details</H1>
						<Text as="p" fontSize="md" color="muted">
							Confirm your name and contact details.
						</Text>
						<FormRequiredFieldsMessage />
					</Stack>
					<Stack gap={1.5} width="100%">
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
														{Array.isArray(value)
															? value[0].message
															: value.message}
													</TextLink>
												</ListItem>
											))}
										</UnorderedList>
									</PageAlert>
								)}
								<TextInput
									label="First name"
									autoComplete="given-name"
									{...register('firstName')}
									id="firstName"
									invalid={Boolean(errors.firstName?.message)}
									message={errors.firstName?.message}
									maxWidth="xl"
									autoFocus
									required
								/>
								<TextInput
									label="Last name"
									autoComplete="family-name"
									{...register('lastName')}
									id="lastName"
									invalid={Boolean(errors.lastName?.message)}
									message={errors.lastName?.message}
									maxWidth="xl"
									required
								/>
								<TextInput
									label="Email"
									type="email"
									autoComplete="email"
									{...register('email')}
									id="email"
									invalid={Boolean(errors.email?.message)}
									message={errors.email?.message}
									maxWidth="xl"
									required
								/>
							</FormStack>
							<Divider />
							<ButtonGroup>
								<Button type="submit" loading={isSaving}>
									Save changes
								</Button>
								<Button variant="tertiary" onClick={onDiscardChangesClick}>
									Discard changes
								</Button>
							</ButtonGroup>
						</Stack>
					</Stack>
				</Stack>
			</Column>
		</Columns>
	);
}
