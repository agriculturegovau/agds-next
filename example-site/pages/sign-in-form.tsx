import { useEffect, useState, useRef } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { PasswordInput } from '@ag.ds-next/react/password-input';
import { Stack } from '@ag.ds-next/react/stack';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Prose } from '@ag.ds-next/react/prose';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { useScrollToField } from '@ag.ds-next/react/field';
import { PageContent } from '@ag.ds-next/react/content';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Divider } from '@ag.ds-next/react/divider';
import { H1 } from '@ag.ds-next/react/heading';
import { SiteLayout } from '../components/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';

const formSchema = yup
	.object({
		email: yup.string().email('Invalid email').required('Enter your email'),
		password: yup.string().required('Enter your password'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

const SignInForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const networkErrorPageAlertRef = useRef<HTMLDivElement>(null);
	const [networkErrorMessage, setNetworkErrorMessage] = useState<string>();
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
		console.log(data);
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setNetworkErrorMessage('Incorrect username or password');
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

	const hasNetworkErrors = Boolean(networkErrorMessage);

	useEffect(() => {
		if (!hasNetworkErrors) return;
		networkErrorPageAlertRef.current?.focus();
	}, [hasNetworkErrors]);

	return (
		<Stack gap={3}>
			{hasNetworkErrors && (
				<PageAlert ref={networkErrorPageAlertRef} tabIndex={-1} tone="error">
					<Text as="p">{networkErrorMessage}</Text>
				</PageAlert>
			)}
			{hasClientErrors && (
				<PageAlert
					ref={clientErrorPageAlertRef}
					tabIndex={-1}
					title="There is a problem"
					tone="error"
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
			<form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
				<FormStack>
					<TextInput
						{...register('email')}
						id="email"
						invalid={Boolean(errors.email?.message)}
						label="Email"
						maxWidth="xl"
						message={errors.email?.message}
						required
						type="email"
					/>
					<PasswordInput
						{...register('password')}
						id="password"
						invalid={Boolean(errors.password?.message)}
						label="Password"
						maxWidth="xl"
						message={errors.password?.message}
						required
					/>
					<TextLink css={{ alignSelf: 'flex-start' }} href="#">
						Forgot password?
					</TextLink>
					<div>
						<Button loading={isSubmitting} type="submit">
							Sign in
						</Button>
					</div>
				</FormStack>
			</form>
		</Stack>
	);
};

export default function SignInFormPage() {
	return (
		<>
			<DocumentTitle title="Sign in" />
			<SiteLayout template={{ name: 'Sign-in form', slug: 'sign-in' }}>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Stack gap={3}>
								<Stack gap={0.5}>
									<H1>Sign in form - xxl/display (H1)</H1>
									<Text as="p" color="muted" fontSize="md">
										Introductory paragraph providing context for this sign in
										form. All questions on page must be related - md/default
										(P).
									</Text>
								</Stack>
								<SignInForm />
								<Divider />
								<Prose>
									<p>
										Don’t have an account? <a href="#">Create account</a>
									</p>
									<p>
										Read our <a href="#">privacy policy</a>
									</p>
								</Prose>
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</SiteLayout>
		</>
	);
}
