import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { TextLink } from '@ag.ds-next/react/text-link';
import { useScrollToField } from '@ag.ds-next/react/field';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Callout } from '@ag.ds-next/react/callout';
import { tokens } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';

export const addEmployeeFormSchema = yup
	.object({
		givenName: yup.string().required('Enter employee given name'),
		familyName: yup.string().required('Enter employee family name'),
		email: yup
			.string()
			.email('Enter a valid email')
			.required('Enter employee email address'),
	})
	.required();

export type AddEmployeeFormSchema = yup.InferType<typeof addEmployeeFormSchema>;

export type AddEmployeeFormProps = {
	onSubmit: (data: AddEmployeeFormSchema) => void;
	onCancel: () => void;
};

export function AddEmployeeForm(props: AddEmployeeFormProps) {
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AddEmployeeFormSchema>({
		resolver: yupResolver(addEmployeeFormSchema),
	});

	const onSubmit: SubmitHandler<AddEmployeeFormSchema> = (data) => {
		props.onSubmit(data);
	};

	const onError: SubmitErrorHandler<AddEmployeeFormSchema> = () => {
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
										{Array.isArray(value) ? value[0].message : value.message}
									</TextLink>
								</ListItem>
							))}
						</UnorderedList>
					</PageAlert>
				)}
				<TextInput
					label="Given name"
					{...register('givenName')}
					id="givenName"
					invalid={Boolean(errors.givenName?.message)}
					message={errors.givenName?.message}
					maxWidth="xl"
					autoFocus
					required
				/>
				<TextInput
					label="Family name"
					{...register('familyName')}
					id="familyName"
					invalid={Boolean(errors.familyName?.message)}
					message={errors.familyName?.message}
					maxWidth="xl"
					required
				/>
				<TextInput
					label="Email address"
					hint="An invite to link this business to their yourGov account will be sent to this address"
					type="email"
					autoComplete="email"
					{...register('email')}
					id="email"
					invalid={Boolean(errors.email?.message)}
					message={errors.email?.message}
					maxWidth="xl"
					required
				/>
				<Callout
					title="Employees will be invited to link this business to their yourGov account"
					tone="info"
					variant="compact"
				>
					<Text as="p" maxWidth={tokens.maxWidth.bodyText}>
						Business owners can grant permission to manage permits and licences
						to employees who accept the email invitation. Linking is optional
						and employees can choose to link or unlink a business at any time.
					</Text>
				</Callout>
			</FormStack>
			<ButtonGroup>
				<Button type="submit">Add employee</Button>
				<Button variant="tertiary" onClick={props.onCancel}>
					Cancel
				</Button>
			</ButtonGroup>
		</Stack>
	);
}
