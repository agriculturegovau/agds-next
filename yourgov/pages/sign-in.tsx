import { Fragment, ReactElement, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { PasswordInput } from '@ag.ds-next/react/password-input';
import { Stack } from '@ag.ds-next/react/stack';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { useScrollToField } from '@ag.ds-next/react/field';
import { TextLink } from '@ag.ds-next/react/text-link';
import { PageContent } from '@ag.ds-next/react/content';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Divider } from '@ag.ds-next/react/divider';
import { Text } from '@ag.ds-next/react/text';
import { H1 } from '@ag.ds-next/react/heading';
import { useAuth } from '../lib/useAuth';
import { mockUser } from '../data/mockUsers';
import { DocumentTitle } from '../components/DocumentTitle';
import { SiteLayout } from '../components/Layout/SiteLayout';

export default function Page() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const { signIn } = useAuth();

	function onSubmit() {
		signIn(mockUser);
		const redirectTo = searchParams.get('redirectTo');
		router.push(redirectTo ? `/app?redirectTo=${redirectTo}` : '/app');
	}

	return (
		<Fragment>
			<DocumentTitle title="Sign in" />
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<Stack gap={0.5}>
								<H1>Sign in to yourGov</H1>
								<Text as="p" fontSize="md" color="muted">
									Access government services, quickly and securely.
								</Text>
							</Stack>
							<SignInForm onSubmit={onSubmit} />
							<Divider />
							<Stack gap={1.5}>
								<Text as="p">
									Don’t have an account?{' '}
									<TextLink href="/not-found">Create account</TextLink>
								</Text>
								<Text as="p">
									Read our <TextLink href="/not-found">privacy policy</TextLink>
								</Text>
							</Stack>
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		</Fragment>
	);
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <SiteLayout>{page}</SiteLayout>;
};

const formSchema = yup
	.object({
		email: yup.string().email('Invalid email').required('Enter your email'),
		password: yup.string().required('Enter your password'),
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

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		console.log(data);
		setIsSubmitting(true);
		setTimeout(() => {
			props.onSubmit(data);
			setIsSubmitting(false);
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
						label="Email"
						type="email"
						{...register('email')}
						id="email"
						invalid={Boolean(errors.email?.message)}
						message={errors.email?.message}
						maxWidth="xl"
						required
					/>
					<PasswordInput
						label="Password"
						{...register('password')}
						id="password"
						invalid={Boolean(errors.password?.message)}
						message={errors.password?.message}
						maxWidth="xl"
						required
					/>
					<div>
						<TextLink href="/not-found">Forgot password?</TextLink>
					</div>
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
