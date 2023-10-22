import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef, Fragment, ReactElement } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { Stack } from '@ag.ds-next/react/stack';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { useScrollToField } from '@ag.ds-next/react/field';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';
import { H1 } from '@ag.ds-next/react/heading';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Select } from '@ag.ds-next/react/select';
import { DocumentTitle } from '../components/DocumentTitle';
import { YourGovLayout } from '../components/Layout/YourGovLayout';
import { useAuth, UserRole } from '../lib/useAuth';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
	const { push } = useRouter();
	const { signIn } = useAuth();
	const searchParams = useSearchParams();

	function onSubmit({ firstName, lastName, role }: FormSchema) {
		signIn({
			firstName,
			lastName,
			displayName: [firstName, lastName].join(' '),
			role,
		});
		// When the user signs in, attempt to redirect them to the page they just tried to visit
		// `redirectTo` param is set in `components/PageNotAllowed.tsx`
		const redirectToParam = searchParams.get('redirectTo');
		push(redirectToParam || '/app');
	}

	return (
		<Fragment>
			<DocumentTitle title="Sign in" />
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 7 }}>
						<Stack gap={1.5}>
							<H1>Sign in with yourGov</H1>
							<SignInForm onSubmit={onSubmit} />
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return <YourGovLayout>{page}</YourGovLayout>;
};

const formSchema = yup
	.object({
		firstName: yup.string().required('Enter your first name'),
		lastName: yup.string().required('Enter your last name'),
		role: yup
			.mixed<UserRole>()
			.oneOf(['Employee', 'Employer'], 'Select a role')
			.required('Select a role'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

function SignInForm(props: { onSubmit: (data: FormSchema) => void }) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const clientErrorPageAlertRef = useRef<HTMLDivElement>(null);
	const [hasFocusedClientErrorRef, setHasFocusedClientErrorRef] =
		useState(false);

	const scrollToField = useScrollToField();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = async (data) => {
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			props?.onSubmit(data);
		}, 3000);
	};

	const onError: SubmitErrorHandler<FormSchema> = (errors, event) => {
		console.log(errors, event);
		setHasFocusedClientErrorRef(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasClientErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (!(hasClientErrors || hasFocusedClientErrorRef)) return;
		clientErrorPageAlertRef.current?.focus();
		setHasFocusedClientErrorRef(true);
	}, [hasFocusedClientErrorRef, hasClientErrors]);

	return (
		<Stack gap={3}>
			{hasClientErrors && (
				<PageAlert
					ref={clientErrorPageAlertRef}
					tabIndex={-1}
					tone="error"
					title="There is a problem"
				>
					<Text as="p">Please correct the following fields and try again</Text>
					<UnorderedList>
						{Object.entries(errors).map(([key, value]) => (
							<ListItem key={key}>
								<TextLink href={`#${key}`} onClick={scrollToField}>
									{value.message}
								</TextLink>
							</ListItem>
						))}
					</UnorderedList>
				</PageAlert>
			)}
			<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
				<FormStack>
					<TextInput
						label="First name"
						{...register('firstName')}
						id="firstName"
						autoComplete="given-name"
						invalid={Boolean(errors.firstName?.message)}
						message={errors.firstName?.message}
						maxWidth="xl"
						required
					/>
					<TextInput
						label="Last name"
						{...register('lastName')}
						id="lastName"
						autoComplete="family-name"
						invalid={Boolean(errors.lastName?.message)}
						message={errors.lastName?.message}
						maxWidth="xl"
						required
					/>
					<Select
						label="Role"
						{...register('role')}
						id="role"
						placeholder="Please select"
						invalid={Boolean(errors.role?.message)}
						message={errors.role?.message}
						maxWidth="xl"
						required
						options={[
							{
								label: 'Employer',
								value: 'Employer',
							},
							{
								label: 'Employee',
								value: 'Employee',
							},
						]}
					/>
					<div>
						<Button type="submit" loading={isSubmitting}>
							Sign in
						</Button>
					</div>
				</FormStack>
			</form>
		</Stack>
	);
}
